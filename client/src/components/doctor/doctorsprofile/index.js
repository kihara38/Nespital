import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
  Const,
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
  const [appointmentsLoading, setAppointmentsLoading] = useState(true);
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      setUser(user);
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      console.log(user);
      axios.get(`/api/doctor/${user.id}`, config).then((response) => {
        setProfile(response.data.data);
        setIsLoading(false);
        console.log("doctor profile", response.data);
      });

      axios
        .get(`/api/doctor/appointments/${user.id}`, config)
        .then((response) => {
          setAppointments(response.data.data);
          setAppointmentsLoading(false);
          console.log("doctor appointments", response.data);
        });
    } else {
      history.push("/login");
    }
  }, []);

  if (!Loading && user) {
    return (
      <Main>
        <Div>
          <Avator src={profile.avatar} alt="" />
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
        {appointmentsLoading ? (
          <div>Appointments loading...</div>
        ) : (
          appointments.map((appointment) => (
            <AppointmentCard appointment={appointment} key={appointment._id} />
          ))
        )}
        <Const to="/Consultation">consultation</Const>
      </Main>
    );
  } else {
    return <div>Loading...</div>;
  }
};
export default DoctorProfile;

const AppointmentCard = ({ appointment }) => {
  const [status, setStatus] = useState(appointment.approval_status);

  const approve = () => {
    axios
      .post("/api/appointment/update-status", {
        appointmentId: appointment._id,
        status: "Approved",
      })
      .then((response) => {
        setStatus(response.data.data.approval_status);
        console.log("appointment status response", response.data);
      });
  };
  const decline = () => {
    axios
      .post("/api/appointment/update-status", {
        appointmentId: appointment._id,
        status: "Declined",
      })
      .then((response) => {
        setStatus(response.data.data.approval_status);
        console.log("appointment status response", response.data);
      });
  };

  const updateStatus = (appointmentId, status) => {};
  return (
    <Div1>
      <h1>{appointment.patientHPN}</h1>
      <Span>
        <p>{appointment.date}</p>
        <p>{appointment.time}</p>
      </Span>
      <p>{status}</p>
      <div>
        <Button
          onClick={approve}
          disabled={status !== "Pending"}
          style={{ opacity: status === "Approved" ? 0.6 : 1 }}
        >
          Approve
        </Button>
        {status !== "Approved" && (
          <Button2
            onClick={decline}
            disabled={status !== "Pending"}
            style={{ opacity: status !== "Pending" ? 0.6 : 1 }}
          >
            Declined
          </Button2>
        )}
      </div>
    </Div1>
  );
};
