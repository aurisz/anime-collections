import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import AnimeListPage from '../index'
import { GET_ANIME_LIST } from '../../queries'

const mockResolvedData = {
  pageInfo: {
    total: 5000,
    currentPage: 1,
    lastPage: 500,
    perPage: 10,
  },
  media: [
    {
      id: 16498,
      title: {
        english: "Attack on Titan"
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

describe('Anime List Page', () => {
  it('should renders anime list', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AnimeListPage data={mockResolvedData} />
      </MockedProvider>
    );
    
    expect(await screen.findByText('Attack on Titan')).toBeInTheDocument()
    expect(await screen.getByAltText('Attack on Titan Cover Image')).toBeInTheDocument()
    expect(await screen.getByLabelText('Pagination')).toBeInTheDocument()
  })
})