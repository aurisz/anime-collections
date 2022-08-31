import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
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

const wrapper = ({ children }) => (
  <MockedProvider mocks={mocks} addTypename={false}>
    {children}
  </MockedProvider>
)

describe('Anime Detail Page', () => {
  it('should renders anime detail', async () => {
    render(<AnimeDetailPage animeDetail={mockResolvedData} />, wrapper)
    
    expect(screen.getByAltText(/Title Banner Image/i)).toBeInTheDocument()
    expect(await screen.findByText(/Title/i)).toBeInTheDocument()
    expect(await screen.findByText(/90/i)).toBeInTheDocument()
    expect(await screen.findByText(/2022/i)).toBeInTheDocument()
    expect(await screen.findByText(/10 episodes/i)).toBeInTheDocument()
    expect(await screen.findByText(/24 mins/i)).toBeInTheDocument()
    expect(await screen.findByText(/description/i)).toBeInTheDocument()
    expect(await screen.findByText(/genre1, genre2/i)).toBeInTheDocument()
    expect(await screen.findByText(/Not added in any collections yet/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Add to Collection/i })).toBeInTheDocument()
    expect(screen.getByTestId(/Title Video/i)).toBeInTheDocument()
  })

  it('should renders collections modal when add to collection button is clicked', async () => {
    render(<AnimeDetailPage animeDetail={mockResolvedData} />, wrapper)
    
    // open collection modal
    const openModalButton = screen.getByRole('button', { name: /Add to Collection/i })
    fireEvent.click(openModalButton)

    expect(await screen.findByText(/Add to Collections/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Input Collection Name/i)).toBeInTheDocument()
    expect(screen.getByText(/Add New Collection/i)).toBeInTheDocument()
    expect(await screen.findByText(/Add To Existing Collections/i)).toBeInTheDocument()

    // input collection name
    const input = screen.getByLabelText('add-collection-input')
    fireEvent.change(input, {target: {value: 'Collection1'}})

    expect(input.value).toBe('Collection1')

    // add to collection button
    const addCollectionButton = screen.getByText(/Add New Collection/i)
    fireEvent.click(addCollectionButton)

    expect(screen.getByText(/Collection1/i)).toBeInTheDocument()

    // close collection modal
    const collectionLinkButton = screen.getByText(/Collection1/i)
    fireEvent.click(collectionLinkButton)

    expect(screen.queryByText(/Add to Collections/i)).not.toBeInTheDocument()
  })
})