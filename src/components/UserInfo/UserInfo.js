import React from 'react'
import PropTypes from 'prop-types'

import './UserInfo.css'

const UserInfo = ({userInfo: {login, avatarUrl, bio, name}}) => {
  return (
    <section className="UserInfo-container">
      <img className="UserInfo-img" src={avatarUrl} alt={`${name}'s avatar`} />
      <h2 className="UserInfo-name">{name}</h2>
      <p className="UserInfo-login">{login}</p>
      <p className="UserInfo-bio">{bio}</p>
    </section>
  )
}

UserInfo.propTypes = {
  userInfo: PropTypes.shape({
    login: PropTypes.string,
    avatarUrl: PropTypes.string,
    bio: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
}

export default UserInfo
