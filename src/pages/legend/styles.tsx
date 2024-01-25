import styled from 'styled-components'

export const Sectionlegend = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;

  border-radius: 8px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
  img {
    width: 50%;
    height: 45%;
  }
`
export const LegendContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  text-align: center;

  & > p {
    grid-column: 1 / -1;
    font-size: 1.2rem;
    font-weight: 900;
    line-height: 1.5;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    p {
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.5;
    }
  }
`
export const LegendContainer3x1 = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  text-align: center;

  & > p {
    grid-column: 1 / -1;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.5;
  }

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 1rem;
      font-weight: normal;
      line-height: 1.5;
    }
  }
`
