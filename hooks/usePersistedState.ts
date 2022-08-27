import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export type SetPersistedState = Dispatch<SetStateAction<T>>
type PersistedState<T> = [T, SetPersistedState]

function usePersistedState<T>(key: string, defaultValue: T): PersistedState<T> {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return defaultValue
    }

    try {
      const value = window.localStorage.getItem(key)

      return value ? (JSON.parse(value) as T) : defaultValue
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error)
      return defaultValue
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export default usePersistedState
