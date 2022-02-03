import styled from "styled-components";
import img from "../../resourses/doctor.jpg";
import { Link } from "react-router-dom";

export const Div = styled.div`
  display: flex;
  flex: wrap;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  width: 100vw;
  padding-top: 5.5rem;
`;
export const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(47, 47, 237, 0.2);
  width: 100vw;
  height: 100%;
`;

export const ButtonWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: column;
  @media (max-width: 790px) {
    display: none;
  }
`;

export const Intro1 = styled.div`
  display: flex;
  flex-direction: column;
  flex: wrap;
  padding: 10px;

  h2 {
    font-size: 4rem;
    font-family: "Jacques Francois Shadow", cursive;
    @media (max-width: 790px) {
      font-size: 2rem;
    }
  }
  h1 {
    font-size: 6rem;
    font-family: "Philosopher", sans-serif;
    font-weight: 900;
    @media (max-width: 790px) {
      font-size: 3rem;
    }
  }
`;
export const Intro2 = styled.h1`
  font-family: "Jacques Francois Shadow", cursive;
  margin-top: -2rem;
  margin-left: 4rem;
  font-size: 60px;
  @media (max-width: 790px) {
    font-size: 30px;
  }
`;
export const Mainsection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background-image: linear-gradient(
    66.38deg,
    #1044fc 27.23%,
    #f7e3e3 94.16%,
    0.4
  );

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;
export const Section = styled.div`
  margin-top: 0 rem;
  margin: 20px;
  width: 20rem;
  height: 20rem;
  background: rgba(82, 118, 246, 0.4);
  border-radius: 32px;
  text-align: center;
`;
export const H1 = styled.h1`
  font-size: 40px;
  @media (max-width: 790px) {
    font-size: 20px;
  }
`;
export const P = styled.p`
  font-size: 20px;
  @media (max-width: 790px) {
    font-size: 20px;
  }
`;

export const LinkButton = styled(Link)`
  background-color: rgba(6, 6, 112);
  border-radius: 30px;
  color: white;
  text-decoration: none;
  margin: 8px;
  cursor: pointer;
  font-size: 1rem;
  text-decoration: none;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100px;
`;
export const LinkButton1 = styled(Link)`
  background-color: rgba(6, 6, 112);
  border-radius: 30px;
  color: white;
  text-decoration: none;
  margin: 8px;
  cursor: pointer;
  font-size: 0.7rem;
  text-decoration: none;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100px;
`;
