import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Nav = styled.div`
  background-color: rgba(138, 43, 226, 0.3);
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  overflow: hidden;
  padding: 3px;
  height: 5rem;
  z-index: 5;

  div {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
  }
`;
export const Logo = styled(Link)`
  padding: 0.3rem 0rem;
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
  button {
    background: blue;
    padding: 5px;
    width: 6rem;
    border-radius: 5px;
  }
  padding-right: 1rem;
  @media (max-width: 790px) {
    flex-direction: column;
    position: fixed;
    top: 5.4rem;
    background-color: rgba(91, 3, 192, 0.3);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    font-size: 10px;
    left: ${({ open }) => (open ? "-3000px" : "0")};
    transition: all 1s ease-in-out;
  }
`;
export const link = styled(Link)`
  text-decoration: none;
`;
export const Alink = styled(Link)`
  padding: 1rem 5rem;
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

  @media (max-width: 790px) {
    overflow: hidden;
    display: flex;
    left: 20px;
    margin-left: 7rem;
    font-size: 30px;
    cursor: pointer;
  }
`;
