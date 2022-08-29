import Navbar from '../Navbar'
import styles from './Layout.styles'

interface Props {
  children: React.ReactNode;
  title: string;
}

const Layout = ({ children, title }: Props) => (
  <main css={styles.container}>
    <h1>{title}</h1>
    <Navbar />
    {children}
  </main>
)

export default Layout
