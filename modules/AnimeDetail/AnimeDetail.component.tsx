import parse from 'html-react-parser'
import Link from 'next/link'
import toast from 'react-hot-toast'

import styles from './AnimeDetail.styles'
import CollectionListInput from '../CollectionLIstInput'
import { Modal, Button, SectionItem, YoutubeEmbed } from '../../components'
import { useModal, usePersistedState } from '../../hooks'
import { filterCollectionsById, updateCollections, addCollections } from '../../lib/utils'
import type { AnimeDetail as Props, AnimeCollection } from '../../types'

const _renderEmptyCollections = () => (
  <p>Not added in any collections yet</p>
)

const _renderCollections = (collections: AnimeCollection[]) => (
  <div css={styles.collectionContainer}>
    {collections.map(({ name }) => (
      <Link key={name} href={`/collection/${name}`}>
        <p>{name}</p>
      </Link>
    ))}
  </div>
)

const AnimeDetail = (props: Props) => {
  const {isShowing, toggle} = useModal()
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
    toast.success(`${props.title.english} has been added to collection ${collectionName}`)
  }
  
  return (
    <div css={styles.container}>
      <picture css={styles.imageContainer}>
        <img css={styles.bannerImage} src={props.bannerImage} alt={props.title.english} />
      </picture>
      
      <div css={styles.content}>
        <h1>{props.title.english}</h1>

        <div css={styles.infoContainer}>
          <p>★ {props.averageScore}</p>
          <p>• {props.seasonYear}</p>
          <p>• {props.episodes} episodes</p>
          <p>• {props.duration} mins</p>
        </div>

        <p>{parse(props.description)}</p>

        <SectionItem label="Genres">
          {props.genres.join(', ')}
        </SectionItem>

        <SectionItem label="Collections">
          {filteredCollections.length === 0 ? _renderEmptyCollections() : _renderCollections(filteredCollections)}
          <Button onClick={toggle}>+ Add to Collection</Button>
        </SectionItem>

        <SectionItem label="Video">
          <YoutubeEmbed id={props.trailer.id} />
        </SectionItem>
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
