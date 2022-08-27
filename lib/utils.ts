import type { AnimeListItem, Collection } from '../types'

export const isIncludeSpecialChar = (string: string): boolean => {
  const regex = /\W|_/g

  return regex.test(string)
}

export const updateCollections = (
  collections: Collection[], targetName: string, { id, title, coverImage }: AnimeListItem
): Collection[] => collections.map(collection => {
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

export const filterCollectionsById = (collections: Collection[], filterId: number): Collection[] => 
  collections.filter(
    collection => collection.list.some(item => item.id === filterId)
  )

export const getCollectionByName = (collections: Collection[], targetName: string): Collection => {
  const initialValue = { name: '', list: [] }

  return collections.find(collection => collection.name === targetName) || initialValue
}