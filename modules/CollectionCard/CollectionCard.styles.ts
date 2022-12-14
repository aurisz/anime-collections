import { css } from '@emotion/react'

const buttonColor = {
  primary: '#0072F5',
  danger: '#f31260',
}

type Variant = keyof typeof buttonColor;

const styles = {
  container: css`
    position: relative;
  `,
  countCounter: css`
    position: absolute;
    top: 0.25rem;
    left: 0.25rem;
    background-color: #9750DD;
    border-radius: 8px;

    span {
      color: white;
      padding: 0.5rem;
    }
  `,
  buttonContainer: css`
    position: absolute;
    top: 0.25rem;
    right: 0.25rem;
    display: flex;
    gap: 0.5rem;
  `,
  button: (variant: string) => css`
    cursor: pointer;
    border-radius: 6px;
    border-style: none;
    outline-style: none;
    padding: 0.25rem 0.75rem;
    border: 1px solid ${buttonColor[variant as Variant]};
    background-color: ${buttonColor[variant as Variant]};
    color: white;
  `
}

export default styles
