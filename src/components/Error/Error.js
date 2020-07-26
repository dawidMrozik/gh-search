import React from 'react'
import PropTypes from 'prop-types'

import './Error.css'

const Error = ({
  error: {
    message,
    networkError: {statusCode},
  },
}) => {
  return (
    <div className="Error-container">
      <h2>{message}</h2>
      {statusCode === 401 && (
        <code>Make sure you provided correct token in config.js</code>
      )}
    </div>
  )
}

Error.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string,
    networkError: PropTypes.shape({
      statusCode: PropTypes.number,
    }),
  }).isRequired,
}

export default Error
