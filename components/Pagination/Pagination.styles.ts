import styled from '@emotion/styled'
import { css } from '@emotion/react'

const styles = {
  container: css`
    display: flex;
    list-style-type: none;
    width: 100%;
    justify-content: center;
    margin-top: 2rem;
  `,
  item: css`
    padding: 0 12px;
    height: 32px;
    text-align: center;
    margin: auto 4px;
    color: white;
    display: flex;
    box-sizing: border-box;
    align-items: center;
    letter-spacing: 0.01071em;
    border-radius: 16px;
    line-height: 1.43;
    font-size: 13px;
    min-width: 32px;
    &:hover {
      background-color: grey;
      color: black;
      cursor: pointer;
    }
  `,
  itemSelected: css`
    background-color: white;
    color: black;
  `,
  dots: css`
    &:hover {
      background-color: transparent;
      cursor: default;
    }
  `,
}

export default styles
