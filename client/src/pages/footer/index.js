import {
  Container,
  SocialMedia,
  SocialText,
  SocialIcon,
  Foot,
} from "./element";
import {
  FaGooglePlusG,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
const Footer = () => {
  return (
    <Container>
      <SocialText className="social_text">
        you can follow us on this social platform
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
      <Foot>copyright &copy; {new Date().getFullYear()} Kihara Nelson</Foot>
    </Container>
  );
};

export default Footer;
