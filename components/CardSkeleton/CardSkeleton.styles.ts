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
    position: relative;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
    width: 184px;
    height: 303px;
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
  `,
  shimmerImage: css`
    width: 100%;
    height: 80%;
    border-radius: 8px;
  `,
  shimmerTitle: css`
    height: 10%;
    width: 100%;
    margin-top: 1rem;
    border-radius: 8px;
  `
}

export default styles
