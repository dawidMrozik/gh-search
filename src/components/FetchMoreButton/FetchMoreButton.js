import React from 'react'
import PropTypes from 'prop-types'

import './FetchMoreButton.css'

// updateQuery tells apollo-client how to merge new data with the old one
const updateQuery = (previousResult, {fetchMoreResult}) => {
  if (!fetchMoreResult) {
    return previousResult
  }

  return {
    ...previousResult,
    viewer: {
      ...previousResult.viewer,
      repositories: {
        ...previousResult.viewer.repositories,
        ...fetchMoreResult.viewer.repositories,
        nodes: [
          ...previousResult.viewer.repositories.nodes,
          ...fetchMoreResult.viewer.repositories.nodes,
        ],
      },
    },
  }
}

/**
 * Button for loading more data
 *
 * @component
 */

const FetchMoreButton = ({fetchMore, endCursor}) => {
  const loadMoreRepos = () => {
    fetchMore({
      variables: {endCursor},
      updateQuery,
    })
  }

  return (
    <button
      type="button"
      className="FetchMoreButton-btn"
      onClick={loadMoreRepos}
    >
      Load more
    </button>
  )
}

FetchMoreButton.propTypes = {
  /**
   * Function destructured from apollo-client's useQuery function.
   */
  fetchMore: PropTypes.func.isRequired,
  /**
   * endCursor from fetched data list. It tells from which listitem fetch next data.
   */
  endCursor: PropTypes.string.isRequired,
}

export default FetchMoreButton
