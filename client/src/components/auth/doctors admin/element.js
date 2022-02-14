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
  h3 {
    font-size: 30px;
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
export const Doctor = styled.div`
  padding: 10px;
  max-height: 55vh;
  overflow: auto;
  div {
    display: flex;
    flex-wrap: wrap;
  }
`;
