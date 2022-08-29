interface Props {
  label: string;
  children: React.ReactNode;
}

const SectionItem = ({ label, children }: Props) => (
  <section>
    <h4>{label}</h4>
    {children}
  </section>
)

export default SectionItem
