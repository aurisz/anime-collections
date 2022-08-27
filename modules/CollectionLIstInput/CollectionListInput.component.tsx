import { useEffect, useState, ChangeEvent } from 'react'

import { isIncludeSpecialChar, updateCollections } from '../../lib/utils'

interface Props {
  id: number;
  title: {
    english: string;
  };
  coverImage: {
    large: string;
  },
  onClose: () => void;
}

const CollectionListInput = ({ id, title, coverImage, onClose }: Props) => {
  const [collections, setCollections] = useState<string[]>([])
  const [collectionName, setCollectionName] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const currentCollection = localStorage.getItem('anime-collections')
    
    if (currentCollection !== null) {
      const parsedCollection = JSON.parse(currentCollection)
      const collectionNames = parsedCollection.map(collection => collection.name)

      setCollections(collectionNames)
    }
  }, [id])

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setCollectionName(event.target.value)
  }

  function handleAdd() {
    const isNameExists = collections.some(collection => collection === collectionName)

    if (isIncludeSpecialChar(collectionName)) {
      setCollectionName('')
      setError('collection name must not include special char!')
      return
    }

    if (isNameExists) {
      setCollectionName('')
      setError('Name must be unique!')
      return
    }

    const newCollection = {
      name: collectionName,
      list: []
    }
    const currentCollection = localStorage.getItem('anime-collections')
    const parsedCollection = JSON.parse(currentCollection) || []
    const mergedCollection = [...parsedCollection, newCollection]
    localStorage.setItem('anime-collections', JSON.stringify(mergedCollection))

    setCollections([...collections, collectionName]);
    setCollectionName('')
    setError('')
  }

  function handleSave(collectionName: string) {
    const currentCollection = localStorage.getItem('anime-collections')
    const parsedCollection = JSON.parse(currentCollection)

    const newList = {
      id, title, coverImage
    }

    const editedCollection = updateCollections(parsedCollection, collectionName, newList)

    localStorage.setItem('anime-collections', JSON.stringify(editedCollection))

    onClose()
  }

  return (
    <div>
      <div>
        <input type="text" value={collectionName} onChange={handleChange} />
        <button type="button" onClick={handleAdd} disabled={!collectionName}>
          Add
        </button>
      </div>
      <span>{error}</span>

      <ul>
        {collections.map((collection, i) => (
          <li key={i}>
            <span>{collection}</span>
            <button type="button" onClick={() => handleSave(collection)}>Save</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CollectionListInput
