import { Link } from "react-router-dom";
import styled from "styled-components";

export const Div = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 94, 0.521);
  position: relative;
`;

export const Left = styled.div`
  width: 50%;
`;
export const Right = styled.div`
  width: 50%;
`;
export const LoginImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const SignupForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  /* padding: 0.5rem; */
  height: 100%;
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  color: #ddd;
  margin-bottom: 10px;
  text-transform: capitalize;
`;
export const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  height: 55px;
  background-color: #c2baba;
  margin: 10px 0;
  border-radius: 55px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0.4rem;
`;
export const I = styled.i`
  text-align: center;
  line-height: 55px;
  color: #0f0a0a;
  font-size: 1.1rem;
`;
export const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: rgb(3, 2, 2);
  &:placeholder {
    color: #aaa;
    font-weight: 500;
  }
`;
export const Bunt = styled(Link)`
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 49px;
  cursor: pointer;
  background-color: rgb(70, 67, 241);
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: cornflowerblue;
  }
  text-align: center;
`;

export const Clip = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background-color: purple;
  clip-path: circle(47.1% at 29% 4%);
`;
