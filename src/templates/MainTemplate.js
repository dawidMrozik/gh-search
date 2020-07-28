import React from 'react'
import PropTypes from 'prop-types'

import './MainTemplate.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

/**
 * TEMPLATE:
 * Main template that adds Header and Footer and puts children prop in the main tag.
 *
 * @component
 */

const MainTemplate = ({children}) => {
  return (
    <>
      <Header />
      <main className="MainTemplate-main">{children}</main>
      <Footer />
    </>
  )
}

MainTemplate.propTypes = {
  /**
   * Single node.
   */
  children: PropTypes.node.isRequired,
}

export default MainTemplate
