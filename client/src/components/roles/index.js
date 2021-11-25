import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import getCurrentUser from "../lib/auth";
import Admin from "../auth/dashbord";
import DoctorForm from "../doctor/doctorsform";
import DoctorProfile from "../doctor/doctorsprofile";
import Consultation from "../doctor/consultation";
import PatientForm from "../patient/patientform";
import PatientProfile from "../patient/patientprofile";
import Booking from "../patient/appointment";
const App_index = () => {
  const [isAdmin, setIsAdmin] = useState(null);
  const [isDoctor, setIsDoctor] = useState(null);
  const [isPatient, setIsPatient] = useState(null);
  const [redirect, setRedirect] = useState("");

  useEffect(() => {
    const user = getCurrentUser();
    if (user && user.role === "admin") {
      setIsAdmin(user);
    } else if (user && user.role === "doctor") {
      setIsDoctor(user);
    } else if (user && user.role === "patient") {
      setIsPatient(user);
    } else {
      setRedirect("/login");
    }
  }, []);

  const admin_component = (
    <div>
      <Admin />
    </div>
  );
  const doctor_component = (
    <div>
      <DoctorForm />
      <DoctorProfile />
      <Consultation />
    </div>
  );
  const patient_component = (
    <div>
      <PatientForm />
      <PatientProfile />
      <Booking />
    </div>
  );
  const $403_component = (
    <div>
      <h1>403 Not ALLOWED </h1>
    </div>
  );

  if (isAdmin) {
    return admin_component;
  } else if (isDoctor) {
    return doctor_component;
  } else if (isPatient) {
    return patient_component;
  } else if (redirect) {
    return <Redirect to={redirect} />;
  } else {
    return $403_component;
  }
};
export default App_index;
