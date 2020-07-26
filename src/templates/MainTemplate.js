import React from 'react'
import PropTypes from 'prop-types'

import './MainTemplate.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

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
  children: PropTypes.node.isRequired,
}

export default MainTemplate
