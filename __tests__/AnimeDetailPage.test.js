import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import AnimeDetailPage from '../pages/anime/[id]'
import { GET_ANIME_DETAIL } from '../queries'

const mockResolvedData = {
  id: 1,
  title: {
    english: 'Title'
  },
  coverImage: {
    large: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg'
  },
  bannerImage: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx16498-C6FPmWm59CyP.jpg',
  description: 'description',
  genres: ['genre1', 'genre2'],
  averageScore: 90,
  seasonYear: 2022,
  episodes: 10,
  duration: 24,
  trailer: {
    id: 1
  }
}

const mockRequest = {
  query: GET_ANIME_DETAIL,
  variables: { id: 1 }
}
const mockResult = {
  data: {
    Media: mockResolvedData
  }
}
const mocks = [{
  request: mockRequest,
  result: mockResult
}]

describe('Anime Detail Page', () => {
  it('should renders anime detail', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AnimeDetailPage animeDetail={mockResolvedData} />
      </MockedProvider>
    );
    
    expect(await screen.getByAltText(/Title Banner Image/i)).toBeInTheDocument()
    expect(await screen.findByText(/Title/i)).toBeInTheDocument()
    expect(await screen.findByText(/90/i)).toBeInTheDocument()
    expect(await screen.findByText(/2022/i)).toBeInTheDocument()
    expect(await screen.findByText(/10 episodes/i)).toBeInTheDocument()
    expect(await screen.findByText(/24 mins/i)).toBeInTheDocument()
    expect(await screen.findByText(/description/i)).toBeInTheDocument()
    expect(await screen.findByText(/genre1, genre2/i)).toBeInTheDocument()
    expect(await screen.findByText(/Not added in any collections yet/i)).toBeInTheDocument()
    expect(await screen.getByRole('button', { name: /Add to Collection/i })).toBeInTheDocument()
    expect(await screen.getByTestId(/Title Video/i)).toBeInTheDocument()
  })
})