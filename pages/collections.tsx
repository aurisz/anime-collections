import { useEffect, useState } from 'react'
import Head from 'next/head'
import type { NextPage } from 'next'

import CollectionList from '../modules/CollectionList'
import { usePersistedState } from '../hooks'

const CollectionsListPage: NextPage = () => {
  const [collections, setCollections] = useState([])
  const [persistedState, setPersistedState] = usePersistedState('anime-collections', [])
  
  useEffect(() => {
    setCollections(persistedState)
  }, [persistedState])

  return (
    <>
      <Head>
        <title>Anime Collections</title>
        <meta name="description" content="Anime Collections" />
      </Head>

      <CollectionList collections={collections} setPersistedState={setPersistedState} />
    </>
  )
}

export default CollectionsListPage
