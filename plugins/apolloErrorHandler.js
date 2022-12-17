export default ({ graphQLErrors, networkError, operation, forward }, nuxtContext) => {
  // eslint-disable-next-line array-callback-return
  graphQLErrors && graphQLErrors.map((error) => {
    // eslint-disable-next-line no-console
    console.log('handler')
    // eslint-disable-next-line no-console
    console.log(error.message)
    // eslint-disable-next-line no-console
    console.error('graphQLError')

    if (error.message === 'Unauthenticated.') {
      // eslint-disable-next-line no-console
      console.error('Unauthenticated')
      // nuxtContext.store.dispatch('account/onLogout')
    }
  })
}
