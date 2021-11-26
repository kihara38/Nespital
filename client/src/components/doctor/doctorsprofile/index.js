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
  const [name, setName] = useState([]);
  const [specialization, setspecialization] = useState([]);

  useEffect(() => {
    const user = getCurrentUser();
    setName(user.name);
    setspecialization(user.specialization);
  });
  return (
    <Main>
      <Div>
        <input type="file" name="doctor-image" />
        <Avator src="" alt="" />
        <Name>DR.{name}</Name>
        <Specialization>{specialization}</Specialization>
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
};

export default DoctorProfile;
