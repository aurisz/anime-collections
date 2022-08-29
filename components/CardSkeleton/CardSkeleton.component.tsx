import styles from './CardSkeleton.styles'

const CardSkeleton = () => (
  <div css={styles.container}>
    <div css={[styles.shimmer, styles.shimmerImage]}></div>
    <div css={[styles.shimmer, styles.shimmerTitle]}></div>
  </div>
)

export default CardSkeleton
