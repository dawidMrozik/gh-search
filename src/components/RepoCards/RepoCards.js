import React from 'react'
import PropTypes from 'prop-types'

import './RepoCards.css'
import RepoCard from '../RepoCard'
import FetchMoreButton from '../FetchMoreButton'

/**
 * Repository list.
 *
 * @component
 * @example
 * return <RepoCards repos={repos} fetchMore={fetchMore} endCursor={endCursor} hasNextPage={hasNextPage} />
 */

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
  /**
   * Array of viewer repositories.
   */
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  /**
   * Function destructured from apollo-client's useQuery function. Passed to the FetchMoreButton component.
   */
  fetchMore: PropTypes.func.isRequired,
  /**
   * endCursor from fetched data list. It tells from which listitem fetch next data. Passed to the FetchMoreButton component.
   */
  endCursor: PropTypes.string.isRequired,
  /**
   * Pagination information if there is more data to fetch.
   */
  hasNextPage: PropTypes.bool.isRequired,
}

export default RepoCards
