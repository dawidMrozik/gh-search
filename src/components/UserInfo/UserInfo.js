import React from 'react'
import {useQuery, gql} from '@apollo/client'

import './UserInfo.css'
import Loader from '../Loader'
import Error from '../Error'

export const GET_USER_INFO_QUERY = gql`
  query GetUserInfo {
    viewer {
      login
      avatarUrl
      name
      bio
    }
  }
`

/**
 * Card that displays informations about the viewer.
 *
 * @component
 * @example
 * const userInfo = {
 *    login: 'johnSmith',
 *    avatarUrl: 'http://link-to-image.com',
 *    bio: 'example bio',
 *    name: 'John Smith'
 * }
 * return <UserInfo userInfo={userInfo} />
 */

const UserInfo = () => {
  const {loading, error, data} = useQuery(GET_USER_INFO_QUERY)

  if (loading) return <Loader />
  if (error) return <Error error={error} />

  const {
    viewer: {login, avatarUrl, bio, name},
  } = data

  return (
    <section className="UserInfo-container">
      <img className="UserInfo-img" src={avatarUrl} alt={`${name}'s avatar`} />
      <div>
        <h2 className="UserInfo-name">{name}</h2>
        <p className="UserInfo-login">{login}</p>
        <p className="UserInfo-bio">{bio}</p>
      </div>
    </section>
  )
}

export default UserInfo
