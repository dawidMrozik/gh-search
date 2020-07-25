import React from 'react'
import PropTypes from 'prop-types'
import RepoCard from '../RepoCard'
import FetchMoreButton from '../FetchMoreButton'

const RepoCards = ({repos, fetchMore, startCursor, hasPreviousPage}) => {
  return (
    <div>
      {repos.map((repo) => (
        <RepoCard repo={repo} key={repo.id} />
      ))}
      {hasPreviousPage && (
        <FetchMoreButton fetchMore={fetchMore} startCursor={startCursor} />
      )}
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
  fetchMore: PropTypes.func.isRequired,
  startCursor: PropTypes.string.isRequired,
  hasPreviousPage: PropTypes.bool.isRequired,
}

export default RepoCards
