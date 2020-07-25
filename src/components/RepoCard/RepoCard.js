import React from 'react'
import PropTypes from 'prop-types'

const RepoCard = ({repo}) => {
  return <div>{repo.name}</div>
}

RepoCard.propTypes = {
  repo: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
}

export default RepoCard
