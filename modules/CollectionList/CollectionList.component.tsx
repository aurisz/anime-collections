import { useState } from 'react'

import CollectionAdd from '../CollectionAdd'
import GridLayout from '../../components/GridLayout'
import CardLink from '../../components/CardLink/CardLink.component'
import Modal from '../../components/Modal'
import useModal from '../../hooks/useModal'
import { MODAL_TYPE } from '../../constants'
import { filterCollections } from '../../lib/utils'
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

  function removeCollection() {
    const filteredCollection = filterCollections(collections, selectedCollection)

    setPersistedState(filteredCollection)
    toggle()
  }

  const getModalContent = {
    [MODAL_TYPE.ADD]: <CollectionAdd collections={collections} setPersistedState={setPersistedState} onClose={toggle} />,
    [MODAL_TYPE.EDIT]: <p>Edit collection name</p>,
    [MODAL_TYPE.REMOVE]: (
      <div>
        <p>Are you sure want to remove this collection?</p>
        <button onClick={removeCollection}>REMOVE</button>
      </div>
    ),
  }

  return (
    <>
      <button onClick={() => openModal(MODAL_TYPE.ADD)}>
        Add a Collection
      </button>

      <hr />

      <GridLayout>
        {collections.map(collection => (
          <div key={collection.name}>
            <CardLink
              title={collection.name}
              link={`/collection/${collection.name}`}
              image={collection.list[0]?.coverImage.large}
            />
            <button onClick={() => openModal(MODAL_TYPE.EDIT)}>Edit</button>
            <button onClick={() => openModal(MODAL_TYPE.REMOVE, collection.name)}>Remove</button>
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
