import axios from "axios";
import { useEffect, useState } from "react";
import {
  Main,
  Div,
  Div1,
  Div2,
  Avator,
  Name,
  Specialization,
  SocialText,
  SocialMedia,
  SocialIcon,
  Button,
  Button2,
  Span,
} from "./element";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import getCurrentUser from "../../lib/auth";
const DoctorProfile = () => {
  const [profile, setProfile] = useState([]);
  const [Loading, setIsLoading] = useState(true);

  useEffect(() => {
    const user = getCurrentUser();
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };
    console.log(user);
    axios.get(`/api/doctor/${user.id}`, config).then((response) => {
      setProfile(response.data.data);
      setIsLoading(false);
      console.log("doctor profile", response.data);
    });
  }, []);

  if (!Loading) {
    return (
      <Main>
        <Div>
          <Avator src="" alt="" />
          <Name>DR.{profile.user.name}</Name>
          <Specialization></Specialization>
        </Div>
        <SocialText className="social_text">
          Or sign in with social platform
        </SocialText>
        <SocialMedia className="social_media">
          <SocialIcon href="google" className="social_icon">
            <i>
              <FaGooglePlusG />
            </i>
          </SocialIcon>
          <SocialIcon href="facebook" className="social_icon">
            <i>
              <FaFacebookF />
            </i>
          </SocialIcon>
          <SocialIcon href="twitter" className="social_icon">
            <i>
              <FaTwitter />
            </i>
          </SocialIcon>
          <SocialIcon href="instagram" className="social_icon">
            <i>
              <FaInstagram />
            </i>
          </SocialIcon>
          <SocialIcon href="linkedin" className="social_icon">
            <i>
              <FaLinkedinIn />
            </i>
          </SocialIcon>
        </SocialMedia>
        <Div />
        <Div1>
          <h1>HPT456789</h1>
          <Span>
            <p>13/4/2021</p>
            <p>08:30</p>
          </Span>
          <div>
            <Button>approved</Button>
            <Button2>Declined</Button2>
          </div>
        </Div1>
        <Div2>
          <button> consultation</button>
        </Div2>
      </Main>
    );
  } else {
    return <div>Loading...</div>;
  }
};
export default DoctorProfile;
