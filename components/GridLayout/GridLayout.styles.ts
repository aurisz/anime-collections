import { css } from '@emotion/react'

const styles = css`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr;
  justify-items: center;
  justify-content: center;
  gap: 1rem;

  @media screen and (max-width: 480px){
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 768px){
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`

export default styles
