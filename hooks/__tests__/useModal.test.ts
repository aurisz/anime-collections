import { renderHook, act } from '@testing-library/react-hooks'

import useModal from '../useModal'

describe('useModal', () => {
  it('should toggle isShowing from false to true', () => {
    const { result } = renderHook(() => useModal())

    expect(result.current.isShowing).toBe(false)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isShowing).toBe(true)
  })
})