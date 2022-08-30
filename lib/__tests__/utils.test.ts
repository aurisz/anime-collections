import {
  isIncludeSpecialChar,
  updateCollections,
  filterCollectionsById,
  getCollectionByName,
  removeCollections,
  addCollections,
  editCollectionName,
  isCollectionNameExists,
  removeAnimeFromCollections
} from '../utils'

describe('utils', () => {
  let collections

  beforeEach(() => {
    collections = [
      {
        name: 'col1',
        list: [
          {
            id: 1, title: { english: 'One Punch Man'}, coverImage: { large: 'imageUrl' }
          },
          {
            id: 2, title: { english: 'Attack on Titan'}, coverImage: { large: 'imageUrl' }
          }
        ]
      },
      {
        name: 'col2',
        list: [
          {
            id: 3, title: { english: 'Death Note'}, coverImage: { large: 'imageUrl' }
          }
        ]
      }
    ]
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('isIncludeSpecialChar', () => {
    it('should return true if there is a special char in string', () => {
      const result = isIncludeSpecialChar('hello world!')

      expect(result).toBe(true)
    })

    it('should return false if there is no special char in string', () => {
      const result = isIncludeSpecialChar('helloWorld')

      expect(result).toBe(false)
    })
  })

  describe('updateCollections', () => {
    it('should return array of collection with updated list given its collection name and new list', () => {
      const newList = {
        id: 4,
        title: { english: 'Your Name.'},
        coverImage: { large: 'imageUrl' }
      }
      const result = updateCollections(collections, 'col2', newList)
      const expectedResult = [
        collections[0],
        {
          name: 'col2',
          list: [...collections[1].list, newList]
        }
      ]

      expect(result).toStrictEqual(expectedResult)
    })

    it('should return same array of collection if given item id is already included in the list', () => {
      const newList = collections[0].list[0]
      const result = updateCollections(collections, 'col1', newList)

      expect(result).toStrictEqual(collections)
    })

    it('should return same array of collection if given collection name not matches', () => {
      const newList = collections[0].list[0]
      const result = updateCollections(collections, 'col3', newList)

      expect(result).toStrictEqual(collections)
    })
  })

  describe('filterCollectionsById', () => {
    it('should return array of collection that includes given id', () => {
      const result = filterCollectionsById(collections, 1)
      const expectedResult = [collections[0]]

      expect(result).toEqual(expectedResult)
    })

    it('should return empty array if given id is not found', () => {
      const result = filterCollectionsById(collections, 4)
      const expectedResult: [] = []

      expect(result).toEqual(expectedResult)
    })
  })

  describe('getCollectionByName', () => {
    it('should return collection object that matches given name', () => {
      const result = getCollectionByName(collections, 'col1')
      const expectedResult = collections[0]

      expect(result).toEqual(expectedResult)
    })

    it('should return default object if given name not matches', () => {
      const result = getCollectionByName(collections, 'col3')
      const expectedResult = { name: '', list: [] }

      expect(result).toEqual(expectedResult)
    })
  })

  describe('removeCollections', () => {
    it('should return array of collection with removed object by collection name', () => {
      const result = removeCollections(collections, 'col2')
      const expectedResult = [collections[0]]

      expect(result).toEqual(expectedResult)
    })

    it('should return same array of collection if given name not matches', () => {
      const result = removeCollections(collections, 'col3')

      expect(result).toEqual(collections)
    })
  })

  describe('addCollections', () => {
    it('should return array of collection with added collection name', () => {
      const result = addCollections(collections, 'col3')
      const expectedResult = [...collections, { name: 'col3', list: [] }]

      expect(result).toEqual(expectedResult)
    })
  })

  describe('editCollectionName', () => {
    it('should return array of collection with updated collection name given its current name and new name', () => {
      const result = editCollectionName(collections, 'col2', 'col2-a')
      const expectedResult = [collections[0], { name: 'col2-a', list: collections[1].list }]

      expect(result).toEqual(expectedResult)
    })
  })

  describe('isCollectionNameExists', () => {
    it('should return true if collection name already exists in collection array', () => {
      const result = isCollectionNameExists(collections, 'col1')

      expect(result).toEqual(true)
    })

    it('should return false if collection name not exists in collection array', () => {
      const result = isCollectionNameExists(collections, 'col3')

      expect(result).toEqual(false)
    })
  })

  describe('removeAnimeFromCollections', () => {
    it('should return array of collection with removed list item given its collection name and item id', () => {
      const result = removeAnimeFromCollections(collections, 'col1', 1)
      const expectedResult = [
        {
          ...collections[0],
          list: [{
            id: 2, title: { english: 'Attack on Titan'}, coverImage: { large: 'imageUrl' }
          }]
        },
        collections[1]
      ]

      expect(result).toEqual(expectedResult)
    })

    it('should return same array of collection if given collection name and item id not matches', () => {
      const result = removeAnimeFromCollections(collections, 'col2', 2)

      expect(result).toEqual(collections)
    })
  })
})
