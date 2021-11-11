import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 760px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const SocialText = styled.p`
  padding: 1.5rem 0;
  font-size: 1rem;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
`;
export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`;
export const SocialIcon = styled.a`
  height: 46px;
  width: 46px;
  border: 5px solid #080808;
  margin-top: -1.5rem;
  margin-left: 1rem;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  color: #070707;
  font-size: 1.1rem;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
    color: #0082e6;
    border-color: #0082e6;
  }
`;
export const Foot = styled.footer`
  padding: 2rem 0;
  margin-top: -2rem;
  font-size: 1rem;
  font-family: "Times New Roman", Times, serif;
  text-align: center;
`;
