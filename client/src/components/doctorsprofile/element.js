import styled from "styled-components";

export const Main = styled.div`
  background-color: blueviolet;
  height: 100vh;
`;
export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
export const Avator = styled.img`
  background-color: black;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
`;
export const Name = styled.h1`
  font-size: 3rem;
`;
export const Specialization = styled.h3`
  font-size: 2rem;
`;
export const SocialText = styled.div`
  text-align: center;
  font-size: 1rem;
`;
export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
`;
export const SocialIcon = styled.div`
  margin-left: 1rem;
  border: 5px solid black;
  border-radius: 50%;
  height: 46px;
  width: 46px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &:hover {
    border-color: #0082e6;
    color: #0082e6;
    transition: 1s;
  }
`;
export const Div1 = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 2rem;
  border: 4px solid black;
  border-radius: 5px;
`;
export const Span = styled.span`
  display: flex;
  flex-direction: row;

  p {
    margin-left: 1rem;
    font-size: 1.5rem;
  }
`;
export const Button = styled.button`
  width: 6rem;
  height: 2rem;
  background-color: #12f112;
  border-radius: 10px;
  border: none;
`;
export const Button2 = styled.button`
  width: 6rem;
  height: 2rem;
  margin-left: 1rem;
  background-color: #f8f823;
  border-radius: 10px;
  border: none;
`;
export const Div2 = styled.button`
  display: flex;
  justify-content: center;
`;
