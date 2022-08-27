import type { AnimeListItem, AnimeCollection } from '../types'

export const isIncludeSpecialChar = (string: string): boolean => {
  const regex = /\W|_/g

  return regex.test(string)
}

export const updateCollections = (
  collections: AnimeCollection[], targetName: string, { id, title, coverImage }: AnimeListItem
): AnimeCollection[] => collections.map(collection => {
  if (collection.name === targetName) {
    const isAlreadyIncluded = collection.list.some(item => item.id === id)

    if (isAlreadyIncluded) {
      return collection
    }

    const newList = [...collection.list, { id, title, coverImage }]

    return { ...collection, list: newList }
  }

  return collection
})

export const filterCollectionsById = (collections: AnimeCollection[], filterId: number): AnimeCollection[] => 
  collections.filter(
    collection => collection.list.some(item => item.id === filterId)
  )

export const getCollectionByName = (collections: AnimeCollection[], targetName: string): AnimeCollection => {
  const initialValue = { name: '', list: [] }

  return collections.find(collection => collection.name === targetName) || initialValue
}

export const removeCollections = (collections: AnimeCollection[], targetName: string): AnimeCollection[] => 
  collections.filter(collection => collection.name !== targetName)

export const addCollections = (collections: AnimeCollection[], targetName: string): AnimeCollection[] => 
  [...collections, { name: targetName, list: [] }]

export const editCollectionName = (collections: AnimeCollection[], currentName: string, newName: string): AnimeCollection[] => 
  collections.map(collection =>
    collection.name === currentName ? { ...collection, name: newName } : collection
  )

export const isCollectionNameExists = (collections: AnimeCollection[], targetName: string): boolean => 
  collections.some(collection => collection.name === targetName)

export const removeAnimeFromCollections = (collections: AnimeCollection[], targetName: string, animeId: number): AnimeCollection[] => 
  collections.map(collection => {
    const removedIdFromList = collection.list.filter(item => item.id !== animeId)

    return collection.name === targetName ? { ...collection, list: removedIdFromList } : collection
  })
