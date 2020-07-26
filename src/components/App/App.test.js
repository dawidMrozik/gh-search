import React from 'react'
import {render, screen} from '@testing-library/react'
import {MockedProvider} from '@apollo/client/testing'

import App, {GET_USER_INFO_QUERY} from './App'

const mocks = [
  {
    request: {
      query: GET_USER_INFO_QUERY,
    },
    result: {
      data: {
        viewer: {
          login: 'dawidMrozik',
          avatarUrl:
            'https://avatars1.githubusercontent.com/u/32874009?u=80a3a249da4907b59ba6bbfdc23844217f2d53dd&v=4',
          name: 'Dawid Mrozik',
          bio: '',
          repositories: {
            pageInfo: {
              endCursor:
                'Y3Vyc29yOnYyOpK5MjAxOS0wNi0xN1QxMzowMjo1OSswMjowMM4LdmJf',
              hasNextPage: true,
            },
            nodes: [
              {
                id: 'MDEwOlJlcG9zaXRvcnkyODIyMDMyODI=',
                name: 'gh-search',
                updatedAt: '2020-07-24T11:44:44Z',
                shortDescriptionHTML: 'Github repositories search',
                isPrivate: true,
                url: 'https://github.com/dawidMrozik/gh-search',
                primaryLanguage: {
                  color: '#e34c26',
                  name: 'HTML',
                },
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkyODA2NjE0Njc=',
                name: 'react-express-session-auth-starter',
                updatedAt: '2020-07-18T13:44:08Z',
                shortDescriptionHTML: '',
                isPrivate: false,
                url:
                  'https://github.com/dawidMrozik/react-express-session-auth-starter',
                primaryLanguage: {
                  color: '#f1e05a',
                  name: 'JavaScript',
                },
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxNzcwMDQ2Mzg=',
                name: 'tss404',
                updatedAt: '2020-07-17T06:52:15Z',
                shortDescriptionHTML: '',
                isPrivate: false,
                url: 'https://github.com/plyschik/tss404',
                primaryLanguage: {
                  color: '#f1e05a',
                  name: 'JavaScript',
                },
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkyNzc4OTY3MjE=',
                name: 'dribbble-shop',
                updatedAt: '2020-07-09T10:43:40Z',
                shortDescriptionHTML: '',
                isPrivate: false,
                url: 'https://github.com/dawidMrozik/dribbble-shop',
                primaryLanguage: {
                  color: '#f1e05a',
                  name: 'JavaScript',
                },
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkyNzQ5OTY2MDU=',
                name: 'dawidmrozik.github.io',
                updatedAt: '2020-06-28T15:41:07Z',
                shortDescriptionHTML: '',
                isPrivate: false,
                url: 'https://github.com/dawidMrozik/dawidmrozik.github.io',
                primaryLanguage: {
                  color: '#f1e05a',
                  name: 'JavaScript',
                },
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkyNzUwMDU4OTk=',
                name: 'ChatApp',
                updatedAt: '2020-06-25T20:17:44Z',
                shortDescriptionHTML: '',
                isPrivate: false,
                url: 'https://github.com/dawidMrozik/ChatApp',
                primaryLanguage: {
                  color: '#f1e05a',
                  name: 'JavaScript',
                },
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkyNzMwMzc2ODU=',
                name: 'React-Native-Timer',
                updatedAt: '2020-06-22T14:49:42Z',
                shortDescriptionHTML: '',
                isPrivate: false,
                url: 'https://github.com/dawidMrozik/React-Native-Timer',
                primaryLanguage: {
                  color: '#f1e05a',
                  name: 'JavaScript',
                },
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxMzE0OTIxNDk=',
                name: 'BlogApp',
                updatedAt: '2020-06-22T12:33:34Z',
                shortDescriptionHTML: '',
                isPrivate: false,
                url: 'https://github.com/dawidMrozik/BlogApp',
                primaryLanguage: {
                  color: '#e34c26',
                  name: 'HTML',
                },
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkyNzQxMTczNjU=',
                name: 'Binocular-exercises',
                updatedAt: '2020-06-22T11:26:40Z',
                shortDescriptionHTML: '',
                isPrivate: false,
                url: 'https://github.com/dawidMrozik/Binocular-exercises',
                primaryLanguage: {
                  color: '#f1e05a',
                  name: 'JavaScript',
                },
              },
              {
                id: 'MDEwOlJlcG9zaXRvcnkxODcxNzMxMjI=',
                name: 'favnotes',
                updatedAt: '2020-06-20T09:52:31Z',
                shortDescriptionHTML: '',
                isPrivate: false,
                url: 'https://github.com/dawidMrozik/favnotes',
                primaryLanguage: {
                  color: '#f1e05a',
                  name: 'JavaScript',
                },
              },
            ],
          },
        },
      },
    },
  },
]

describe('App', () => {
  test('renders loader initially', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    )

    screen.getByTestId('loader')

    expect(screen.getByTestId('loader')).toBeInTheDocument()
  })

  test('renders with data properly', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    )

    expect(screen.queryByText('gh-search')).toBeNull()

    expect(await screen.findByText('gh-search')).toBeInTheDocument()
  })

  test('fetches and renders expected amount of repos', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>,
    )

    const repos = await screen.findAllByRole('listitem')

    expect(repos).toHaveLength(10)
  })

  test('renders error view', async () => {
    const errorMocks = {
      request: {
        query: GET_USER_INFO_QUERY,
      },
      error: new Error('Not authorized'),
    }

    render(
      <MockedProvider mocks={[errorMocks]} addTypename={false}>
        <App />
      </MockedProvider>,
    )

    expect(screen.queryByText('Not authorized')).toBeNull()

    expect(await screen.findByText('Not authorized')).toBeInTheDocument()
  })
})
