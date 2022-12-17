import { InMemoryCache } from 'apollo-cache-inmemory'
import { persistCache } from 'apollo-cache-persist'

// Set up your cache.
const cache = new InMemoryCache()

// Set up cache persistence.
persistCache({
  cache,
  storage: window.localStorage,
})

export default cache
