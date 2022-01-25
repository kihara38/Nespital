import axios from "axios";
import { useEffect, useState } from "react";
import getCurrentUser from "../../lib/auth";
import { Doctor1, Detail, List } from "./element";
const Patients = () => {
  const [profile, setProfile] = useState([]);
  const [Loading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("getting patients");
    // get doctors
    const user = getCurrentUser();
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios
      .get("http://localhost:5002/api/patient/all", config)
      .then((response) => {
        setProfile(response.data.data);
        setIsLoading(false);
        console.log("all patients", response.data);
      });
  }, []);

  //if (!Loading) {
  return (
    <Doctor1 id="Doctors approve">
      <Detail>
        <h3>Name</h3>
        <h3>patient No</h3>
        <h3>phone number</h3>
        <h3>emergency number</h3>
      </Detail>
      <List>
        {/* <h3>{profile.user.name}</h3>
        <h3>{profile.HPN}</h3>
        <h3>{profile.personaladdress.contact}</h3>
        <h3>{profile.emergencyperson.contact1}</h3> */}
      </List>
    </Doctor1>
  );
  // } else {
  //   return <div>Loading...</div>;
  // }
};

export default Patients;
