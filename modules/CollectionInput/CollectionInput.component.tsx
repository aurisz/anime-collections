import { useState, ChangeEvent } from 'react'

import { isIncludeSpecialChar, isCollectionNameExists } from '../../lib/utils'
import { Button, TextInput } from '../../components'
import styles from './CollectionInput.styles'
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

  function handleSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
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
      <form css={styles.formWrapper} onSubmit={handleSubmit}>
        <div css={styles.inputWrapper}>
          <TextInput value={value} onChange={handleChange} placeholder="Input Collection Name" />
        </div>
        <Button type="submit" onClick={handleSubmit} disabled={!value}>
          {label}
        </Button>
      </form>
      {error && <span>{error}</span>}
    </>
  )
}

export default CollectionInput
