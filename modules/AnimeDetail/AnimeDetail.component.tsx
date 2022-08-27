import { useState, useEffect } from 'react'
import parse from 'html-react-parser'

import styles from './AnimeDetail.styles'
import useModal from '../../hooks/useModal'
import Modal from '../../components/Modal/Modal.component'
import CollectionListInput from '../CollectionLIstInput'
import { filterCollectionsById } from '../../lib/utils'
import type { Props } from './AnimeDetail.types'

const AnimeDetail = (props: Props) => {
  const [collections, setCollections] = useState<string[]>([])
  const {isShowing, toggle, setIsShowing} = useModal();

  useEffect(() => {
    const currentCollection = localStorage.getItem('anime-collections')
    
    if (currentCollection !== null) {
      const parsedCollection = JSON.parse(currentCollection)

      const filteredCollection = filterCollectionsById(parsedCollection, props.id)
      const savedCollectionNames = filteredCollection.map(collection => collection.name)
      setCollections(savedCollectionNames)
    }
  }, [props.id])
  
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
          <p>{collections.length === 0 ? 'Not added in any collections yet' : collections.join(', ')}</p>
          <button onClick={() => setIsShowing(true)}>Add to Collection</button>
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
        <CollectionListInput id={props.id} title={props.title} coverImage={props.coverImage} onClose={toggle} />
      </Modal>
    </div>
  )
}

export default AnimeDetail
