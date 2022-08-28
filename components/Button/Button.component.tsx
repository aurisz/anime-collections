import styles from './Button.styles'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ onClick, children, ...props }: Props) => (
  <button css={styles} onClick={onClick} {...props}>
    {children}
  </button>
)

export default Button
