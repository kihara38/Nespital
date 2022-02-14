import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
  Daze,
  FlexContainer,
  Div,
  Div1,
  P,
  Text,
  Alink,
} from "./element";

const PatientProfile = () => {
  const [profile, setProfile] = useState([]);
  const [Consult, setConsult] = useState([]);
  const [Loading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const history = useHistory();

  const getAge = (dob) => {
    const time = new Date() - new Date(dob);
    const age = Math.floor(time / (60 * 60 * 24 * 365 * 1000));
    return age;
  };
  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setUser(user);
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      console.log(user);
      axios.get(`/api/patient/${user.id}`, config).then((response) => {
        setProfile(response.data.data);
        setIsLoading(false);
        console.log("patient profile", response.data);
      });
      axios.get(`/api/doctor/consultation`, config).then((response) => {
        setConsult(response.data.data);
        setIsLoading(false);
      });
    } else {
      history.push("/login");
    }
  }, []);
  if (!Loading) {
    return (
      <MainContainer>
        <Div1>
          <Strong>{profile.user.name}</Strong>
          <Avator src={profile.avatar} alt="user" />
        </Div1>
        <FlexContainer>
          <Container1>
            <SubContainer>
              <H11>
                H.P.N:<h6>{profile.HPN}</h6>
              </H11>
              <H1>
                <h3>Sex:</h3> {profile.BIO[0].Sex}
              </H1>
              <H1>
                <h3>Height:</h3>
                {profile.BIO[0].Height}
              </H1>
              <H1>
                <h3>Weight:</h3>
                {profile.BIO[0].Weight}
              </H1>
              <H1>
                <h3>Age:</h3>
                {profile && getAge(profile.BIO[0].DoB)}
              </H1>
            </SubContainer>
            <SubContainer>
              <H11>Contact</H11>
              <H1>
                <h3>county:</h3>
                <small>{profile.personaladdress[0].county}</small>
              </H1>
              <H1>
                <h3>district:</h3>
                <p>{profile.personaladdress[0].district}</p>
              </H1>
              <H1>
                <h3>location:</h3>
                <p>{profile.personaladdress[0].location}</p>
              </H1>
              <H1>
                <h3>contact:</h3>
                <p>{profile.personaladdress[0].contact}</p>
              </H1>
            </SubContainer>
            <SubContainer>
              <H11>Emergency</H11>
              <H1>
                <h3>name:</h3>
                <p>{profile.emergencyperson[0].name}</p>{" "}
              </H1>
              <H1>
                <h3>relationship:</h3>
                <p>{profile.emergencyperson[0].relationship}</p>{" "}
              </H1>
              <H1>
                <h3>location:</h3>
                <p>{profile.emergencyperson[0].location1}</p>
              </H1>
              <H1>
                <h3>contact:</h3>
                <p>{profile.emergencyperson[0].contact1}</p>
              </H1>
            </SubContainer>
          </Container1>
          <Container2>
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
              <Text>{Consult[0].disease}</Text>
            </Div>
            <Div>
              <H5>consotation</H5>
              <P>{Consult[0].description}</P>
            </Div>
            <H6>
              <Daze />
            </H6>
          </Container2>
        </FlexContainer>
        <Alink to="/Booking">BOOK CONSULTATION</Alink>
      </MainContainer>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default PatientProfile;
