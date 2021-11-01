import { Link } from "react-router-dom";
import {Bun1,Bun2,Intro1,Intro2, Mainsection, Section,H1,P,Div } from "./element";

const Home = () => {
  return ( 
      <Div>
          
          <Bun1 >
              <Link to="/login">
              signup
              </Link>
          </Bun1>
          <Bun2>
              <Link to='/register'>
              sign in
              </Link>
              </Bun2>
          
          <Intro1 >onclick</Intro1>
          <Intro2 >HOSPITAL</Intro2>
          <Mainsection>
          <Section>
              <H1>Doctor</H1>
              <P>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</P>
          </Section>
          <Section>
              <H1>Patient</H1>
              <P>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</P>
          </Section>
          <Section>
              <H1>Appointment</H1>
              <P>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.</P>
          </Section>
          </Mainsection>
      </Div>
   );
}

export default Home;