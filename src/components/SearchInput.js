import React, {useState} from 'react'
import PropTypes from 'prop-types'

const SearchInput = ({repos, setFilteredRepos}) => {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    const userInput = e.target.value
    setQuery(userInput)

    if (userInput !== '') {
      const newRepos = repos.filter((repo) => {
        return repo.name.toLowerCase().includes(query.toLowerCase())
      })

      setFilteredRepos(newRepos)
    } else {
      setFilteredRepos(repos)
    }
  }

  return (
    <label htmlFor="search">
      Search repositories
      <input type="text" id="search" value={query} onChange={handleChange} />
    </label>
  )
}

SearchInput.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
  setFilteredRepos: PropTypes.func.isRequired,
}

export default SearchInput
