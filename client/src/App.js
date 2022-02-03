import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./pages/footer";
import Home from "./pages/home";
import NavBar from "./pages/navbar";

import Register from "./components/auth/registerPatient";
import Login from "./components/auth/login";
import PatientProfile from "./components/patient/patientprofile";
import PatientForm from "./components/patient/patientform";
import DoctorProfile from "./components/doctor/doctorsprofile";
import Consultation from "./components/doctor/consultation";
import Booking from "./components/patient/appointment";
import DoctorForm from "./components/doctor/doctorsform";
import Registerdoctor from "./components/auth/registerDoctor";
import Admin from "./components/auth/dashbord";
import App_index from "./components/roles";
import DoctorAdmin from "./components/auth/doctors admin";
import DoctorApprove from "./components/auth/doctorsApprove";
import Patients from "./components/auth/Patients";

function App() {
  return (
    <Router>
      <NavBar />
      <ToastContainer />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/About" exact>
          <h1>About</h1>
          <Footer />
        </Route>
        <Route path="/appointment" exact>
          <h1>appointment</h1>
          <Footer />
        </Route>
        <Route path="/patient" exact>
          <h1>patient</h1>
          <Footer />
        </Route>
        <Route path="/doctor" exact>
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
        <Route path="/Admin" exact>
          <Admin />
        </Route>
        <Route path="/DoctorAdmin" exact>
          <DoctorAdmin />
        </Route>
        <Route path="/DoctorApprove" exact>
          <DoctorApprove />
        </Route>
        <Route path="/Patients" exact>
          <Patients />
        </Route>
        <Route path="/index" exact>
          <App_index />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
