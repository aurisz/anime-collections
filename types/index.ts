export type AnimeListItem = {
  id: number,
  title: {
    english: string
  }
  coverImage: {
    large: string,
  },
}

export type Collection = {
  name: string;
  list: AnimeListItem[]
}

export type PageInfo = {
  total: number,
  currentPage: number,
  lastPage: number,
  perPage: number,
}