type Media = {
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

export interface Props {
  data: Media[]
}
