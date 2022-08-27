import { useEffect } from 'react'
import { createPortal } from 'react-dom'

import styles from './Modal.styles'

interface Props {
  isShowing: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ isShowing, onClose, children, title }: Props) => {
  // prevent page scrolling when modal is open
  useEffect(() => {
    if (isShowing) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isShowing]);

  return isShowing ? createPortal(
    <>
      <div css={styles.modalOverlay}/>
      <div css={styles.modalWrapper} aria-modal aria-hidden tabIndex={-1} role="dialog" onClick={onClose}>
        <div css={styles.modal} onClick={e => e.stopPropagation()}>
          <div>
            <span>{title}</span>
          </div>
          <hr />
          <div>
            {children}
          </div>
        </div>
      </div>
    </>, document.body
  ) : null
}

export default Modal
