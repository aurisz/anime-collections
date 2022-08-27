import GridLayout from '../../components/GridLayout'
import Card from '../../components/Card'
import type { AnimeListItem } from '../../types'

interface Props {
  data: AnimeListItem[]
}

const _renderEmpty = () => (
  <h4>No Anime on this collections!</h4>
)

const _renderCollection = (item: AnimeListItem) => (
  <Card
    key={item.id}
    link={`/anime/${item.id}`}
    image={item.coverImage.large}
    title={item.title.english}
  />
)

const CollectionDetail = ({ data }: Props) => (
  <GridLayout>
    {data.length === 0 ? _renderEmpty() : data.map(_renderCollection)}
  </GridLayout>
)

export default CollectionDetail
