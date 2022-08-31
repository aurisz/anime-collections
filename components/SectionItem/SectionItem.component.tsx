import styles from './SectionItem.styles'

interface Props {
  label: string;
  children: React.ReactNode;
}

const SectionItem = ({ label, children }: Props) => (
  <section>
    <p css={styles}>{label}</p>
    {children}
  </section>
)

export default SectionItem
