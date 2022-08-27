import GridLayout from '../../components/GridLayout'
import Card from '../../components/Card'

import type { Props } from './AnimeList.types';

const AnimeList = ({ data }: Props) => (
  <GridLayout>
    {data.map(item => (
      <Card
        key={item.id}
        link={`/anime/${item.id}`}
        image={item.coverImage.large}
        title={item.title.english}
      />
    ))}
  </GridLayout>
)

export default AnimeList
