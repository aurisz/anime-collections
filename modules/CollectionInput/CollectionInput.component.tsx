import { useState, ChangeEvent } from 'react'

import { isIncludeSpecialChar, isCollectionNameExists } from '../../lib/utils'
import type { AnimeCollection } from '../../types'

interface Props {
  collections: AnimeCollection[];
  onSubmit: (name: string) => void;
  initialValue?: string;
  label: string;
}

const CollectionInput = ({ collections, onSubmit, initialValue = '', label }: Props) => {
  const [value, setValue] = useState(initialValue)
  const [error, setError] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  function handleSubmit() {
    if (isIncludeSpecialChar(value)) {
      setError('collection name must not include special char!')
      return
    }

    if (isCollectionNameExists(collections, value)) {
      setError('collection name must be unique!')
      return
    }
    
    onSubmit(value)
  }

  return (
    <>
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <button type="button" onClick={handleSubmit} disabled={!value}>
          {label}
        </button>
      </div>
      <span>{error}</span>
    </>
  )
}

export default CollectionInput
