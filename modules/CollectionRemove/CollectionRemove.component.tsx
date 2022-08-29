import { Button } from '../../components'
import styles from './CollectionRemove.styles'

interface Props {
  onRemove: () => void;
}

const CollectionRemove = ({ onRemove }: Props) => (
  <>
    <p>Are you sure want to remove this?</p>
    <Button css={styles.button} onClick={onRemove}>REMOVE</Button>
  </>
)

export default CollectionRemove
