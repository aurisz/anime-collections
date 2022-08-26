import Head from 'next/head'
import type { NextPage } from 'next'

import client from '../lib/apollo-client'
import { GET_ANIME_LIST } from '../graphql/getAnimeList.graphql'
import AnimeList from '../modules/AnimeList'
import type { Media, PageInfo } from '../types'

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_ANIME_LIST,
    variables: {
      page: 1,
      perPage: 10
    },
  });

  return {
    props: {
      animeList: data.Page,
    },
 };
}

interface Props {
  animeList: {
    pageInfo: PageInfo,
    media: Media[]
  }
}

const Home: NextPage<Props> = ({ animeList }) => {
  return (
    <>
      <Head>
        <title>Anime Collections</title>
        <meta name="description" content="Anime Collections" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AnimeList data={animeList.media} />
    </>
  )
}

export default Home
