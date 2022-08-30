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

    li {
      cursor: pointer;
    }
  `,
  navLink: css`
    color: white;
  `,
  activeLink: css`
    color: #0072F5;
  `
}

export default styles;
