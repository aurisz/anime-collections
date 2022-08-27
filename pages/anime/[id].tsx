import { ReactElement } from 'react'
import Head from 'next/head'
import type { GetServerSideProps } from 'next'

import client from '../../lib/apollo-client'
import { GET_ANIME_DETAIL } from '../../graphql/getAnimeDetail.graphql';
import AnimeDetail from '../../modules/AnimeDetail/AnimeDetail.component';
import type { Media } from '../../types'
import type { NextPageWithLayout } from '../_app'

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id

  const { data } = await client.query({
    query: GET_ANIME_DETAIL,
    variables: { id },
  })

  return {
    props: {
      animeDetail: data.Media,
    },
 }
}

interface Props {
  animeDetail: {
    media: Media & {
      bannerImage: string,
      genres: string[]
    }
  }
}

const Detail: NextPageWithLayout<Props> = ({ animeDetail }) => {
  return (
    <>
      <Head>
        <title>Anime Details</title>
        <meta name="description" content="Anime Details" />
      </Head>

      <AnimeDetail {...animeDetail} />
    </>
  )
}

Detail.getLayout = function getLayout(page: ReactElement) {
  return page
}

export default Detail
