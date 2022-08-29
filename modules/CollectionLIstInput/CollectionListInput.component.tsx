import styles from './CollectionListInput.styles'
import CollectionInput from '../CollectionInput'
import { Button } from '../../components'
import type { AnimeCollection } from '../../types'

type Action = (name: string) => void;

interface Props {
  collections: AnimeCollection[];
  onAdd: Action;
  onSave: Action;
}

const CollectionListInput = ({ collections, onAdd, onSave }: Props) => (
  <>
    <CollectionInput label="+ Add New Collection" onSubmit={onAdd} collections={collections} />

    <div css={styles.listContainer}>
      <p>Add To Existing Collections</p>
      <div css={styles.collectionContainer}>
        {collections.map(({ name }) => (
          <Button key={name} type="button" onClick={() => onSave(name)}>
            {name}
          </Button>
        ))}
      </div>
    </div>
  </>
)

export default CollectionListInput
