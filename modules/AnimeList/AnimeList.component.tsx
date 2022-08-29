import { GridList, CardLink } from '../../components'
import type { AnimeListItem } from '../../types'

interface Props {
  data: AnimeListItem[];
  loading: boolean;
}

const AnimeList = ({ data, loading }: Props) => (
  <GridList loading={loading}>
    {data.map(item => (
      <CardLink
        key={item.id}
        link={`/anime/${item.id}`}
        image={item.coverImage.large}
        title={item.title.english}
      />
    ))}
  </GridList>
)

export default AnimeList
