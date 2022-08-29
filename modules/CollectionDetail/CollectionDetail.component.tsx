import { useState } from 'react'
import { useRouter } from 'next/router'
import toast from 'react-hot-toast'

import styles from './CollectionDetail.styles'
import CollectionRemove from '../CollectionRemove'
import CollectionInput from '../CollectionInput'
import CollectionCard from '../CollectionCard'
import { GridLayout, Modal } from '../../components'
import { useModal } from '../../hooks'
import { editCollectionName, removeAnimeFromCollections } from '../../lib/utils'
import { MODAL_TYPE } from '../../constants'
import type { AnimeListItem, AnimeCollection } from '../../types'
import type { SetPersistedState } from '../../hooks/usePersistedState'

interface Props {
  name: string;
  list: AnimeListItem[];
  persistedState: AnimeCollection[];
  setPersistedState: SetPersistedState;
}

const {
  EDIT_COLLECTION,
  REMOVE_ANIME,
} = MODAL_TYPE

const _renderEmpty = () => (
  <h4>No Anime on this collections!</h4>
)

const _renderCollection = (item: AnimeListItem, openModal: (modalType: string, animeId: number) => void) => (
  <CollectionCard
    key={item.id}
    link={`/anime/${item.id}`}
    image={item.coverImage.large}
    title={item.title.english}
    onRemove={() => openModal(REMOVE_ANIME, item.id)}
  />
)

const CollectionDetail = ({ name, list, persistedState, setPersistedState }: Props) => {
  const router = useRouter()
  const { toggle, isShowing } = useModal()
  const [modalType, setModalType] = useState('')
  const [animeId, setAnimeId] = useState(0)

  function openModal(type: string, animeId?: number) {
    if (animeId) {
      setAnimeId(animeId)
    }

    setModalType(type)
    toggle()
  }

  function handleEditCollection(newName: string) {
    setPersistedState(editCollectionName(persistedState, name, newName))
    toggle()
    router.replace(`/collection/${newName}`)
    toast.success(`Collection ${name} has been renamed to ${newName}`)
  }

  function handleRemoveAnime() {
    setPersistedState(removeAnimeFromCollections(persistedState, name, animeId))
    toggle()
    toast.success(`Anime has been successfully removed`)
  }

  const getModal = {
    [EDIT_COLLECTION]: {
      title: 'Edit Collection Name',
      content: (
        <CollectionInput
          label="✎ Edit"
          onSubmit={handleEditCollection}
          initialValue={name}
          collections={persistedState}
        />
      )
    },
    [REMOVE_ANIME]: {
      title: 'Remove Anime from Collection',
      content: <CollectionRemove onRemove={handleRemoveAnime} />
    },
  }

  return (
    <>
      <div css={styles.header}>
        <p>Collection {name}</p>
        <div css={styles.edit} onClick={() => openModal(EDIT_COLLECTION)}>✎ Edit</div>
      </div>
  
      <GridLayout>
        {list.length === 0 ? _renderEmpty() : list.map((item) => _renderCollection(item, openModal))}
      </GridLayout>
  
      <Modal
        isShowing={isShowing}
        onClose={toggle}
        title={getModal[modalType]?.title}
      >
        {getModal[modalType]?.content}
      </Modal>
    </>
  )
}

export default CollectionDetail
