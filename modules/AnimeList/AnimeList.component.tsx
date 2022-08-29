import { GridLayout, CardLink } from '../../components'
import type { AnimeListItem } from '../../types'

interface Props {
  data: AnimeListItem[]
}

const AnimeList = ({ data }: Props) => (
  <GridLayout>
    {data.map(item => (
      <CardLink
        key={item.id}
        link={`/anime/${item.id}`}
        image={item.coverImage.large}
        title={item.title.english}
      />
    ))}
  </GridLayout>
)

export default AnimeList
