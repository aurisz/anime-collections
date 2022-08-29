import styles from './YoutubeEmbed.styles'

interface Props {
  id: string;
}

const YoutubeEmbed = ({ id }: Props) => (
  <div css={styles}>
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${id}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
)

export default YoutubeEmbed
