import styled from 'styled-components'

export const SectionContainer = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  border: 2.5px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
  gap: 1rem;
  p {
    color: var(--light-grey);
    font-size: 2rem;
    font-weight: 300;
    line-height: 1.5;
    margin: 0rem 1rem;
  }
  input {
    width: 1.2rem;
    height: 1.2rem;
  }
`
export const Heroicon = styled.div`
  display: flex;
  align-items: center;
  height: 4rem;
  gap: 0.5rem;
  padding: 0.5rem;

  img {
    width: 2rem;
    height: 2rem;
  }
  h2 {
    line-height: 1.5;
    font-weight: normal;
    font-size: 2rem;
    color: var(--light-grey);
  }
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 98%;
  > label {
    align-items: center;
    display: flex;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  span {
    line-height: 1.5;
    font-weight: normal;
    font-size: 1.5rem;
    color: var(--light-grey);
  }
`

export const LabelRadio = styled.label`
  border-bottom: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > span {
      line-height: 1.5;
      font-weight: normal;
      font-size: 1.6rem;
      color: var(--light-grey);
    }
  }
`
export const LabelCheckbox = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > span {
    line-height: 2;
    font-weight: normal;
    font-size: 1.4rem;
    color: var(--dark-grey);
  }
  div {
    display: flex;
    align-items: center;
    gap: 1rem;

    > span {
      line-height: 2;
      font-weight: normal;
      font-size: 1.4rem;
      color: var(--dark-grey);
    }
  }
`

export const SelectButton = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    button {
      margin-top: 1rem;
      padding: 1rem 2.5rem;
      width: 20rem;
      border-radius: 8px;
      line-height: 2;
      font-weight: 900;
      font-size: 1rem;
      color: var(--dark-grey);
      cursor: pointer;

      &:hover {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.2);
      }
    }
  }
`
export const Button1 = styled.button`
  background: var(--yellow);
`
export const Button2 = styled.button`
  background: white;
  border: 2px solid var(--light-grey);
`
