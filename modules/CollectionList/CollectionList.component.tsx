import { useState } from 'react'

import CollectionRemove from '../CollectionRemove'
import CollectionInput from '../CollectionInput'
import GridLayout from '../../components/GridLayout'
import CardLink from '../../components/CardLink/CardLink.component'
import Modal from '../../components/Modal'
import useModal from '../../hooks/useModal'
import { MODAL_TYPE } from '../../constants'
import { addCollections, editCollectionName, removeCollections } from '../../lib/utils'
import type { AnimeCollection } from '../../types'
import type { SetPersistedState } from '../../hooks/usePersistedState'

interface Props {
  collections: AnimeCollection[],
  setPersistedState: SetPersistedState
}

const getModalTitle = {
  [MODAL_TYPE.ADD]: 'Add a Collection',
  [MODAL_TYPE.EDIT]: 'Edit Collection',
  [MODAL_TYPE.REMOVE]: 'Remove Collection',
}

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
  }

  function handleEditCollection(newName: string) {
    setPersistedState(editCollectionName(collections, selectedCollection, newName))
    toggle()
  }

  function handleRemoveCollection() {
    setPersistedState(removeCollections(collections, selectedCollection))
    toggle()
  }

  const getModalContent = {
    [MODAL_TYPE.ADD]: <CollectionInput label="Add" onSubmit={handleAddCollection} collections={collections} />,
    [MODAL_TYPE.EDIT]: <CollectionInput label="Edit" onSubmit={handleEditCollection} initialValue={selectedCollection} collections={collections} />,
    [MODAL_TYPE.REMOVE]: <CollectionRemove onRemove={handleRemoveCollection} />,
  }

  return (
    <>
      <button onClick={() => openModal(MODAL_TYPE.ADD)}>
        Add a Collection
      </button>

      <hr />

      <GridLayout>
        {collections.map(({ name, list }) => (
          <div key={name}>
            <CardLink
              title={name}
              link={`/collection/${name}`}
              image={list[0]?.coverImage.large}
            />
            <button onClick={() => openModal(MODAL_TYPE.EDIT, name)}>Edit</button>
            <button onClick={() => openModal(MODAL_TYPE.REMOVE, name)}>Remove</button>
          </div>
        ))}
      </GridLayout>

      <Modal
        isShowing={isShowing}
        onClose={toggle}
        title={getModalTitle[modalType]}
      >
        {getModalContent[modalType]}
      </Modal>
    </>
  )
}

export default CollectionList
