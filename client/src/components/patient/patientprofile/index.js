import {
  MainContainer,
  Strong,
  Container1,
  Container2,
  Avator,
  SubContainer,
  H1,
  H11,
  H2,
  H3,
  H4,
  H5,
  H6,
  Date,
  FlexContainer,
  Div,
  P,
  Text,
} from "./element";
const PatientProfile = () => {
  return (
    <MainContainer>
      <Strong>user.body</Strong>
      <Avator
        src="http://localhost:5002/uploads/1637403380529O5sDld31j.png"
        alt="user"
      />
      <FlexContainer>
        <Container1>
          <SubContainer>
            <H11>H.P.N</H11>
            <H1>Sex</H1>
            <H1>Height</H1>
            <H1>Weight</H1>
            <H1>Age</H1>
          </SubContainer>
          <SubContainer>
            <H11>Contact</H11>
            <H1>county</H1>
            <H1>district</H1>
            <H1>location</H1>
            <H1>contact</H1>
          </SubContainer>
          <SubContainer>
            <H11>Emergency</H11>
            <H1>relationship</H1>
            <H1>location</H1>
            <H1>contact</H1>
          </SubContainer>
        </Container1>
        <Container2>
          <Div>
            <H2>Hospital</H2>
            <Text>ST.MARY'S</Text>
          </Div>
          <Div>
            <H3>Doctor</H3>
            <Text>DR.KIHARA NELSON</Text>
          </Div>
          <Div>
            <H4>Doctors Specialization</H4>
            <Text>Dentist</Text>
          </Div>
          <Div>
            <H4>Disease</H4>
            <Text>MARALIA</Text>
          </Div>
          <Div>
            <H5>consotation</H5>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              accusamus magnam adipisci ab doloremque quos iure architecto
              labore asperiores magni commodi, voluptates, esse atque assumenda.
              Officia vero saepe maxime nihil.
            </P>
          </Div>
          <H6>
            <Date />
          </H6>
        </Container2>
      </FlexContainer>
    </MainContainer>
  );
};

export default PatientProfile;
