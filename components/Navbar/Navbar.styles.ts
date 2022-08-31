import { css } from '@emotion/react'

const styles = {
  container: css`
    h1 {
      text-align: center;
      margin-top: 0;
      margin-bottom: 1rem;
      padding: 0;
    }
  `,
  navList: css`
    margin-top: 0;
    padding: 0;
    display: flex;
    list-style-type: none;
    justify-content: space-around;
    padding-bottom: 1rem;

    li {
      cursor: pointer;
    }
  `,
  navLink: css`
    color: #3694FF;

    &:hover {
      color: #0072F5;
    }
  `,
  activeLink: css`
    color: white;
    border-bottom: 2px solid white;
    padding-bottom: 0.5rem;
  `
}

export default styles;
