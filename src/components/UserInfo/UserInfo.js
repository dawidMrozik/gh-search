import React from 'react'
import PropTypes from 'prop-types'

import './UserInfo.css'

/**
 * Card that displays informations about the viewer.
 *
 * @component
 */

const UserInfo = ({userInfo: {login, avatarUrl, bio, name}}) => {
  const truncate = (str, n) => {
    return str.length > n ? `${str.substr(0, n - 1)}...` : str
  }

  return (
    <section className="UserInfo-container">
      <img className="UserInfo-img" src={avatarUrl} alt={`${name}'s avatar`} />
      <div className="UserInfo-infoWrapper">
        <h2 className="UserInfo-name">{name}</h2>
        <p className="UserInfo-login">{login}</p>
        <p className="UserInfo-bio">{truncate(bio, 100)}</p>
      </div>
    </section>
  )
}

UserInfo.propTypes = {
  /**
   * Data about the viewer.
   */
  userInfo: PropTypes.shape({
    login: PropTypes.string,
    avatarUrl: PropTypes.string,
    bio: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
}

export default UserInfo
