import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'
import { useRouter } from 'next/router'

import AnimeListPage from '../pages/index'
import { GET_ANIME_LIST } from '../queries'

jest.mock('next/router', () => ({
  __esModule: true,
  useRouter: jest.fn()
}))

const mockResolvedData = {
  pageInfo: {
    total: 5000,
    currentPage: 1,
    lastPage: 500,
    perPage: 10,
  },
  media: [
    {
      id: 1,
      title: {
        english: 'Title'
      },
      coverImage: {
        large: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
      }
    }
  ]
}

const mockRequest = {
  query: GET_ANIME_LIST,
  variables: {
    page: 1,
    perPage: 10
  }
}
const mockResult = {
  data: {
    Page: mockResolvedData
  }
}
const mocks = [{
  request: mockRequest,
  result: mockResult
}]

const setupComponent = () => render(
  <MockedProvider mocks={mocks} addTypename={false}>
    <AnimeListPage data={mockResolvedData} />
  </MockedProvider>
)

describe('Anime List Page', () => {
  it('should renders anime list', async () => {
    setupComponent()
    
    expect(await screen.findByText(/Title/i)).toBeInTheDocument()
    expect(screen.getByAltText(/Title Cover Image/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Pagination/i)).toBeInTheDocument()
  })

  it('should renders next page when pagination item is clicked', () => {
    const mockRouter = { push: jest.fn() }
    useRouter.mockReturnValue(mockRouter)

    setupComponent()
    
    const button = screen.getByText('2')
    fireEvent.click(button)

    expect(mockRouter.push).toBeCalledWith({
      pathname: '/',
      query: { page: 2 }
    })
  })
})