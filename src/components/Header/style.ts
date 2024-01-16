import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  align-items: center;
  padding: 1.2rem;
  width: 100%;
  img {
    width: 15%;
  }
`
export const Titlediv = styled.div`
  padding: 5rem 7rem 0 7rem;
`
export const Title = styled.h1`
  font-weight: bold;
  font-size: 3.5rem;
  color: var(--dark-grey);
`
export const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
  > h2 {
    font-weight: bold;
    font-size: 3.5rem;
    color: var(--dark-grey);
  }
`
export const BorderContainer = styled.div`
  width: 11%;
  border-bottom: 10px solid var(--dark-grey);
  padding-bottom: 8px;
  margin-top: -25px;
`
export const Text3 = styled.h3`
  font-weight: normal;
  font-size: 1rem;
  color: var(--light-grey);
`
