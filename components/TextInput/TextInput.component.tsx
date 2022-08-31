import styles from './TextInput.styles'

const TextInput = ({ value, onChange, placeholder, ...props }: React.HTMLProps<HTMLInputElement>) => (
  <input
    css={styles}
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    {...props}
  />
)

export default TextInput
