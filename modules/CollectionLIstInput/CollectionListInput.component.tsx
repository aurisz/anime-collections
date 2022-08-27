import CollectionInput from '../CollectionInput';
import type { AnimeCollection } from '../../types'

interface Props {
  collections: AnimeCollection[];
  onAdd: (name: string) => void;
  onSave: (name: string) => void;
}

const CollectionListInput = ({ collections, onAdd, onSave }: Props) => {
  return (
    <div>
      <CollectionInput label="Add" onSubmit={onAdd} collections={collections} />

      <ul>
        {collections.map(({ name }) => (
          <li key={name}>
            <span>{name}</span>
            <button type="button" onClick={() => onSave(name)}>Save</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CollectionListInput
