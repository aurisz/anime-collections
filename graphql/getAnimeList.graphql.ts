import { gql } from '@apollo/client'

export const GET_ANIME_LIST = gql`
  query getAnimeList (
    $page: Int,
    $perPage: Int
  ) {
    Page (page: $page, perPage: $perPage) {
      pageInfo {
        total
        currentPage
        lastPage
        perPage
      }
      media (type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          english
        }
        coverImage {
          large
        }
      }
    }
  }
`
