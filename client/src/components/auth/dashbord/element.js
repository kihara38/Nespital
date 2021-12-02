import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #9999f8;
  height: 100vh;
  position: relative;
`;
export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem 0.5rem 2rem;
`;
export const Image = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 6rem;
    height: 6rem;
    background-color: black;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
`;
export const Title = styled.nav`
  margin-left: 1rem;

  a {
    margin-left: 1rem;
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
  }
`;
export const Sub = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 3rem 0.5rem 3rem;
  margin-left: 1rem;
  font-size: 18px;
  font-weight: 700;
  a {
    text-decoration: none;
  }
`;
export const Maincover = styled.div`
  display: flex;
  flex-direction: row;
`;
export const Cover2 = styled.div`
  background-color: greenyellow;
  width: 80%;
  margin-left: 0.5rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;
`;
export const Doctor = styled.div`
  padding: 10px;
  div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    grid-auto-flow: row;
  }
`;
export const Card = styled.div`
  grid-auto-flow: column;
  align-self: center;
  width: 13rem;
  height: 18rem;
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
export const Doctor1 = styled.div``;
export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;
export const Cover = styled.div`
  margin-left: 0.8rem;
  background-color: blue;
  width: 15%;
  height: 65vh;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  li {
    padding: 0.3rem;
    margin-left: 1rem;
  }
`;
