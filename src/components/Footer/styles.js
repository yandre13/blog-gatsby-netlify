import styled from "styled-components"

export const ContainerFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 20px 0 0 0;
  & a:first-of-type {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 520px) {
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
    & a:first-of-type {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 768px) {
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
  }
`
