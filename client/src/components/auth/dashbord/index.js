import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  Div,
  Image,
  Title,
  Sub,
  Cover,
  Cover2,
  Maincover,
} from "./element";
import { MdAddCircleOutline, MdDateRange, MdPersonAdd } from "react-icons/md";
import { FaHome, FaUserAlt } from "react-icons/fa";
import DoctorAdmin from "../doctors admin";
import DoctorApprove from "../doctorsApprove";
const Admin = () => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateOBjectURl] = useState(null);
  const uploadToClient = (e) => {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setImage(i);
      setCreateOBjectURl(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("doctor-image", image);

    try {
      await axios.post("http://localhost:5002/api/", body);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Nav>
        <Div>
          <Image>
            <img src={createObjectURL} alt="" />
            <input type="file" name="patient/img" onChange={uploadToClient} />
          </Image>
          <Title>
            <h3>hello</h3>
            <h1>Nelson</h1>
          </Title>
        </Div>
        <Sub>
          <Link to="email">email</Link>
        </Sub>
        <Maincover>
          <Cover>
            <p>MAIN NAVIGATION </p>
            <li>
              <FaHome style={{ fontSize: "25px" }} />
              Dashboard
            </li>
            <li>
              <MdDateRange style={{ fontSize: "25px" }} />
              Appointments
            </li>
            <li>
              <a href="/AllAppointments">Appointments</a>
            </li>
            <li>
              <MdPersonAdd style={{ fontSize: "25px" }} />
              Doctors
              <div class="sub_appointment">
                <ul>
                  <li>
                    <a href="/DoctorAdmin">All Doctors</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <FaUserAlt style={{ fontSize: "25px" }} />
              Patient
              <div class="sub_appointment">
                <ul>
                  <li>
                    <a href="/patients">All Patients</a>
                  </li>
                </ul>
              </div>
            </li>
          </Cover>
          <Cover2>
            <DoctorAdmin />
          </Cover2>
        </Maincover>
      </Nav>
    </div>
  );
};

export default Admin;
