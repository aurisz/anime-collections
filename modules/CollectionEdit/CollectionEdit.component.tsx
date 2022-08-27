import { useState, ChangeEvent } from 'react'

import { isIncludeSpecialChar } from '../../lib/utils'

interface Props {
  initialValue: string;
  onEdit: (name: string) => void;
}

const CollectionEdit = ({ onEdit, initialValue }: Props) => {
  const [value, setValue] = useState(initialValue)
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
    
    onEdit(value)
  }

  return (
    <>
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <button type="button" onClick={handleAdd} disabled={!value}>
          Edit
        </button>
      </div>
      <span>{error}</span>
    </>
  )
}

export default CollectionEdit
