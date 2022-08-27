import { useState, ChangeEvent } from 'react'

import { isIncludeSpecialChar } from '../../lib/utils'

interface Props {
  onAdd: (name: string) => void;
}

const CollectionAdd = ({ onAdd }: Props) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  function handleAdd() {
    if (isIncludeSpecialChar(value)) {
      setValue('')
      setError('collection name must not include special char!')
      return
    }
    
    onAdd(value)
  }

  return (
    <>
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <button type="button" onClick={handleAdd} disabled={!value}>
          Add
        </button>
      </div>
      <span>{error}</span>
    </>
  )
}

export default CollectionAdd
