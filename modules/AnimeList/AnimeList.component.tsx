import Image from 'next/image'

import { GridContainer, GridItem } from './AnimeList.styles';

import type { Props } from './AnimeList.types';

const AnimeList = (props: Props) => (
  <GridContainer>
    {props.data.map(item => (
      <GridItem key={item.id}>
        <Image src={item.coverImage.large} width={230} height={325} alt={item.title.english} />
        <span>{item.title.english}</span>
      </GridItem>
    ))}
  </GridContainer>
)

export default AnimeList
