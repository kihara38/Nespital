import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./pages/footer";
import Home from "./pages/home";
import NavBar from "./pages/navbar";

import Register from "./components/registerPatient";
import Login from "./components/login";
import PatientProfile from "./components/patientprofile";
import PatientForm from "./components/patientform";
import DoctorProfile from "./components/doctorsprofile";
import Consultation from "./components/consultation";
import Booking from "./components/appointment";
import DoctorForm from "./components/doctorsform";
import Registerdoctor from "./components/registerDoctor";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <NavBar />
          <Home />
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
        <Route path="/PatientForm" exact>
          <PatientForm />
        </Route>
        <Route path="/DoctorProfile" exact>
          <DoctorProfile />
        </Route>
        <Route path="/Booking" exact>
          <Booking />
        </Route>
        <Route path="/Consultation" exact>
          <Consultation />
        </Route>
        <Route path="/DoctorForm" exact>
          <DoctorForm />
        </Route>
        <Route path="/Registerdoctor" exact>
          <Registerdoctor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
