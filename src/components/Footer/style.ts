import styled from 'styled-components'

export const FooterContainer = styled.footer`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: var(--dark-grey);
  padding: 1.2rem;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding: 1.2rem;

  img {
    width: 9%;
  }
  samp {
    font-weight: normal;
    font-size: 1rem;
    color: white;
  }
`
