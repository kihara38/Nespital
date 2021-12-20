import Footer from "../footer";
import {
  Intro1,
  Mainsection,
  Section,
  P,
  Div,
  Div1,
  ButtonWrapper,
  LinkButton,
  LinkButton1,
} from "./element";

const Home = () => {
  return (
    <Div>
      <Div1>
        <ButtonWrapper>
          <LinkButton to="/login">log in</LinkButton>
          <LinkButton1 to="/Registerdoctor">sign up as doctor</LinkButton1>
          <LinkButton1 to="/register">sign up as patient</LinkButton1>
        </ButtonWrapper>

        <Intro1>
          <h2>onclick</h2>
          <h1>HOSPITAL</h1>
        </Intro1>

        <Mainsection>
          <Section>
            <h1>Doctor</h1>
            <P>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </P>
          </Section>
          <Section>
            <h1>Patient</h1>
            <P>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </P>
          </Section>
          <Section>
            <h2>Appointment</h2>
            <P>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </P>
          </Section>
        </Mainsection>
        <Footer />
      </Div1>
    </Div>
  );
};

export default Home;
