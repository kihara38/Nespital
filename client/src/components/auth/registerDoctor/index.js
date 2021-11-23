import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import {
  Div1,
  Bunt,
  I,
  Input,
  InputField,
  Title,
  SigninForm,
  Clip,
  Left,
  Right,
} from "./element";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import Signin from "../../../resourses/register.svg";
const Registerdoctor = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  const [role, setrole] = useState("doctor");

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5002/api/user/", {
        name,
        email,
        password,
        password2,
        role,
      });
      history.push("/DoctorForm");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Div1>
      <Clip></Clip>
      <Left>
        <SigninForm onSubmit={submit}>
          <Title>sign in</Title>
          <InputField>
            <I>
              <FaUserAlt />
            </I>
            <Input
              type="text"
              placeholder="username"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </InputField>
          <InputField>
            <I>
              <FaEnvelope />
            </I>
            <Input
              type="text"
              placeholder="ex:myname@example.com"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </InputField>
          <InputField>
            <I>
              <FaLock />
            </I>
            <Input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </InputField>
          <InputField>
            <I>
              <FaLock />
            </I>
            <Input
              type="password"
              placeholder="password2"
              value={password2}
              onChange={(e) => setpassword2(e.target.value)}
            />
          </InputField>
          <Bunt type="submit" value="Signin" className="btn solid" />
          <p>
            sign in as {role}
            {(e) => setrole(e.target.role)}
          </p>
        </SigninForm>
      </Left>
      <Right>
        <img src={Signin} alt="" />
      </Right>
    </Div1>
  );
};
export default Registerdoctor;
