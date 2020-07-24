import React from 'react'
import PropTypes from 'prop-types'
import RepoCard from './RepoCard'

const RepoCards = ({repos}) => {
  return (
    <div>
      {repos.map((repo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
    </div>
  )
}

RepoCards.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
}

export default RepoCards
