import React from 'react'
import PropTypes from 'prop-types'

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

const FetchMoreButton = ({fetchMore, startCursor}) => {
  const loadMoreRepos = () => {
    fetchMore({
      variables: {startCursor},
      updateQuery,
    })
  }

  return (
    <button type="button" onClick={loadMoreRepos}>
      Load more
    </button>
  )
}

FetchMoreButton.propTypes = {
  fetchMore: PropTypes.func.isRequired,
  startCursor: PropTypes.string.isRequired,
}

export default FetchMoreButton
