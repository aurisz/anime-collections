import { useState } from 'react'
import toast from 'react-hot-toast'

import styles from './CollectionList.styles'
import CollectionRemove from '../CollectionRemove'
import CollectionInput from '../CollectionInput'
import CollectionCard from '../CollectionCard'
import { GridLayout, Modal, Button } from '../../components'
import { useModal } from '../../hooks'
import { MODAL_TYPE } from '../../constants'
import { addCollections, editCollectionName, removeCollections } from '../../lib/utils'
import type { AnimeCollection } from '../../types'

interface Props {
  collections: AnimeCollection[];
  setPersistedState: (state: AnimeCollection[]) => void;
}

const {
  ADD_COLLECTION,
  EDIT_COLLECTION,
  REMOVE_COLLECTION,
} = MODAL_TYPE

const _renderItem = (
  { name, list }: AnimeCollection, openModal: (type: string, name: string) => void
) => (
  <CollectionCard
    key={name}
    title={name}
    link={`/collection/${name}`}
    image={list[0]?.coverImage.large}
    count={list.length}
    onEdit={() => openModal(EDIT_COLLECTION, name)}
    onRemove={() => openModal(REMOVE_COLLECTION, name)}
  />
)

const CollectionList = ({ collections, setPersistedState }: Props) => {
  const { toggle, isShowing } = useModal()
  const [modalType, setModalType] = useState('')
  const [selectedCollection, setSelectedCollection] = useState('')

  function openModal(type: string, selectedName?: string) {
    if (selectedName) {
      setSelectedCollection(selectedName)
    }

    setModalType(type)
    toggle()
  }
  
  function handleAddCollection(name: string) {
    setPersistedState(addCollections(collections, name))
    toggle()
    toast.success(`Collection ${name} has been successfully added`)
  }

  function handleEditCollection(newName: string) {
    setPersistedState(editCollectionName(collections, selectedCollection, newName))
    toggle()
    toast.success(`Collection ${selectedCollection} has been renamed to ${newName}`)
  }

  function handleRemoveCollection() {
    setPersistedState(removeCollections(collections, selectedCollection))
    toggle()
    toast.success(`Collection ${selectedCollection} has been successfully removed`)
  }

  const getModal = {
    [ADD_COLLECTION]: {
      title: 'Add New Collection',
      content: <CollectionInput label="+ Add New Collection" onSubmit={handleAddCollection} collections={collections} />
    },
    [EDIT_COLLECTION]: {
      title: 'Edit Collection Name',
      content: (
        <CollectionInput
          label="✎ Edit"
          onSubmit={handleEditCollection}
          initialValue={selectedCollection}
          collections={collections}
        />
      )
    },
    [REMOVE_COLLECTION]: {
      title: 'Remove Collection',
      content: <CollectionRemove onRemove={handleRemoveCollection} />
    },
  }

  return (
    <>
      <div css={styles.headerContainer}>
        <Button onClick={() => openModal(ADD_COLLECTION)}>
          + Add a Collection
        </Button>
      </div>

      <GridLayout>
        {collections.length === 0 && <h4>No Collections Found</h4>}
        {collections.map((collection) => _renderItem(collection, openModal))}
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

export default CollectionList
