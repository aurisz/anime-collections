import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

interface Props {
  id: string;
  title: string;
}

const YoutubeEmbed = ({ id, title }: Props) => id ? (
  <div data-testid={`${title} Video`}>
    <LiteYouTubeEmbed 
      id={id}
      title={title}
    />
  </div>
) : <p>No Video Found</p>

export default YoutubeEmbed
