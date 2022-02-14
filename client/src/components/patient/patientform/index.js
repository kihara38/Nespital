import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import getCurrentUser from "../../lib/auth";

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
  Fieldset,
  Legend,
  Select,
} from "./element";
const PatientForm = () => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateOBjectURl] = useState(null);
  const [DoB, setDOB] = useState("");
  const [gender, setGender] = useState("");
  const [contact, setcontact] = useState("");
  const [county, setCounty] = useState("");
  const [district, setDistrict] = useState("");
  const [location, setLocation] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [name, setname] = useState("");
  const [relationship, setrelationship] = useState("");
  const [contact1, setcontact1] = useState("");
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
    const user = getCurrentUser();
    const body = new FormData();
    body.append("user", user.id);
    body.append("patient-image", image);
    body.append("DoB", DoB);
    body.append("Sex", gender);
    body.append("contact", contact);
    body.append("county", county);
    body.append("district", district);
    body.append("location", location);
    body.append("Height", height);
    body.append("Weight", weight);
    body.append("name", name);
    body.append("relationship", relationship);
    body.append("contact1", contact1);
    body.append("county1", county2);
    body.append("location1", Location2);

    try {
      const config = {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      };
      const response = await axios.post(
        "http://localhost:5002/api/patient/",
        body,
        config
      );

      if (response.data.success) {
        history.push("/PatientProfile");
      }
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
          {"DOB"}
          <Input
            type="date"
            name="Date of birth"
            value={DoB}
            onChange={(e) => setDOB(e.target.value)}
          />
        </Div1>
        <Div1>
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
          <Legend>personaldetails</Legend>

          <Div3>
            <Input
              type="number"
              name="contact"
              value={contact}
              onChange={(e) => setcontact(e.target.value)}
              placeholder="contact"
            />

            <Select
              name="county"
              id="county"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
            >
              <option defaultChecked>choose your county</option>
              <option>Mombasa</option>
              <option>Kwale</option>
              <option>Nairobi</option>
              <option>Kiambu</option>
              <option>Muranga</option>
              <option>Mombasa</option>
              <option>Machakos</option>
              <option>Mombasa</option>
              <option>Kilifi</option>
              <option>Narok</option>
              <option>Bomet</option>
              <option>Mombasa</option>
              <option>kitui</option>
              <option>Tana river</option>
              <option>Lamu</option>
              <option>Taita taveta</option>
              <option>Garissa</option>
              <option>Wajir</option>
              <option>Mandera</option>
              <option>Marsabit</option>
              <option>Isiolo</option>
              <option>Meru</option>
              <option>Tharaka nithi</option>
              <option>Embu</option>
              <option>Makueni</option>
              <option>Nyandarua</option>
              <option>Nyeri</option>
              <option>Kirinyanga</option>
              <option>West pokot</option>
              <option>Samburu</option>
              <option>Trans nzoia</option>
              <option>Uasin gishu</option>
            </Select>
          </Div3>
          <Div4>
            <Input
              type="text"
              name="District"
              placeholder="District"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <Input
              type="text"
              name="Location"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Div4>
          <Div5>
            <Input
              type="number"
              name="height"
              placeholder="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
            <Input
              type="number"
              name="weight"
              placeholder="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </Div5>
        </Fieldset>
        <Fieldset>
          <Legend>emergencyperson</Legend>

          <Div7>
            <Input
              type="name"
              name="name"
              placeholder="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </Div7>
          <Div8>
            <Select
              name="relationship"
              id="county"
              value={relationship}
              onChange={(e) => setrelationship(e.target.value)}
            >
              <option defaultChecked>Relationship</option>
              <option>parent</option>
              <option>spouce</option>
              <option>child</option>
              <option>relative</option>
              <option>gurdian</option>
              <option>Friend</option>
            </Select>
            <Input
              type="number"
              name="contact1"
              value={contact1}
              placeholder="contact1"
              onChange={(e) => setcontact1(e.target.value)}
            />
          </Div8>
          <Div9>
            <Select
              name="county2"
              id="county"
              value={county2}
              onChange={(e) => setcounty2(e.target.value)}
            >
              <option defaultChecked>choose your county</option>
              <option>Mombasa</option>
              <option>Kwale</option>
              <option>Nairobi</option>
              <option>Kiambu</option>
              <option>Muranga</option>
              <option>Mombasa</option>
              <option>Machakos</option>
              <option>Mombasa</option>
              <option>Kilifi</option>
              <option>Narok</option>
              <option>Bomet</option>
              <option>Mombasa</option>
              <option>kitui</option>
              <option>Tana river</option>
              <option>Lamu</option>
              <option>Taita taveta</option>
              <option>Garissa</option>
              <option>Wajir</option>
              <option>Mandera</option>
              <option>Marsabit</option>
              <option>Isiolo</option>
              <option>Meru</option>
              <option>Tharaka nithi</option>
              <option>Embu</option>
              <option>Makueni</option>
              <option>Nyandarua</option>
              <option>Nyeri</option>
              <option>Kirinyanga</option>
              <option>West pokot</option>
              <option>Samburu</option>
              <option>Trans nzoia</option>
              <option>Uasin gishu</option>
            </Select>

            <Input
              type="text"
              name="Location2"
              placeholder="Location"
              value={Location2}
              onChange={(e) => setLocation2(e.target.value)}
            />
          </Div9>
        </Fieldset>
        <button type="submit">Submit</button>
      </Form>
    </Div>
  );
};

export default PatientForm;
