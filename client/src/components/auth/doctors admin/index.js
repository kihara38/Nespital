import axios from "axios";
import { useEffect, useState } from "react";
import getCurrentUser from "../../lib/auth";
import { Doctor, Card } from "./element";
const DoctorAdmin = () => {
  const [profile, setProfile] = useState();
  const [Loading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("getting doctors");
    // get doctors
    const user = getCurrentUser();
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios
      .get("http://localhost:5002/api/doctor/all", config)
      .then((response) => {
        setProfile(response.data.data);
        setIsLoading(false);
        console.log("doctor appointments", response.data);
      });
  }, []);

  if (!Loading) {
    return (
      <Doctor id="All Doctors">
        <code>All Doctors</code>
        <div>
          <Card>
            {profile && <img src={profile[1].user.avator} />}
            {profile && <h1>DR:{profile[1].user.name} </h1>}
            {profile && <h3>{profile[1].specialization}</h3>}
            <button>view profile</button>
          </Card>
        </div>
      </Doctor>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default DoctorAdmin;
