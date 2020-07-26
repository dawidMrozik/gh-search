import React from 'react'
import PropTypes from 'prop-types'

import './RepoCards.css'
import RepoCard from '../RepoCard'
import FetchMoreButton from '../FetchMoreButton'

const RepoCards = ({repos, fetchMore, endCursor, hasNextPage}) => {
  return (
    <ul className="RepoCards-container">
      {repos.map((repo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
      {hasNextPage && (
        <FetchMoreButton fetchMore={fetchMore} endCursor={endCursor} />
      )}
    </ul>
  )
}

RepoCards.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  fetchMore: PropTypes.func.isRequired,
  endCursor: PropTypes.string.isRequired,
  hasNextPage: PropTypes.bool.isRequired,
}

export default RepoCards
