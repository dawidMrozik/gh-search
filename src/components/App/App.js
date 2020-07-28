import React from 'react'
import {useQuery, gql} from '@apollo/client'

import Search from '../Search'
import UserInfo from '../UserInfo'
import Loader from '../Loader'
import Error from '../Error'

export const GET_REPOSITORY_QUERY = gql`
  query GetRepositories($endCursor: String) {
    viewer {
      login
      avatarUrl
      name
      bio
      repositories(
        first: 10
        after: $endCursor
        orderBy: {field: UPDATED_AT, direction: DESC}
      ) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          name
          updatedAt
          shortDescriptionHTML
          isPrivate
          url
          primaryLanguage {
            color
            name
          }
        }
      }
    }
  }
`

/**
 * App wrapper. It exectues graphql query to the github API and provides data to child components.
 *
 * @component
 */

const App = () => {
  const {loading, error, data, fetchMore} = useQuery(GET_REPOSITORY_QUERY, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <Loader />
  if (error) return <Error error={error} />

  const {
    viewer: {repositories},
  } = data

  return (
    <>
      <UserInfo />
      <Search repositories={repositories} fetchMore={fetchMore} />
    </>
  )
}

export default App
