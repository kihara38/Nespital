import { useState } from "react";

import {
  Nav,
  Logo,
  Ul,
  //MobileNavContainer,
  MenuIcon,
  Alink,
  //Blink,
} from "./element";
const NavBar = () => {
  const [open, setopen] = useState(true);
  const Logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };

  const HandleMenuOpen = () => {
    setopen(!open);
  };
  return (
    <Nav>
      <div>
        <Logo to="/">
          <h1>NESPITAL</h1>
        </Logo>
        <MenuIcon onClick={HandleMenuOpen} />
      </div>
      <Ul open={open}>
        <Alink to="/">Home</Alink>

        <Alink to="/about">About</Alink>

        <Alink to="/appointment">Appointment</Alink>

        <Alink to="/patient">Patient</Alink>

        <Alink to="/doctor">Doctor</Alink>
        <button onClick={Logout}> Log out</button>
      </Ul>
    </Nav>
  );
};

export default NavBar;
