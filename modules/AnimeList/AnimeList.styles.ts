import styled from '@emotion/styled'

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  gap: 1rem;
`

export const GridItem = styled.div`
  img {
    object-fit: cover;
    border-radius: 8px;
  }
`