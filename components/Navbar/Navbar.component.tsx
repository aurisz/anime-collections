import Link from 'next/link'

import styles from './Navbar.styles'

const Navbar = () => (
  <nav css={styles.container}>
    <h1>Anime Collections</h1>
    <ul css={styles.navList}>
      <li>
        <Link href="/">
          <a>Explore</a>
        </Link>
      </li>
      <li>
        <Link href="/collections">
          <a>Collections</a>
        </Link>
      </li>
    </ul>
  </nav>
)

export default Navbar
