import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: blue;
  height: 100vh;
  width: 100vw;
  padding-top: 5rem;
  overflow: hidden;
  text-transform: upperCase;
`;
export const Div1 = styled.div`
  display: flex;
  margin-top: 2rem;
  h3 {
    font-size: 30px;
    text-transform: upperCase;
  }

  input {
    background-color: #47c1f1;
    border: none;
    border-radius: 5px;
    margin-left: 1rem;
    text-align: center;
  }
`;
export const Div2 = styled.div`
  display: flex;
  padding: 0.5rem;
  font-size: 30px;
  input {
    border: none;
    margin-left: 1rem;
    height: 3rem;
    text-align: center;
    border-radius: 10rem;
    color: red;
    font-weight: bold;
    text-transform: upperCase;
  }
`;
export const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  h4 {
    margin: 10px;
    font-size: 30px;
  }
  textarea {
    width: 40rem;
    height: 10rem;
    padding: 10px;
    border-radius: 10px;
    font-size: 15px;
  }
`;
export const Div4 = styled.div`
  button {
    width: 6rem;
    height: 3rem;
    font-size: 25px;
    font-weight: bold;
    border: none;
    border-radius: 20px;
    background-color: #08f308;
  }
`;
export const Span = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;

  color: gray;
  font-size: 15px;
  input {
    border: none;
    margin-left: 1rem;
    height: 3rem;
    text-align: center;
    border-radius: 10rem;
    color: gray;
  }
`;
