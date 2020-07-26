import React from 'react'
import PropTypes from 'prop-types'

import './FetchMoreButton.css'

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
  fetchMore: PropTypes.func.isRequired,
  endCursor: PropTypes.string.isRequired,
}

export default FetchMoreButton
