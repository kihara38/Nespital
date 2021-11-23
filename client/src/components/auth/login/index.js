import { FaLock, FaEnvelope } from "react-icons/fa";
import login from "../../../resourses/login.svg";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

import {
  Div,
  SignupForm,
  Bunt,
  I,
  Input,
  InputField,
  Title,
  Left,
  Right,
  LoginImage,
  Clip,
} from "./element";
const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  const submit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5002/api/user/login", {
        email,
        password,
      });
      history.push("/patientForm");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Div>
      <Clip></Clip>
      <Left>
        <SignupForm onSubmit={submit}>
          <Title className="title">sign up</Title>
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
          <InputField className="input_field">
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
          <Bunt type="submit" value="sign up">
            submit
          </Bunt>
        </SignupForm>
      </Left>
      <Right>
        <LoginImage src={login} />;
      </Right>
    </Div>
  );
};

export default Login;
