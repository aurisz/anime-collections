import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Navbar.styles'

const Navbar = () => {
  const router = useRouter()

  return (
    <nav css={styles.container}>
      <ul css={styles.navList}>
        <li>
          <Link href="/" passHref>
            <a css={styles.navLink({ isActive: router.pathname === '/' })}>Explore</a>
          </Link>
        </li>
        <li>
          <Link href="/collections">
            <a css={styles.navLink({ isActive: router.pathname.includes('collection') })}>Collections</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
