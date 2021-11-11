import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  background-color: rgba(138, 43, 226, 0.3);
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 0.2rem;
  position: fixed;
  height: 5rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
export const Logo = styled(Link)`
  padding: 1rem 0;
  color: white;
  text-decoration: none;
  h1 {
    font-family: "Philosopher", sans-serif;
    font-weight: 800;
  }
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 790px) {
    overflow: hidden;
    flex-direction: column;
    width: 30%;
    margin-top: 1.2rem;
    background-color: rgba(91, 3, 192, 0.3);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
  }
`;
export const link = styled(Link)`
  text-decoration: none;
`;
export const Alink = styled(Link)`
  padding: 1rem 2rem;
  cursor: pointer;
  text-decoration: none;
  color: black;
  font-weight: 700;

  &:hover {
    background-color: purple;
    border-top-right-radius: 30px;
    border-bottom-left-radius: 30px;
    transition: ease-in-out 0.5s;
  }
`;
export const MenuIcon = styled(FaBars)`
  display: none;
  cursor: pointer;
  height: 4rem;
  width: 25px;
  margin-left: 23rem;

  @media (max-width: 790px) {
    display: flex;
  }
`;
