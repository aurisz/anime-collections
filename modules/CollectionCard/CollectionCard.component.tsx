import { CardLink } from '../../components'
import styles from './CollectionCard.styles'
import type { CardLinkProps } from '../../components/CardLink'

interface Props extends CardLinkProps {
  onEdit?: () => void;
  onRemove?: () => void;
}

const CollectionCard = ({ title, link, image, onEdit, onRemove }: Props) => (
  <div css={styles.container}>
    <CardLink
      title={title}
      link={link}
      image={image}
    />
    <div css={styles.buttonContainer}>
      {onEdit && <button title="Edit" css={styles.button('primary')} onClick={onEdit}>✎</button>}
      {onRemove && <button title="Remove" css={styles.button('danger')} onClick={onRemove}>🗑</button>}
    </div>
  </div>
)

export default CollectionCard