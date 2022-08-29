import Link from 'next/link'

import Card from '../Card'
import type { CardProps } from '../Card'

interface Props extends CardProps {
  link: string;
}

const CardLink = ({ link, ...props }: Props) => (
  <Link href={link}>
    <a>
      <Card {...props} />
    </a>
  </Link>
)

export default CardLink
