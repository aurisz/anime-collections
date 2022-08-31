import { GridLayout, CardSkeleton } from '../'

interface Props {
  children: React.ReactNode;
  loading?: boolean;
}

const _renderLoading = () => Array.from({ length: 10 }, (_, i) => <CardSkeleton key={i} />)

const GridList = ({ loading, children }: Props) => (
  <GridLayout>
    {loading ? _renderLoading() :  children}
  </GridLayout>
)

export default GridList
