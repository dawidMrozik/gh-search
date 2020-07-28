import React from 'react'

import MainTeamplate from '../templates/MainTemplate'
import App from '../components/App'

/**
 * VIEW:
 * Landing view which uses MainTemplate and passes App component as a children.
 *
 * @component
 */

const Home = () => {
  return (
    <MainTeamplate>
      <App />
    </MainTeamplate>
  )
}

export default Home
