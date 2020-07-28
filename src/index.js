import React from 'react'
import ReactDOM from 'react-dom'

import './index.css'
import Home from './views/Home'
import ApolloCustomProvider from './ApolloCustomProvider'

ReactDOM.render(
  <React.StrictMode>
    <ApolloCustomProvider>
      <Home />
    </ApolloCustomProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
