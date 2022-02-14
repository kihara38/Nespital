import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #9999f8;
  height: 100vh;
  position: relative;
  padding-top: 5rem;
  width: 100vw;
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
  width: 75vw;
  margin-left: 0.5rem;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  position: relative;
`;

export const Cover = styled.div`
  margin-left: 0.8rem;
  background-color: blue;
  width: 20vw;
  height: 65vh;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  list-style: none;
  @media (max-width: 790px) {
    width: 30vw;
  }

  li {
    padding: 0.3rem;
    margin-left: 1rem;
    font-size: 15px;
    list-style: none;
    font-weight: bold;
  }
  a {
    text-decoration: none;
    color: gray;
    font-size: 20px;
    padding: 1rem;
  }

  p {
    font-weight: bold;
    padding: 1rem;
  }
`;
