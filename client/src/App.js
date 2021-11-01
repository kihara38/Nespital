import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './pages/footer';
import Home from './pages/home';
import NavBar from "./pages/navbar";

import Register from './components/register';
import Login from './components/login';
import PatientProfile from "./components/patientprofile";
import P_form from './components/patientform';


function App() {
  return (
    <Router>
      
      
      <NavBar/>
      <Switch>
        <Route path='/' exact><h1><Home/></h1> </Route>
        <Route path='/About' exact><h1>About</h1></Route>
        <Route path='/appointment' exact><h1>appointment</h1></Route>
        <Route path='/patient' exact><h1>patient</h1></Route>
        <Route path='/doctor' exact><h1>doctor</h1></Route>
        <Route path='/login' exact><Login/></Route>
        <Route path='/register' exact><Register/></Route>
        <Route path='/patientprofile' exact><PatientProfile/></Route>
      </Switch>
      <Footer/>
    </Router>
    
  
  );
}

export default App;
