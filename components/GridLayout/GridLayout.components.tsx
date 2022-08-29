import styles from './GridLayout.styles'

interface Props {
  children: React.ReactNode;
}

const GridLayout = ({ children }: Props) => (
  <div css={styles}>
    {children}
  </div>
)

export default GridLayout
