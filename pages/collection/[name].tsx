import Head from 'next/head'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'

import usePersistedState from '../../hooks/usePersistedState'
import { getCollectionByName } from '../../lib/utils'
import CollectionDetail from '../../modules/CollectionDetail'

const CollectionDetailPage: NextPage = () => {
  const router = useRouter()
  const collectionName = router.query.name as string
  const [persistedState, setPersistedState] = usePersistedState('anime-collections', [])
  const collection = getCollectionByName(persistedState, collectionName)

  return (
    <>
      <Head>
        <title>Anime Collection {collectionName}</title>
        <meta name="description" content={`Anime Collection ${collectionName}`} />
      </Head>

      <CollectionDetail
        name={collectionName}
        list={collection.list}
        persistedState={persistedState}
        setPersistedState={setPersistedState}
      />
    </>
  )
}

export default CollectionDetailPage
