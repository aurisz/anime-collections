import { useState } from 'react'

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false)

  function toggle() {
    setIsShowing(!isShowing)
  }

  return {
    setIsShowing,
    isShowing,
    toggle,
  }
};

export default useModal