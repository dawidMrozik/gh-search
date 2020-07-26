import React from 'react'

import './Loader.css'

const Loader = () => {
  return (
    <div className="Loader-container">
      <div
        className="Loader-loader"
        role="alert"
        aria-busy="true"
        data-testid="loader"
      >
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )
}

export default Loader
