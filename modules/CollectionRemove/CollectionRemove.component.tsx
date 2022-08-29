import { Button } from '../../components'

interface Props {
  onRemove: () => void;
}

const CollectionRemove = ({ onRemove }: Props) => (
  <>
    <p>Are you sure want to remove this?</p>
    <Button onClick={onRemove}>REMOVE</Button>
  </>
)

export default CollectionRemove
