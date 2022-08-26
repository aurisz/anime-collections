import Navbar from '../Navbar'
import styles from './Layout.styles'

import type { Props } from './Layout.types'

const Layout = ({ children }: Props) => (
  <main css={styles.container}>
    <Navbar />
    {children}
  </main>
)

export default Layout
