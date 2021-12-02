import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import getCurrentUser from "../../lib/auth";
import { Div, Div1, Span, Div2, Div3, Div4 } from "./element";
const Consultation = () => {
  const [disease, setdisease] = useState("");
  const [consultation, setconsultation] = useState("");

  const history = useHistory();

  const user = getCurrentUser();
  const body = new FormData();
  body.append("userId", user.id);

  const submit = async (e) => {
    e.preventDefault();
    body.append("disease", disease);
    body.append("consultation", consultation);

    try {
      await axios.post("http://localhost:5002/api/doctor/consultation/", {
        disease,
        consultation,
      });
      history.push("/DoctorProfile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Div onSubmit={submit}>
      <h1>consultation</h1>
      <Div1>
        <h3>Patient No:</h3>
        <input type="text" placeholder="DFGH45678" />
      </Div1>
      <Span>
        <input type="text" placeholder="Patient:name" />
        <input type="number" placeholder="Age" />
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
            value={consultation}
            onChange={(e) => setconsultation(e.target.value)}
          />
        </Div3>
      </Div2>
      <Div4>
        <input type="submit" />
      </Div4>
    </Div>
  );
};

export default Consultation;
