import styles from './Button.styles'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ onClick, children }: Props) => (
  <button css={styles} onClick={onClick}>
    {children}
  </button>
)

export default Button
