import React from 'react'
import {useQuery, gql} from '@apollo/client'
import Search from './Search'

const GET_REPOS_QUERY = gql`
  query {
    repositoryOwner(login: "dawidMrozik") {
      repositories(first: 10) {
        nodes {
          id
          name
        }
      }
    }
  }
`

const App = () => {
  const {loading, error, data} = useQuery(GET_REPOS_QUERY)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <Search data={data} />
}

export default App
