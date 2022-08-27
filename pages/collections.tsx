import { useEffect, useState } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'

import CollectionList from '../modules/CollectionList'

const Detail: NextPage = () => {
  const [collections, setCollections] = useState([])

  useEffect(() => {
    const currentCollection = localStorage.getItem('anime-collections')
    
    if (currentCollection !== null) {
      const parsedCollection = JSON.parse(currentCollection)

      setCollections(parsedCollection)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Anime Collections</title>
        <meta name="description" content="Anime Collections" />
      </Head>

      <CollectionList collections={collections} />
    </>
  )
}

export default Detail
