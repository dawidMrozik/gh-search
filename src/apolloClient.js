import {ApolloClient, InMemoryCache, gql} from '@apollo/client'
import token from './config'

const httpLink = 'https://api.github.com/graphql'

const client = new ApolloClient({
  uri: httpLink,
  headers: {
    authorization: token ? `token ${token}` : '',
  },
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql`
      query {
        search(type: REPOSITORY, query: "react", first: 10) {
          edges {
            node {
              ... on Repository {
                id
                name
              }
            }
          }
        }
      }
    `,
  })
  .then((result) => console.log(result))

export default client
