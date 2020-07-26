import React from 'react'
import {render, screen} from '@testing-library/react'

import UserInfo from './UserInfo'

describe('UserInfo', () => {
  test('renders properly', () => {
    const userInfo = {
      login: 'testUser',
      name: 'Test Smith',
      bio: "I'm tester",
      avatarUrl:
        'https://avatars1.githubusercontent.com/u/32874009?u=80a3a249da4907b59ba6bbfdc23844217f2d53dd&v=4',
    }

    render(<UserInfo userInfo={userInfo} />)

    screen.getAllByText('testUser')
    screen.getByText('Test Smith')
    screen.getByText("I'm tester")
    screen.getByRole('img')

    expect(screen.getByText('testUser')).toBeInTheDocument()
    expect(screen.getByText('Test Smith')).toBeInTheDocument()
    expect(screen.getByText("I'm tester")).toBeInTheDocument()
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})
