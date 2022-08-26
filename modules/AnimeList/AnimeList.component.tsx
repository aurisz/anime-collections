import Image from 'next/image'
import Link from 'next/link'

import styles from './AnimeList.styles';

import type { Props } from './AnimeList.types';

const AnimeList = (props: Props) => (
  <div css={styles.gridContainer}>
    {props.data.map(item => (
      <Link href={`anime/${item.id}`} key={item.id}>
        <div css={styles.gridItem}>
          <Image src={item.coverImage.large} width={230} height={325} alt={item.title.english} />
          <span>{item.title.english}</span>
        </div>
      </Link>
    ))}
  </div>
)

export default AnimeList
