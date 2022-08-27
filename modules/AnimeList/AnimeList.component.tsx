import GridLayout from '../../components/GridLayout'
import CardLink from '../../components/CardLink'

import type { Props } from './AnimeList.types';

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
