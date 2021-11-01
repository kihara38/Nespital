const DoctorProfile = () => {
    return ( 
        <Main>
            <Div>
            <Avator src="" alt="" />
            <Name>Dr. luise lombo</Name>
            <Specialization>Dentist</Specialization>
            </Div>
            <SocialText className="social_text">Or sign in with social platform</SocialText><SocialMedia className="social_media">
            <SocialIcon href="google" className="social_icon">
                <i><FaGooglePlusG /></i>
            </SocialIcon>
            <SocialIcon href="facebook" className="social_icon">
                <i><FaFacebookF /></i>
            </SocialIcon>
            <SocialIcon href="twitter" className="social_icon">
                <i><FaTwitter /></i>
            </SocialIcon>
            <SocialIcon href="instagram" className="social_icon">
                <i><FaInstagram /></i>
            </SocialIcon>
            <SocialIcon href="linkedin" className="social_icon">
                <i><FaLinkedinIn /></i>
            </SocialIcon>
        </SocialMedia>
        <Div/>
        

            
        </Main>
     );
}
 
export default DoctorProfile;