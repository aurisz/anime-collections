import Head from 'next/head'
import { useLazyQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import type { NextPage, GetServerSideProps } from 'next'

import client from '../lib/apollo-client'
import { GET_ANIME_LIST } from '../queries/getAnimeList.gql'
import AnimeList from '../modules/AnimeList'
import { Pagination } from '../components'
import type { AnimeListItem, PageInfo } from '../types'

export const getServerSideProps: GetServerSideProps = async (context) =>  {
  const page = context.query.page

  const { data } = await client.query({
    query: GET_ANIME_LIST,
    variables: {
      page: page || 1,
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
    media: AnimeListItem[]
  }
}

const Home: NextPage<Props> = ({ data }) => {
  const router = useRouter()
  const [loadAnimes, { called, loading, error, data: clientData }] = useLazyQuery(GET_ANIME_LIST)

  let animeList = data.media
  let pageInfo = data.pageInfo
  
  if (called && !loading) {
    const { Page } = clientData

    animeList = Page.media
    pageInfo = Page.pageInfo
  }

  if (error) {
    return <p>Sorry, something went wrong.</p>
  }

  function handleChangePage(page: number) {
    loadAnimes({ variables: { page, perPage: 10 }})

    router.push({
      pathname: '/',
      query: { page }
    })
  }

  return (
    <>
      <Head>
        <title>Anime List</title>
        <meta name="description" content="Anime List" />
      </Head>
      
      <AnimeList data={animeList} loading={loading} />
        
      {!loading && (
        <Pagination
          currentPage={pageInfo.currentPage}
          totalCount={pageInfo.total}
          pageSize={pageInfo.perPage}
          onPageChange={handleChangePage}
        />
      )}
    </>
  )
}

export default Home
