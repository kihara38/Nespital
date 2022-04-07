import styled from "styled-components";
export const Doctor1 = styled.div`
  padding: 10px;
  max-height: 55vh;
  overflow: auto;
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #0fee0f7f;
`;
export const List = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 5px;
  align-self: center;
  width: 20rem;
  height: 22rem;
  background-color: #853c3c;
  border-radius: 5px;
  div {
  }
  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    background-color: wheat;
    border: none;
    margin: 10px;
    align-self: center;
  }
  h6 {
    font-size: 15px;
  }
  button {
    background-color: whitesmoke;
    border: none;
    width: 100px;
    height: 30px;
    border-radius: 3px;
    box-shadow: 2px 5px 2px 2px rgba(0, 0, 0, 0.2);
  }
`;
