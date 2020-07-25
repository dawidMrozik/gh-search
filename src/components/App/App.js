import React from 'react'
import {useQuery, gql} from '@apollo/client'
import Search from '../Search'

const GET_REPOS_QUERY = gql`
  query GetRepositories($startCursor: String) {
    viewer {
      repositories(last: 10, before: $startCursor) {
        pageInfo {
          startCursor
          hasPreviousPage
        }
        nodes {
          id
          name
        }
      }
    }
  }
`

const App = () => {
  const {loading, error, data, fetchMore} = useQuery(GET_REPOS_QUERY, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <Search data={data} fetchMore={fetchMore} />
}

export default App
