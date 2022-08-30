import { renderHook, act } from '@testing-library/react-hooks'
import 'jest-localstorage-mock';

import usePersistedState from '../usePersistedState'

describe('usePersistedState', () => {
  it('should get from localStorage', () => {
    const expectedResult = ['hello', 'world']
    const { result } = renderHook(() => usePersistedState('test', expectedResult))
    const [value] = result.current
    
    expect(value).toBe(expectedResult)
  })
  
  it('should save to localStorage', () => {
    const expectedResult = ['aaa', 'bbb']
    const { result } = renderHook(() => usePersistedState('test', []))
    const [, setValue] = result.current
    
    act(() => {
      setValue(expectedResult)
    })

    expect(localStorage.setItem).toBeCalledWith('test', JSON.stringify(expectedResult))
  })
})