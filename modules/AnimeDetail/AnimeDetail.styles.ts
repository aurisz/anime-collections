import { css } from '@emotion/react'

const styles = {
  container: css`
    margin-bottom: 2rem;
  `,
  imageContainer: css`
    position: relative;
  `,
  bannerImage: css`
    width: 100vw;
    min-height: 210px;
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    object-fit: cover;
    margin-top: 0;
  `,
  content: css`
    max-width: 768px;
    padding-left: 2rem;
    padding-right: 2rem;
  `,
  infoContainer: css`
    display: flex;
    align-items: center;
    gap: 1rem;
  `,
  videoResponsive: css`
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;

    iframe {
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      position: absolute;
    }
  `
}

export default styles
