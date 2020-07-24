import {ApolloClient, InMemoryCache} from '@apollo/client'
import token from './config'

const httpLink = 'https://api.github.com/graphql'

const client = new ApolloClient({
  uri: httpLink,
  headers: {
    authorization: token ? `token ${token}` : '',
  },
  cache: new InMemoryCache(),
})

export default client
