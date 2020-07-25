import React, {useState} from 'react'
import PropTypes from 'prop-types'
import SearchInput from '../SearchInput'
import RepoCards from '../RepoCards'

const Search = ({data, fetchMore}) => {
  const repoList = data.viewer.repositories.nodes
  const {startCursor} = data.viewer.repositories.pageInfo
  const {hasPreviousPage} = data.viewer.repositories.pageInfo
  const [repos] = useState(repoList)
  const [filteredRepos, setFilteredRepos] = useState(repos)

  return (
    <div>
      <SearchInput repos={repos} setFilteredRepos={setFilteredRepos} />
      <RepoCards
        repos={filteredRepos}
        fetchMore={fetchMore}
        startCursor={startCursor}
        hasPreviousPage={hasPreviousPage}
      />
    </div>
  )
}

Search.propTypes = {
  data: PropTypes.shape({
    viewer: PropTypes.shape({
      repositories: PropTypes.shape({
        nodes: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
          }),
        ),
        pageInfo: PropTypes.shape({
          startCursor: PropTypes.string,
          hasPreviousPage: PropTypes.bool,
        }),
      }),
    }),
  }).isRequired,
  fetchMore: PropTypes.func.isRequired,
}

export default Search
