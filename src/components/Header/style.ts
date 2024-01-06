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
  flex-direction: column;

  padding: 5rem 0 0 7.5rem;
`
export const Title = styled.h1`
  font-weight: bold;
  font-size: 3.5rem;
  color: black;
`
export const Subtitle = styled.div`
  > h2 {
    font-weight: bold;
    font-size: 3.5rem;
    color: black;
  }
`
export const BorderContainer = styled.div`
  width: 11%;
  border-bottom: 10px solid black;
  padding-bottom: 8px;
  margin-top: 14px;
`
