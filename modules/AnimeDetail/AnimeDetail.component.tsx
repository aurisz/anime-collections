import parse from 'html-react-parser'

import styles from './AnimeDetail.styles'
import useModal from '../../hooks/useModal'
import Modal from '../../components/Modal/Modal.component'
import CollectionListInput from '../CollectionLIstInput'
import type { Props } from './AnimeDetail.types'

const AnimeDetail = (props: Props) => {
  const {isShowing, toggle, setIsShowing} = useModal();
  
  return (
    <div css={styles.container}>
      <picture css={styles.imageContainer}>
        <img css={styles.bannerImage} src={props.bannerImage} alt={props.title.english} />
      </picture>
      <div css={styles.content}>
        <h2>{props.title.english}</h2>
        <p>{parse(props.description)}</p>
        <div>
          <button onClick={() => setIsShowing(true)}>Add to Collection</button>
        </div>
        <div>
          <h4>Genres</h4>
          <span>{props.genres.join(', ')}</span>
        </div>
        <div>
          <h4>Video</h4>
          <div css={styles.videoResponsive}>
            <iframe
              width="853"
              height="480"
              src={`https://www.youtube.com/embed/${props.trailer.id}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </div>

      <Modal
        isShowing={isShowing}
        onClose={toggle}
        title="Add to Collections"
      >
        <CollectionListInput id={props.id} title={props.title} coverImage={props.coverImage} onClose={toggle} />
      </Modal>
    </div>
  )
}

export default AnimeDetail