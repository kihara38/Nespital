import { FaLock, FaEnvelope } from "react-icons/fa";

import { Div, SignupForm, Bunt, I, Input, InputField, Title } from "./element";
const Login = () => {
  return (
    <Div>
      <SignupForm>
        <Title className="title">sign up</Title>
        <InputField>
          <I>
            <FaEnvelope />
          </I>
          <Input type="text" placeholder="ex:myname@example.com" />
        </InputField>
        <InputField className="input_field">
          <I>
            <FaLock />
          </I>
          <Input type="password" placeholder="password" />
        </InputField>
        <Bunt type="submit" value="sign up" to="/patientprofile">
          submit
        </Bunt>
      </SignupForm>
    </Div>
  );
};

export default Login;
