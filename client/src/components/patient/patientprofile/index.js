import axios from "axios";
import { useEffect, useState } from "react";
import getCurrentUser from "../../lib/auth";
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
  const [profile, setProfile] = useState([]);
  const [Loading, setIsLoading] = useState(true);
  useEffect(() => {
    const user = getCurrentUser();
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    console.log(user);
    axios.get(`/api/patient/${user.id}`, config).then((response) => {
      setProfile(response.data.data);
      setIsLoading(false);
      console.log("patient profile", response.data);
    });
  }, []);
  if (!Loading) {
    return (
      <MainContainer>
        <Strong>{profile.user.name}</Strong>
        <Avator src={profile.avatar} alt="user" />
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
                labore asperiores magni commodi, voluptates, esse atque
                assumenda. Officia vero saepe maxime nihil.
              </P>
            </Div>
            <H6>
              <Date />
            </H6>
          </Container2>
        </FlexContainer>
      </MainContainer>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default PatientProfile;
