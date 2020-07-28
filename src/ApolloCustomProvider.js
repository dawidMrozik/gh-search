import React from 'react'
import PropTypes from 'prop-types'
import {ApolloProvider, ApolloClient, InMemoryCache} from '@apollo/client'

import token from './config'

const httpLink = 'https://api.github.com/graphql'

const client = new ApolloClient({
  uri: httpLink,
  headers: {
    authorization: token ? `token ${token}` : '',
  },
  cache: new InMemoryCache(),
})

const ApolloCustomProvider = ({children}) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

ApolloCustomProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export default ApolloCustomProvider
