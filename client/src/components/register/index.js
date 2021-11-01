import { Bunt, I, Input, InputField, Title,SigninForm} from './element';
import { FaUserAlt,FaLock,FaEnvelope} from 'react-icons/fa';
const Register = () => {
    return (  
     <SigninForm>                 
     <Title>sign in</Title>
     <InputField>
         <I><FaUserAlt /></I>
         <Input type="text" placeholder="username" />
     </InputField>
     <InputField>
         <I><FaEnvelope/></I>
         <Input type="text" placeholder="ex:myname@example.com" />
     </InputField>
     <InputField>
         <I><FaLock/></I>
         <Input type="password" placeholder="password" />
     </InputField>
     <InputField>
         <I><FaLock/></I>
         <Input type="password2" placeholder="password2" />
     </InputField>
     <Bunt type="submit"value="Signin"className="btn solid" />
     </SigninForm>
    );
}
export default Register;  