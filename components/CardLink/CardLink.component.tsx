import Link from 'next/link'

import Card from '../Card'

interface Props {
  link: string;
  image?: string;
  title: string;
}

const CardLink = ({ link, ...props }: Props) => {
  return (
    <Link href={link}>
      <a>
        <Card {...props} />
      </a>
    </Link>
  )
}

export default CardLink
