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
  `,
  navLink: ({ isActive }: { isActive: boolean }) => css`
    color: ${isActive ? '#0072F5' : 'white'};
    cursor: pointer;
  `,
}

export default styles;
