export const isIncludeSpecialChar = (string: string) => {
  const regex = /\W|_/g

  return regex.test(string)
}

type CollectionList = {
  id: number;
  title: {
    english: string;
  }
  coverImage: {
    large: string;
  }
}

type Collection = {
  name: string;
  list: CollectionList[]
}

export const updateCollections = (
  collections: Collection[], targetName: string, { id, title, coverImage }: CollectionList
) => {
  return collections.map(collection => {
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
}

export const filterCollectionsById = (collections: Collection[], filterId: number) => 
  collections.filter(
    collection => collection.list.some(item => item.id === filterId)
  )