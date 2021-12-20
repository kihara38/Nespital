import styled from "styled-components";
import img from "../../../resourses/Doctor.svg";

export const MainContainer = styled.div`
  background-image: url(${img});
  background-color: rgba();
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100%;
`;
export const Strong = styled.p`
  font-size: 40px;
  margin: -0.5rem 0rem 0rem 2rem;
`;
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 20px;
`;
export const Container1 = styled.div`
  background-color: #beb9b9;
  width: 20%;
  opacity: 0.3;
  border-radius: 20px;
  border: 2px solid black;
  align-items: center;
`;
export const Avator = styled.img`
  background-color: #424141;
  border-radius: 50%;
  border: 5px solid black;
  width: 80px;
  height: 80px;
  margin: 10px 0px 20px 30px;
`;
export const SubContainer = styled.div`
  /* display: grid;
  grid-template-columns: repeat(2, 110px);
  grid-column-gap: 5px; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 15px;
`;
export const H11 = styled.h1`
  grid-column-start: 1;
  grid-column-end: -1;
`;
export const H1 = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  padding-left: 2rem;
  padding-right: 2rem;
`;
export const Container2 = styled.h3`
  background-color: #beb9b9;
  width: 78%;
  opacity: 0.3;
  border-radius: 20px;
  border: 2px solid black;
  align-items: center;
`;
export const Div = styled.div`
  margin-left: 2rem;
`;
export const H2 = styled.h1``;
export const H3 = styled.h1``;
export const H4 = styled.h1``;
export const H5 = styled.h1``;
export const H6 = styled.h1``;
export const Text = styled.h4`
  margin-left: 2rem;
`;
export const P = styled.p``;
export const Daze = styled.h4``;
