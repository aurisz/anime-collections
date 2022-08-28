import styles from './TextInput.styles'

const TextInput = ({ value, onChange, placeholder }: React.HTMLProps<HTMLInputElement>) => (
  <input css={styles.input} type="text" value={value} onChange={onChange} placeholder={placeholder} />
)

export default TextInput
