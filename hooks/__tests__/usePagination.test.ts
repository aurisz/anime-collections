import { renderHook } from '@testing-library/react-hooks'

import usePagination from '../usePagination'

describe('usePagination', () => {
  let paginationParams

  beforeEach(() => {
    paginationParams = {
      currentPage: 1,
      totalCount: 500,
      pageSize: 10,
      siblingCount: 1,
    }
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return correct page range if current page is first', () => {
    const expectedResult = [1,2,3,4,5, '...', 50]

    const { result } = renderHook(() => usePagination(paginationParams))

    expect(result.current).toEqual(expectedResult)
  })

  it('should return correct page range if current page is last', () => {
    const expectedResult = [1,'...',46,47,48,49,50]
    paginationParams.currentPage = 50

    const { result  } = renderHook(() => usePagination(paginationParams))

    expect(result.current).toStrictEqual(expectedResult)
  })

  it('should return correct page range if current page is not first or last', () => {
    const expectedResult = [1,'...',2,3,4,'...',50]
    paginationParams.currentPage = 3

    const { result  } = renderHook(() => usePagination(paginationParams))

    expect(result.current).toStrictEqual(expectedResult)
  })
  
  it('should return correct page range if total count is less than total page', () => {
    const expectedResult = [1,2,3,4,5]
    paginationParams.totalCount = 50

    const { result  } = renderHook(() => usePagination(paginationParams))

    expect(result.current).toStrictEqual(expectedResult)
  })
})