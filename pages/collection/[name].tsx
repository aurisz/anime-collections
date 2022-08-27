import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import usePersistedState from '../../hooks/usePersistedState'
import { getCollectionByName } from '../../lib/utils'
import CollectionDetail from '../../modules/CollectionDetail'

const CollectionDetailPage: NextPage = () => {
  const { query } = useRouter()
  const [collections] = usePersistedState('anime-collections', [])
  const collection = getCollectionByName(collections, query.name as string)

  return (
    <>
      <Head>
        <title>Anime Collection {query.name}</title>
        <meta name="description" content={`Anime Collection ${query.name}`} />
      </Head>

      <CollectionDetail data={collection.list} />
    </>
  )
}

export default CollectionDetailPage
