import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './Navbar.styles'

const Navbar = () => {
  const { pathname } = useRouter()

  const getLinkStyle = (isActive: boolean) => isActive ? styles.activeLink : styles.navLink

  return (
    <nav css={styles.container}>
      <ul css={styles.navList}>
        <li>
          <Link href="/">
            <a css={getLinkStyle(pathname === '/')}>Explore</a>
          </Link>
        </li>
        <li>
          <Link href="/collections">
            <a css={getLinkStyle(pathname.includes('collection'))}>Collections</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
