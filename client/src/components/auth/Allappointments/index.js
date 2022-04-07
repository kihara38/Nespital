import axios from "axios";
import { useEffect, useState } from "react";
import getCurrentUser from "../../lib/auth";
import { Doctor1, Card } from "./element";
const Allappointments = () => {
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
      .get("http://localhost:5002/api/appointment/all", config)
      .then((response) => {
        setProfile(response.data.data);
        setIsLoading(false);
        console.log("all patients", response.data);
      });
  }, []);

  if (!Loading) {
    return (
      <Doctor1 id="Doctors approve">
        <code>All Appointments</code>
        <div>
          {Loading ? (
            <div>profile loading..</div>
          ) : (
            profile.map((profile, index) => (
              <Card>
                <div>
                  patientHPN:
                  <h3>{profile.patientHPN}</h3>
                </div>
                <div>
                  Doctor ID:
                  <h3>{profile.doctor}</h3>
                </div>
                <div>
                  Date:
                  <h3>{profile.date}</h3>
                </div>
                <div>
                  Time:
                  <h3>{profile.time}</h3>
                </div>
                <div>
                  Status:
                  <h3>{profile.approval_status}</h3>
                </div>
              </Card>
            ))
          )}
        </div>
      </Doctor1>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default Allappointments;
