import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import SearchInput from './SearchInput'

describe('SearchInput', () => {
  test('renders properly', () => {
    render(<SearchInput repos={[]} setFilteredRepos={() => {}} />)

    screen.getByRole('searchbox')

    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  test('searchbox changes', () => {
    render(<SearchInput repos={[]} setFilteredRepos={() => {}} />)

    userEvent.type(screen.getByRole('searchbox'), 'app')

    expect(screen.getByDisplayValue('app')).toBeInTheDocument()
  })

  test('calls the onChange callback handler', async () => {
    const setFilteredRepos = jest.fn()

    render(<SearchInput repos={[]} setFilteredRepos={setFilteredRepos} />)

    await userEvent.type(screen.getByRole('searchbox'), 'react')

    expect(setFilteredRepos).toHaveBeenCalledTimes(1)
  })
})
