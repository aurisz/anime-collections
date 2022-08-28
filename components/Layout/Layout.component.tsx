import Navbar from '../Navbar'
import styles from './Layout.styles'

interface Props {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => (
  <main css={styles.container}>
    <h1>Anime List</h1>
    <Navbar />
    {children}
  </main>
)

export default Layout
