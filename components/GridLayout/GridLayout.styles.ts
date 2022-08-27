import { css } from '@emotion/react'

const styles = {
  gridContainer: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    justify-items: center;
    gap: 1rem;
  `,
}

export default styles
