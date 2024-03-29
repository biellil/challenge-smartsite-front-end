import styled from 'styled-components'

export const LayoutContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  .container {
    width: 100%;
    max-width: 70rem;
    margin-right: auto;
    margin-left: auto;
    padding: 1rem 0.5rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 768px) {
    .container {
      width: 90%;
      max-width: 68rem;
    }
  }
`
