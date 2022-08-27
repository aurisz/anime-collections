export type AnimeListItem = {
  id: number,
  title: {
    english: string
  }
  coverImage: {
    large: string,
  },
}

export type AnimeCollection = {
  name: string;
  list: AnimeListItem[]
}

export type PageInfo = {
  total: number,
  currentPage: number,
  lastPage: number,
  perPage: number,
}