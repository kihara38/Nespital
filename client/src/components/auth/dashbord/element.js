import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: #9999f8;
  height: 100vh;
`;
export const Image = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  img {
    width: 6rem;
    height: 6rem;
    background-color: black;
    border-radius: 50%;
    margin-bottom: 1rem;
  }
`;
export const Title = styled.nav`
  padding: 1rem;
  a {
    margin-left: 1rem;
    text-decoration: none;
    font-size: 18px;
    font-weight: 700;
  }
`;
export const Sub = styled.nav``;
export const Cover = styled.div`
  margin-left: 1rem;
`;
