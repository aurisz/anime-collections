import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import usePersistedState from '../../hooks/usePersistedState'
import { getCollectionByName } from '../../lib/utils'
import CollectionDetail from '../../modules/CollectionDetail'

const CollectionDetailPage: NextPage = () => {
  const router = useRouter()
  const collectionName = router.query.name as string;
  const [collections] = usePersistedState('anime-collections', [])
  const collection = getCollectionByName(collections, collectionName)

  return (
    <>
      <Head>
        <title>Anime Collection {collectionName}</title>
        <meta name="description" content={`Anime Collection ${collectionName}`} />
      </Head>

      <CollectionDetail name={collectionName} data={collection.list} />
    </>
  )
}

export default CollectionDetailPage
