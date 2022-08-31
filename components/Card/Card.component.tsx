import { useState } from 'react'
import Image, { StaticImageData } from 'next/image'

import styles from './Card.styles'
import placeholderPoster from '../../public/placeholder-poster.png'

export interface Props {
  image?: string;
  title: string;
}

const Card = ({ image, title }: Props) => {
  const [src, setSrc] = useState<string | StaticImageData>(image as string)

  return (
    <div css={styles.card}>
      <Image
        src={src}
        width={230}
        height={320}
        alt={`${title} Cover Image`}
        onError={() => setSrc(placeholderPoster)}
      />
      <p>{title}</p>
    </div>
  )
}

export default Card
