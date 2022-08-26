export type Media = {
  id: number,
  title: {
    english: string
  }
  coverImage: {
    extraLarge: string,
    large: string,
    medium: string,
    color: string,
  },
  bannerImage: string,
  genres: string[]
}

export type PageInfo = {
  total: number,
  currentPage: number,
  lastPage: number,
  hasNextPage: boolean,
  perPage: number,
}