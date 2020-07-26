import React from 'react'
import {useQuery, gql} from '@apollo/client'

import Search from '../Search'
import UserInfo from '../UserInfo'
import Loader from '../Loader'
import Error from '../Error'

const GET_USER_INFO_QUERY = gql`
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

const App = () => {
  const {loading, error, data, fetchMore} = useQuery(GET_USER_INFO_QUERY, {
    notifyOnNetworkStatusChange: true,
  })

  if (loading) return <Loader />
  if (error) return <Error error={error} />

  const {
    viewer: {repositories, ...userInfo},
  } = data

  return (
    <>
      <UserInfo userInfo={userInfo} />
      <Search repositories={repositories} fetchMore={fetchMore} />
    </>
  )
}

export default App
