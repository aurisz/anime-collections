import Head from 'next/head'
import type { NextPage } from 'next'
import { useLazyQuery } from '@apollo/client'

import client from '../lib/apollo-client'
import { GET_ANIME_LIST } from '../graphql/getAnimeList.graphql'
import AnimeList from '../modules/AnimeList'
import Pagination from '../components/Pagination'
import Layout from '../components/Layout'
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
      data: data.Page,
    },
 };
}

interface Props {
  data: {
    pageInfo: PageInfo,
    media: Media[]
  }
}

const Home: NextPage<Props> = ({ data }) => {
  const [loadAnimes, { called, loading, error, data: clientData }] = useLazyQuery(GET_ANIME_LIST)

  let animeList = data.media
  let pageInfo = data.pageInfo

  if (called && loading) return <p>Loading ...</p>
  
  if (called) {
    const { Page } = clientData

    animeList = Page.media
    pageInfo = Page.pageInfo
  }

  if (error) {
    return <p>Sorry, something went wrong.</p>
  }

  return (
    <>
      <Head>
        <title>Anime List</title>
        <meta name="description" content="Anime List" />
      </Head>
      
      <AnimeList data={animeList} />
        
      <Pagination
        currentPage={pageInfo.currentPage}
        totalCount={pageInfo.total}
        pageSize={pageInfo.perPage}
        onPageChange={page => {
          loadAnimes({ variables: { page, perPage: 10 }})
        }}
      />
    </>
  )
}

export default Home
