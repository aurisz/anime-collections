import parse from 'html-react-parser'
import Link from 'next/link'

import styles from './AnimeDetail.styles'
import useModal from '../../hooks/useModal'
import Modal from '../../components/Modal/Modal.component'
import CollectionListInput from '../CollectionLIstInput'
import { filterCollectionsById, updateCollections, addCollections } from '../../lib/utils'
import usePersistedState from '../../hooks/usePersistedState'
import type { AnimeListItem, AnimeCollection } from '../../types'

interface Props extends AnimeListItem {
  bannerImage: string;
  description: string;
  genres: string[];
  trailer: {
    id: string;
  }
}

const _renderEmptyCollections = () => (
  <p>Not added in any collections yet</p>
)

const _renderCollections = (collections: AnimeCollection[]) => (
  collections.map(({ name }) => (
    <Link key={name} href={`/collection/${name}`}>
      <a>
        <p>{name}</p>
      </a>
    </Link>
  ))
)

const AnimeDetail = (props: Props) => {
  const {isShowing, toggle} = useModal();
  const [collections, setCollections] = usePersistedState('anime-collections', [])
  const filteredCollections = filterCollectionsById(collections, props.id)

  function handleAddCollection(name: string) {
    setCollections(addCollections(collections, name))
  }

  function handleSaveAnime(collectionName: string) {
    const { id, title, coverImage } = props
    const newList = {
      id, title, coverImage
    }

    setCollections(updateCollections(collections, collectionName, newList))
    toggle()
  }
  
  return (
    <div css={styles.container}>
      <picture css={styles.imageContainer}>
        <img css={styles.bannerImage} src={props.bannerImage} alt={props.title.english} />
      </picture>
      <div css={styles.content}>
        <h2>{props.title.english}</h2>
        <p>{parse(props.description)}</p>
        <div>
          <h4>Collections</h4>
          <div>{filteredCollections.length === 0 ? _renderEmptyCollections() : _renderCollections(filteredCollections)}</div>
          <button onClick={toggle}>Add to Collection</button>
        </div>
        <div>
          <h4>Genres</h4>
          <p>{props.genres.join(', ')}</p>
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
        <CollectionListInput collections={collections} onAdd={handleAddCollection} onSave={handleSaveAnime} />
      </Modal>
    </div>
  )
}

export default AnimeDetail
