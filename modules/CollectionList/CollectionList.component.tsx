import { useState } from 'react'
import CollectionAdd from '../CollectionAdd'
import GridLayout from '../../components/GridLayout'
import CardLink from '../../components/CardLink/CardLink.component'
import Modal from '../../components/Modal'
import useModal from '../../hooks/useModal'
import { MODAL_TYPE } from '../../constants'
import type { AnimeCollection } from '../../types'
interface Props {
  collections: AnimeCollection[]
}

const getModalTitle = {
  [MODAL_TYPE.ADD]: 'Add a Collection',
  [MODAL_TYPE.EDIT]: 'Edit Collection',
  [MODAL_TYPE.REMOVE]: 'Remove Collection',
}

const CollectionList = ({ collections }: Props) => {
  const { toggle, isShowing } = useModal()
  const [modalType, setModalType] = useState('')

  function openModal(type: string) {
    setModalType(type)
    toggle()
  }

  const getModalContent = {
    [MODAL_TYPE.ADD]: <CollectionAdd onClose={toggle} />,
    [MODAL_TYPE.EDIT]: <p>Edit collection name</p>,
    [MODAL_TYPE.REMOVE]: <p>Are you sure want to remove this collection?</p>,
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
            <button onClick={() => openModal(MODAL_TYPE.REMOVE)}>Remove</button>
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
