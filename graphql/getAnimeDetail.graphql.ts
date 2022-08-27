import { gql } from '@apollo/client'

export const GET_ANIME_DETAIL = gql`
  query getAnimeDetail($id: Int) {
    Media (type: ANIME, id: $id) {
      id
      title {
        english
      }
      coverImage {
        large
      }
      genres
      averageScore
      bannerImage
      description
      episodes
      seasonYear
      trailer {
        id
      }
    }
  }
`
