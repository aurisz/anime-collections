import { ChangeEventHandler } from 'react'

import styles from './TextInput.styles'

interface Props {
  value: string;
  onChange: ChangeEventHandler;
  placeholder?: string;
}

const TextInput = ({ value, onChange, placeholder }: Props) => (
  <input css={styles.input} type="text" value={value} onChange={onChange} placeholder={placeholder} />
)

export default TextInput
