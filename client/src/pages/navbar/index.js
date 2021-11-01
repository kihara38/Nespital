import { Link } from "react-router-dom";
import { useState } from "react";
import { Nav,H1,Ul,Li,MobileNavContainer, MenuIcon,Alink} from "./element";
const NavBar = () => {
const [open,setopen] =useState(true)

const HandleMenuOpen=()=>{
  setopen(!open)
}
    return (  
        <Nav>
          <div style={{
            display: 'flex',
            justifyContent:'space-between'
          }}>
          <Link to="/"><H1>NESPITAL</H1></Link>
           <MenuIcon onClick={HandleMenuOpen}/>
          </div>
        <Ul>
          <Li>
            <Alink to="/">home</Alink>
          </Li>
          <Li>
            <Alink to="/about">about</Alink>
          </Li>
          <Li>
            <Alink to="/appointment">appointment</Alink>
          </Li>
          <Li>
            <Alink to="/patient">patient</Alink>
          </Li>
          <Li>
            <Alink to="/doctor">doctor</Alink>
          </Li>
        </Ul>
        <MobileNav open={open}/>
      </Nav>
     );
}
 
export default NavBar;


const MobileNav = ({open})=>{

  return (
    <MobileNavContainer open={open}>
          <Li>
            <Link to="/">home</Link>
          </Li>
          <Li>
            <Link to="/about">about</Link>
          </Li>
          <Li>
            <Link to="/appointment">appointment</Link>
          </Li>
          <Li>
            <Link to="/patient">patient</Link>
          </Li>
          <Li>
            <Link to="/doctor">doctor</Link>
          </Li>

    </MobileNavContainer>
  )
}