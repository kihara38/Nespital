import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Image, Title, Sub } from "./element";
import { MdAddCircleOutline, MdDateRange, MdPersonAdd } from "react-icons/md";
import { FaHome, FaUserAlt, FaRegFileAlt } from "react-icons/fa";
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
        <Image>
          <img src={createObjectURL} alt="" />
          <input type="file" name="patient/img" onChange={uploadToClient} />
        </Image>
        <Title>
          <h3>hello</h3>
          <h1>Nelson</h1>
          <Sub>
            <Link to="email">email</Link>
            <Link to="logout">logout</Link>
          </Sub>
        </Title>
        <ul>
          <p>MAIN NAVIGATION </p>
          <li>
            <FaHome />
            Dashboard
            <MdAddCircleOutline />
          </li>
          <li>
            <MdDateRange />
            Appointments
            <MdAddCircleOutline />
          </li>
          <li>
            <MdPersonAdd />
            Doctors
            <MdAddCircleOutline />
            <div class="sub_appointment">
              <ul>
                <li>
                  <a href="Doctor schedule">All Doctors</a>
                </li>
                <li>
                  <a href="Book appointme">Doctor's profile</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <FaUserAlt />
            Patient
            <MdAddCircleOutline />
            <div class="sub_appointment">
              <ul>
                <li>
                  <a href="Doctor schedule">All Patients</a>
                </li>

                <li>
                  <a href="Book appointme">Patient Profile</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </Nav>
    </div>
  );
};

export default Admin;
