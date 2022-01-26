import { useHistory } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import getCurrentUser from "../../lib/auth";
import { Form, Div1, Span, Div2, Div3, Div4 } from "./element";
const Consultation = () => {
  const [disease, setdisease] = useState("");
  const [description, setdescription] = useState("");
  const [patient, setpatient] = useState(null);
  const [allPatients, setAllPatients] = useState([]);
  const [HPN, setHPN] = useState("");

  const history = useHistory();

  const user = getCurrentUser();
  const body = new FormData();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      await axios.post(
        "http://localhost:5002/api/doctor/consultation",
        {
          disease,
          description,
          patient: patient._id,
        },
        config
      );
      history.push("/DoctorProfile");
    } catch (error) {
      console.log(error);
    }
  };

  const handleHPNchange = (event) => {
    setHPN(event.target.value);
    const patient = allPatients.find((patient) => {
      return patient.HPN == HPN;
    });
    console.log(patient);
    setpatient(patient);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5002/api/patient/all")
      .then((response) => setAllPatients(response.data.data));
  }, []);

  const getAge = (dob) => {
    const time = new Date() - new Date(dob);
    const age = Math.floor(time / (60 * 60 * 24 * 365 * 1000));
    return age;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h1>consultation</h1>
      <Div1>
        <h3>Patient No:</h3>
        <input type="text" placeholder="DFGH45678" onChange={handleHPNchange} />
      </Div1>
      <Span>
        <input
          type="text"
          placeholder="Patient:name"
          value={patient && patient.user.name}
        />
        <input
          type="number"
          placeholder="Age"
          value={patient && getAge(patient.BIO[0].DoB)}
        />
      </Span>
      <Div2>
        <h3>
          Disease:{" "}
          <input
            type="text"
            placeholder="Maralia"
            value={disease}
            onChange={(e) => setdisease(e.target.value)}
          />
        </h3>
        <Div3>
          <h4>Consultation</h4>
          <input
            type="text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </Div3>
      </Div2>
      <Div4>
        <button type="submit">submit</button>
      </Div4>
    </Form>
  );
};

export default Consultation;
