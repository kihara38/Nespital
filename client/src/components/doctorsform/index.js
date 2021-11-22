import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import {
  Form,
  Div,
  Div1,
  Input,
  Div3,
  Div4,
  Div5,
  Div7,
  Div8,
  Div9,
  Diva,
  Fieldset,
  Legend,
  Select,
} from "./element";
const DoctorForm = () => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateOBjectURl] = useState(null);
  const [doctorsId, setdoctorsId] = useState("");
  const [gender, setGender] = useState("");
  const [specialization, setspecialization] = useState("");
  const [company, setcompany] = useState("");
  const [District, setDistrict] = useState("");
  const [Location, setLocation] = useState("");
  const [from, setfrom] = useState("");
  const [to, setto] = useState("");
  const [title, settitle] = useState("");
  const [fieldofstudy, setfieldofstudy] = useState("");
  const [school, setschool] = useState("");
  const [degree, setdegree] = useState("");
  const [Phone_number, setPhone_number] = useState("");
  const [county2, setcounty2] = useState("");
  const [Location2, setLocation2] = useState("");

  const uploadToClient = (e) => {
    if (e.target.files && e.target.files[0]) {
      const i = e.target.files[0];
      setImage(i);
      setCreateOBjectURl(URL.createObjectURL(i));
    }
  };
  const history = useHistory();

  const uploadToServer = async (e) => {
    e.preventDefault();
    const body = new FormData();
    body.append("doctor-image", image);
    body.append("doctorsId", doctorsId);
    body.append("gender", gender);
    body.append("Phone_number", Phone_number);
    body.append("company", company);
    body.append("District", District);
    body.append("Location", Location);
    body.append("from", from);
    body.append("to", to);
    body.append("title", title);
    body.append("fieldofstudy", fieldofstudy);
    body.append("school", school);
    body.append("degree", degree);
    body.append("specialization", specialization);
    body.append("county2", county2);
    body.append("Location2", Location2);

    try {
      await axios.post("http://localhost:5002/api/patient/", body);
      history.push("/patientprofile");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Div>
      <Form onSubmit={uploadToServer}>
        <img src={createObjectURL} alt="" />
        <input type="file" name="patient/img" onChange={uploadToClient} />
        <Div1>
          <Input
            type="text"
            name="doctorsId"
            value={doctorsId}
            onChange={(e) => setdoctorsId(e.target.value)}
            placeholder="doctorsId"
          />
          <Input
            type="text"
            name="specialization"
            value={specialization}
            onChange={(e) => setspecialization(e.target.value)}
            placeholder="specialization"
          />
          <br />
          <br />
          <Input
            type="radio"
            value="M"
            name="gender"
            checked={gender === "M"}
            onChange={(e) => setGender(e.target.value)}
          />
          {"Male"}
          <Input
            type="radio"
            name="gender"
            value={"F"}
            onChange={(e) => setGender(e.target.value)}
            checked={gender === "F"}
          />
          {"Female"}
        </Div1>

        <Fieldset>
          <Legend>experience</Legend>
          <Div3>
            <Div4>
              <Input
                type="text"
                name="company"
                value={title}
                onChange={(e) => settitle(e.target.value)}
                placeholder="title"
              />
              <Input
                type="text"
                name="company"
                value={company}
                onChange={(e) => setcompany(e.target.value)}
                placeholder="company"
              />
              <Div5>
                <Input
                  type="date"
                  name="from"
                  value={from}
                  onChange={(e) => setfrom(e.target.value)}
                />
                {from}
                <Input
                  type="date"
                  name="to"
                  value={to}
                  onChange={(e) => setto(e.target.value)}
                />
              </Div5>
              {to}
            </Div4>
            <Input
              type="text"
              name="District"
              placeholder="District"
              value={District}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <Input
              type="text"
              name="Location"
              placeholder="Location"
              value={Location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Div3>
        </Fieldset>
        <Fieldset>
          <Legend>education</Legend>
          <Diva>
            <Div7>
              <Input
                type="text"
                name="school"
                placeholder="school"
                value={school}
                onChange={(e) => setschool(e.target.value)}
              />
              <Input
                type="text"
                name="degree"
                placeholder="degree"
                value={degree}
                onChange={(e) => setdegree(e.target.value)}
              />
            </Div7>
            <Div8>
              <Input
                type="text"
                name="fieldofstudy"
                value={fieldofstudy}
                onChange={(e) => setfieldofstudy(e.target.value)}
                placeholder="fieldofstudy"
              />
            </Div8>
            <Div9>
              <Input
                type="date"
                name="from"
                value={from}
                onChange={(e) => setfrom(e.target.value)}
                placeholder="from"
              />
              <Input
                type="date"
                name="to"
                value={to}
                onChange={(e) => setto(e.target.value)}
                placeholder="to"
              />
            </Div9>
          </Diva>
        </Fieldset>
        <button type="submit">Submit</button>
      </Form>
    </Div>
  );
};

export default DoctorForm;
