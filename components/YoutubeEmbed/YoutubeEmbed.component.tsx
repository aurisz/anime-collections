import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface Props {
  id: string;
  title: string;
}

const YoutubeEmbed = ({ id, title }: Props) => id ? (
  <LiteYouTubeEmbed 
    id={id}
    title={title}
  />
) : <p>No Video Found</p>

export default YoutubeEmbed
