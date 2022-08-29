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
    margin: 0 auto;
  `,
  infoContainer: css`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-weight: 400;
    color: #8197a4;

    p {
      margin-top: 0;
      margin-bottom: 0;
    }
  `,
  collectionContainer: css`
    display: flex;
    gap: 0.5rem;
    color: #0072F5;
    cursor: pointer;

    p {
      margin-top: 0;
    }
  `,
}

export default styles
