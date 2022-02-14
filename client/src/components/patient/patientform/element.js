import styled from "styled-components";
import detail from "../../../resourses/detail.svg";
export const Div = styled.div`
  justify-content: space-between;
  background-image: url(${detail});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: blue;
  min-height: 100vh;
  width: 100vw;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;
  width: 100vw;
  button {
    font-size: 30px;
    font-weight: bold;
    text-transform: upperCase;
    background: #7676f5;
    border-radius: 10px;
    margin: 1rem;
  }
  img {
    background-color: black;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    border: none;
    margin: 2rem 0 1rem 0;
  }
  input {
    font-size: 15px;
    text-align: center;
    padding: 10px;
    border-radius: 5px;
    width: 20rem;
    justify-content: space-evenly;
    @media (max-width: 790px) {
      width: 10rem;
    }
  }
`;
export const Div1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
`;

export const Div3 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
`;
export const Div4 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
`;
export const Div5 = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
`;
export const Div6 = styled.form`
  align-self: center;
  text-align: center;
  margin-bottom: 1rem;
`;
export const Div7 = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
`;
export const Div8 = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
`;
export const Div9 = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 1rem;
`;

export const Fieldset = styled.fieldset`
  align-content: center;
  width: 80vw;
  border-radius: 10px;
  border: 3px solid #fff;
`;
export const Legend = styled.legend`
  font-size: 30px;
  text-transform: capitalize;
  font-weight: bold;
`;
export const Select = styled.select`
  font-size: 15px;
  text-align: center;
  padding: 10px;
  border-radius: 5px;
  width: 20rem;
  justify-content: space-evenly;
  @media (max-width: 790px) {
    width: 10rem;
  }
`;
export const Input = styled.input``;
