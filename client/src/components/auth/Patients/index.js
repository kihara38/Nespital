import axios from "axios";
import { useEffect, useState } from "react";
import getCurrentUser from "../../lib/auth";
import { Doctor1, Detail, List, Card } from "./element";
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

  if (!Loading) {
    return (
      <Doctor1 id="Doctors approve">
        <code>All Patients</code>
        <div>
          {Loading ? (
            <div>profile loading..</div>
          ) : (
            profile.map((profile, index) => (
              <Card>
                <h6>Name:{profile.user.name}</h6>
                <h6>patient No:{profile.HPN}</h6>
                <h6>phone number:{profile.personaladdress[0].contact}</h6>
                <h6>emergency number:{profile.emergencyperson[0].contact1}</h6>
                <button>Delete</button>
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

export default Patients;
