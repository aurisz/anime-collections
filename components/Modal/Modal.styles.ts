import { css } from '@emotion/react'

const styles = {
  modalOverlay: css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: .5;
    transition: opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  `,
  modalWrapper: css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  modal: css`
    z-index: 100;
    background: #16181A;
    position: relative;
    border-radius: 16px;
    width: 500px;
    padding: 1rem;
    color: white;
  `,
  modalHeader: css`
    text-align: center;
  `,
  modalContent: css`
    padding: 1rem;
  `
}

export default styles
