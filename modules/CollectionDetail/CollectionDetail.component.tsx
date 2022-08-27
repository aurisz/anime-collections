import { useState } from 'react'
import { useRouter } from 'next/router'

import CollectionRemove from '../CollectionRemove'
import CollectionInput from '../CollectionInput'
import GridLayout from '../../components/GridLayout'
import CardLink from '../../components/CardLink'
import Modal from '../../components/Modal'
import useModal from '../../hooks/useModal'
import usePersistedState from '../../hooks/usePersistedState'
import { editCollectionName } from '../../lib/utils'
import { MODAL_TYPE } from '../../constants'
import type { AnimeListItem } from '../../types'

interface Props {
  name: string;
  data: AnimeListItem[]
}

const {
  EDIT_COLLECTION,
  REMOVE_ANIME,
} = MODAL_TYPE

const _renderEmpty = () => (
  <h4>No Anime on this collections!</h4>
)

const _renderCollection = (item: AnimeListItem) => (
  <CardLink
    key={item.id}
    link={`/anime/${item.id}`}
    image={item.coverImage.large}
    title={item.title.english}
  />
)

const CollectionDetail = ({ name, data }: Props) => {
  const router = useRouter()
  const { toggle, isShowing } = useModal()
  const [modalType, setModalType] = useState('')
  const [persistedState, setPersistedState] = usePersistedState('anime-collections', [])

  function openModal(type: string) {
    setModalType(type)
    toggle()
  }

  function handleEditCollection(newName: string) {
    setPersistedState(editCollectionName(persistedState, name, newName))
    toggle()
    router.push(`/collection/${newName}`)
  }

  function handleRemoveAnime() {
    
  }

  const getModal = {
    [EDIT_COLLECTION]: {
      title: 'Edit Collection Name',
      content: (
        <CollectionInput
          label="Edit"
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
    <div>
      <h4>Collection {name}</h4>

      <button onClick={() => openModal(EDIT_COLLECTION)}>Edit Collection Name</button>

      <hr />
  
      <GridLayout>
        {data.length === 0 ? _renderEmpty() : data.map(_renderCollection)}
      </GridLayout>
  
      <Modal
        isShowing={isShowing}
        onClose={toggle}
        title={getModal[modalType]?.title}
      >
        {getModal[modalType]?.content}
      </Modal>
    </div>
  )
}

export default CollectionDetail
