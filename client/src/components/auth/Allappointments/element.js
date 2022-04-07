import styled from "styled-components";
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  align-self: center;
  width: 20rem;
  height: 22rem;
  background-color: none;
  border-radius: 5px;
  border: 5px solid black;
  border-color: blue;
  div {
    font-weight: bold;
    padding: 0.5rem;
  }

  h3 {
    font-size: 15px;
  }
`;
export const Doctor1 = styled.div`
  padding: 10px;
  max-height: 55vh;
  overflow: auto;
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;
