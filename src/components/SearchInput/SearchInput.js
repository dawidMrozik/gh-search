import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import './SearchInput.css'

const SearchInput = ({repos, setFilteredRepos}) => {
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (query !== '') {
      const newRepos = repos.filter((repo) => {
        return repo.name.toLowerCase().includes(query.toLowerCase())
      })

      setFilteredRepos(newRepos)
    } else {
      setFilteredRepos(repos)
    }
  }, [query, repos, setFilteredRepos])

  const handleChange = (e) => {
    const userInput = e.target.value
    setQuery(userInput)
  }

  return (
    <input
      className="SearchInput-input"
      placeholder="Find a repository..."
      aria-label="Find a repository..."
      type="search"
      value={query}
      onChange={handleChange}
    />
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
