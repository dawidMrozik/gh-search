import React, {useState} from 'react'
import PropTypes from 'prop-types'
import SearchInput from './SearchInput'
import RepoCards from './RepoCards'

const Search = ({data}) => {
  const repoList = data.repositoryOwner.repositories.nodes
  const [repos] = useState(repoList)
  const [filteredRepos, setFilteredRepos] = useState(repos)

  return (
    <div>
      <SearchInput repos={repos} setFilteredRepos={setFilteredRepos} />
      <RepoCards repos={filteredRepos} />
    </div>
  )
}

Search.propTypes = {
  data: PropTypes.shape({
    repositoryOwner: PropTypes.shape({
      repositories: PropTypes.shape({
        nodes: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
          }),
        ),
      }),
    }),
  }).isRequired,
}

export default Search
