import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'

import './SearchInput.css'
import useDebounce from '../../hooks/useDebounce'

const SearchInput = ({repos, setFilteredRepos}) => {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 500)

  useEffect(() => {
    if (debouncedQuery !== '') {
      const newRepos = repos.filter((repo) => {
        return repo.name.toLowerCase().includes(debouncedQuery.toLowerCase())
      })

      setFilteredRepos(newRepos)
    } else {
      setFilteredRepos(repos)
    }
  }, [debouncedQuery, repos, setFilteredRepos])

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
