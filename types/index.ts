export type Media = {
  id: number,
  title: {
    english: string
  }
  coverImage: {
    large: string,
  },
}

export type PageInfo = {
  total: number,
  currentPage: number,
  lastPage: number,
  perPage: number,
}