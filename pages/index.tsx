import { useQuery } from '@apollo/client'
import Head from 'next/head'

import { GET_ANIME_LIST } from '../graphql/getAnimeList.graphql'
import AnimeList from '../modules/AnimeList'

import type { NextPage } from 'next'
import React from 'react';

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(GET_ANIME_LIST, {
    variables: {
      page: 1,
      perPage: 10
    },
  })

  if (loading) {
    return <p>Loading</p>
  }

  if (error) {
    return <p>Error</p>
  }

  const media = data.Page.media || [];

  return (
    <React.Fragment>
      <Head>
        <title>Anime Collections</title>
        <meta name="description" content="Anime Collections" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <AnimeList data={media} />
    </React.Fragment>
  )
}

export default Home
