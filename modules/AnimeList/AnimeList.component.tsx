import Image from 'next/image'
import Link from 'next/link'

import { GridContainer, GridItem } from './AnimeList.styles';

import type { Props } from './AnimeList.types';

const AnimeList = (props: Props) => (
  <GridContainer>
    {props.data.map(item => (
      <Link href={`anime/${item.id}`} key={item.id}>
        <GridItem key={item.id}>
          <Image src={item.coverImage.large} width={230} height={325} alt={item.title.english} />
          <span>{item.title.english}</span>
        </GridItem>
      </Link>
    ))}
  </GridContainer>
)

export default AnimeList
