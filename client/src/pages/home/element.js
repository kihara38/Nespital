import styled from "styled-components";
import img from "../../resourses/doctor.jpg";
export const Div = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
export const Div1 = styled.div`
  background-color: rgba(47, 47, 237, 0.2);
`;
export const Bun1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 6rem 30rem;
  position: absolute();

  button {
    background-color: rgba(6, 6, 112);
    width: 8rem;
    height: 4rem;
    border-radius: 30px;
    color: white;
    text-decoration: none;
    margin-top: 1rem;

    p {
      font-size: 2rem;
      text-decoration: none;
      color: white;
      text-align: center;
    }
  }
`;

export const Intro1 = styled.div`
  display: flex;
  flex-direction: column;
  margin: -10rem 0 0 2rem;

  h2 {
    font-size: 4rem;
    font-family: "Jacques Francois Shadow", cursive;
  }
  h1 {
    font-size: 6rem;
    font-family: "Philosopher", sans-serif;
    font-weight: 900;
  }
`;
export const Intro2 = styled.h1`
  font-family: "Jacques Francois Shadow", cursive;
  margin-top: -2rem;
  margin-left: 4rem;
  font-size: 60px;
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
  width: 450px;
  height: 300px;
  background: rgba(82, 118, 246, 0.4);
  border-radius: 32px;
  text-align: center;
`;
export const H1 = styled.h1`
  font-size: 40px;
`;
export const P = styled.p`
  font-size: 20px;
`;
