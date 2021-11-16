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
import Signin from "../../resourses/register.svg";
const Register = () => {
  return (
    <Div1>
      <Clip></Clip>
      <Left>
        <SigninForm>
          <Title>sign in</Title>
          <InputField>
            <I>
              <FaUserAlt />
            </I>
            <Input type="text" placeholder="username" />
          </InputField>
          <InputField>
            <I>
              <FaEnvelope />
            </I>
            <Input type="text" placeholder="ex:myname@example.com" />
          </InputField>
          <InputField>
            <I>
              <FaLock />
            </I>
            <Input type="password" placeholder="password" />
          </InputField>
          <InputField>
            <I>
              <FaLock />
            </I>
            <Input type="password" placeholder="password2" />
          </InputField>
          <Bunt type="submit" value="Signin" className="btn solid" />
        </SigninForm>
      </Left>
      <Right>
        <img src={Signin} />
      </Right>
    </Div1>
  );
};
export default Register;
