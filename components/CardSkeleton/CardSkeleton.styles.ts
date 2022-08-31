import { css, keyframes  } from '@emotion/react'

const breath = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
`

const styles = {
  container: css`
    overflow: hidden;
    position: relative;
    max-width: 100%;
  `,
  shimmer: css`
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 0.5s;
    animation-iteration-count: infinite;
    animation-direction: normal;
    animation-fill-mode: none;
    animation-play-state: running;
    animation-name: ${breath};
    background: rgba(255, 255, 255, 0.35);

    min-width: 100%;
    max-width: 100%;
    border-radius: 8px;
  `,
  shimmerImage: css`
    width: 213px;
    height: 250px;
  `,
  shimmerTitle: css`
    width: 213px;
    height: 21px;
    margin-top: 1rem;
  `
}

export default styles
