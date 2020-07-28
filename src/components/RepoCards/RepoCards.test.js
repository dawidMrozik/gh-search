import React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import RepoCards from './RepoCards'

describe('RepoCards', () => {
  test('renders properly', () => {
    render(
      <RepoCards
        repos={[]}
        fetchMore={() => {}}
        endCursor="abc"
        hasNextPage={false}
      />,
    )

    expect(screen.getByRole('list')).toBeInTheDocument()
  })

  test('calls the onClick callback handler', async () => {
    const fetchMore = jest.fn()

    render(
      <RepoCards
        repos={[]}
        fetchMore={fetchMore}
        endCursor="abc"
        hasNextPage={true}
      />,
    )

    await userEvent.click(screen.getByRole('button'))

    expect(fetchMore).toHaveBeenCalledTimes(1)
  })
})
