import { ApolloLink } from 'apollo-link'
import Cookies from 'js-cookie'
import { RetryLink } from '@apollo/client/link/retry'
import { onError } from '@apollo/client/link/error'
import SerializingLink from 'apollo-link-serialize'
import QueueLink from 'apollo-link-queue'
import cache from './apolloPersistedCache'

const retryLink = new RetryLink({ attempts: { max: 3 } })
const serializingLink = new SerializingLink()
const queueLink = new QueueLink()

window.addEventListener('offline', () => queueLink.close())
window.addEventListener('online', () => queueLink.open())

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) =>
      // eslint-disable-next-line no-console
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    )
  }

  if (networkError && networkError.statusCode === 401) {
    Cookies.remove('token')
    window.location.replace('/')
  }
})

const trackerLink = new ApolloLink((operation, forward) => {
  if (forward === undefined) {
    return null
  }
  const context = operation.getContext()
  const trackedQueries =
    JSON.parse(window.localStorage.getItem('trackedQueries') || null) || []

  if (context.tracked) {
    const { operationName, query, variables } = operation

    const newTrackedQuery = {
      query,
      context,
      variables,
      operationName,
    }

    window.localStorage.setItem(
      'trackedQueries',
      JSON.stringify([...trackedQueries, newTrackedQuery])
    )
  }

  return forward(operation).map((data) => {
    if (context.tracked) {
      window.localStorage.setItem(
        'trackedQueries',
        JSON.stringify(trackedQueries)
      )
    }

    return data
  })
})

const timezoneLink = new ApolloLink((operation, forward) => {
  const timezone = window.localStorage.getItem('uco-customer-portal-timezone')

  operation.setContext(({ headers }) => ({
    headers: {
      'X-Timezone': timezone || 'Europe/Prague',
      ...headers,
    },
  }))

  return forward(operation)
})

const localeLink = new ApolloLink((operation, forward) => {
  const locale = Cookies.get('uco-customer-portal-lang')

  operation.setContext(({ headers }) => ({
    headers: {
      'X-Locale': locale || 'cs',
      ...headers,
    },
  }))

  return forward(operation)
})

export default (ctx) => {
  return {
    httpEndpoint: ctx.env.apiUrl,
    defaultHttpLink: true,
    link: ApolloLink.from([
      timezoneLink,
      localeLink,
      trackerLink,
      serializingLink,
      retryLink,
      errorLink,
    ]),
    cache,
  }
}
