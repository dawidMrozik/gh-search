import React, {useState} from 'react'
import PropTypes from 'prop-types'

import './Search.css'
import SearchInput from '../SearchInput'
import RepoCards from '../RepoCards'

const Search = ({repositories: {nodes, pageInfo}, fetchMore}) => {
  const {endCursor, hasNextPage} = pageInfo
  const [filteredRepos, setFilteredRepos] = useState(nodes)

  return (
    <section className="Search-container">
      <SearchInput repos={nodes} setFilteredRepos={setFilteredRepos} />
      <RepoCards
        repos={filteredRepos}
        fetchMore={fetchMore}
        endCursor={endCursor}
        hasNextPage={hasNextPage}
      />
    </section>
  )
}

Search.propTypes = {
  repositories: PropTypes.shape({
    nodes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
      }),
    ),
    pageInfo: PropTypes.shape({
      endCursor: PropTypes.string,
      hasNextPage: PropTypes.bool,
    }),
  }).isRequired,
  fetchMore: PropTypes.func.isRequired,
}

export default Search
