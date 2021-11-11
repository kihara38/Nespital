import { Link } from "react-router-dom";
import { Bun1, Intro1, Mainsection, Section, P, Div, Div1 } from "./element";

const Home = () => {
  return (
    <Div>
      <Div1>
        <Bun1>
          <button>
            <Link to="/login">
              <p>signup</p>{" "}
            </Link>
          </button>
          <button>
            <Link to="/register">
              <p>sign in</p>
            </Link>
          </button>
        </Bun1>

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
      </Div1>
    </Div>
  );
};

export default Home;
