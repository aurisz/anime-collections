import CollectionInput from '../CollectionInput'
import Button from '../../components/Button'
import type { AnimeCollection } from '../../types'
import styles from './CollectionListInput.styles';

interface Props {
  collections: AnimeCollection[];
  onAdd: (name: string) => void;
  onSave: (name: string) => void;
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
