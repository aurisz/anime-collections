import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import parse from 'html-react-parser'
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
      <Link key={name} href={`/collection/${name}`} passHref>
        <a>
          <p>{name}</p>
        </a>
      </Link>
    ))}
  </div>
)

const AnimeDetail = (props: Props) => {
  const {isShowing, toggle} = useModal()
  const [collections, setCollections] = useState([])
  const [persistedState, setPersistedState] = usePersistedState<AnimeCollection[]>('anime-collections', [])

  const filteredCollections = filterCollectionsById(collections, props.id)

  useEffect(() => setCollections(persistedState as []), [persistedState])

  function handleAddCollection(name: string) {
    setPersistedState(addCollections(collections, name))
  }

  function handleSaveAnime(collectionName: string) {
    const { id, title, coverImage } = props
    const newList = {
      id, title, coverImage
    }

    setPersistedState(updateCollections(collections, collectionName, newList))
    toggle()
    toast.success(`${props.title.english} has been added to collection ${collectionName}`)
  }
  
  return (
    <div css={styles.container}>
      <div css={styles.imageContainer}>
        <Image
          src={props.bannerImage}
          alt={`${props.title.english} Banner Image`}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
      <div css={styles.content}>
        <h1>{props.title.english}</h1>

        <div css={styles.infoContainer}>
          <p>??? {props.averageScore}</p>
          <p>??? {props.seasonYear}</p>
          <p>??? {props.episodes} episodes</p>
          <p>??? {props.duration} mins</p>
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
          <YoutubeEmbed id={props.trailer?.id} title={props.title.english} />
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
