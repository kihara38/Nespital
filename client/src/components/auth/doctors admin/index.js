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
          {Loading ? (
            <div>profile loading..</div>
          ) : (
            profile.map((profile, index) => (
              <Card>
                <img src={profile.avator} />
                {/* <h1>DR:{profile.user.name} </h1> */}
                <h3>{profile.specialization}</h3>
                <button>view profile</button>
              </Card>
            ))
          )}
        </div>
      </Doctor>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default DoctorAdmin;
