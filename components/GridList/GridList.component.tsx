import { GridLayout, CardSkeleton } from '../'
import styles from './GridList.styles'

interface Props {
  children: React.ReactNode;
  loading?: boolean;
}

const _renderLoading = () => (
  <div css={styles}>
    {Array.from({ length: 10 }, (_, i) => <CardSkeleton key={i} />)}
  </div>
)

const GridList = ({ loading, children }: Props) => (
  <GridLayout>
    {loading ? _renderLoading() :  children}
  </GridLayout>
)

export default GridList
