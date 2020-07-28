import React from 'react'
import PropTypes from 'prop-types'

import './Error.css'

/**
 * Error showing component
 *
 * @component
 */
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
  /**
   * Error object provided from apollo-client query execution
   */
  error: PropTypes.shape({
    message: PropTypes.string,
    networkError: PropTypes.shape({
      statusCode: PropTypes.number,
    }),
  }),
}

Error.defaultProps = {
  error: {
    message: 'Something went wrong :(',
    networkError: {
      statusCode: 0,
    },
  },
}

export default Error
