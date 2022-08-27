import Head from 'next/head'
import type { NextPage, GetServerSideProps } from 'next'

import client from '../../lib/apollo-client'
import { GET_ANIME_DETAIL } from '../../graphql/getAnimeDetail.graphql';
import AnimeDetail from '../../modules/AnimeDetail/AnimeDetail.component';
import type { Media } from '../../types'

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

const Detail: NextPage<Props> = ({ animeDetail }) => {
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

export default Detail
