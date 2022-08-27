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
    background: white;
    position: relative;
    border-radius: 8px;
    width: 500px;
    padding: 1rem;
    color: black;
  `,
  modalHeader: css`

  `,
}

export default styles
