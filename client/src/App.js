import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./pages/footer";
import Home from "./pages/home";
import NavBar from "./pages/navbar";

import Register from "./components/register";
import Login from "./components/login";
import PatientProfile from "./components/patientprofile";
import P_form from "./components/patientform";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Home />
          <Footer />
        </Route>
        <Route path="/About" exact>
          <NavBar />
          <h1>About</h1>
          <Footer />
        </Route>
        <Route path="/appointment" exact>
          <NavBar />
          <h1>appointment</h1>
          <Footer />
        </Route>
        <Route path="/patient" exact>
          <NavBar />
          <h1>patient</h1>
          <Footer />
        </Route>
        <Route path="/doctor" exact>
          <NavBar />
          <h1>doctor</h1>
          <Footer />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/patientprofile" exact>
          <PatientProfile />
        </Route>
        <Route path="/P_form" exact>
          <P_form />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
