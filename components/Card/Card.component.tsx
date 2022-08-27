import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import styles from './Card.styles'
import placeholderPoster from '../../public/placeholder-poster.png'

interface Props {
  link: string;
  image: string;
  title: string;
}

const Card = ({ link, image, title }: Props) => {
  const [src, setSrc] = useState<string | StaticImageData>(image)

  return (
    <Link href={link}>
      <a>
        <div css={styles.gridItem}>
          <Image src={src} width={230} height={325} alt={title} onError={() => setSrc(placeholderPoster)} />
          <span>{title}</span>
        </div>
      </a>
    </Link>
  )
}

export default Card
