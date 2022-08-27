interface Props {
  onRemove: () => void;
}

const CollectionRemove = ({ onRemove }: Props) => (
  <>
    <p>Are you sure want to remove this collection?</p>
    <button onClick={onRemove}>REMOVE</button>
  </>
)

export default CollectionRemove
