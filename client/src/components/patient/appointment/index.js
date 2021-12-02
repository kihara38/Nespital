import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  Div,
  H1,
  Div1,
  Div2,
  Div3,
  Div4,
  Button,
  Button1,
  Button2,
} from "./element";

const Booking = () => {
  const [date, setdate] = React.useState(new Date());
  const [Pending, setPending] = React.useState("");
  const [Approved, setApproved] = React.useState("");
  const [Canceled, setCanceled] = React.useState("");

  const history = useHistory();
  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5002/api/appointment/", {
        date,
        Pending,
        Approved,
        Canceled,
      });
    } catch (error) {
      console.log(error);
    }
    history.push("/patientForm");
  };
  return (
    <Div onSubmit={submit}>
      <H1>Booking Appointment</H1>
      <Div1>
        <h3>Hospital</h3>
        <h4>Doctor</h4>
        <h5>specialist</h5>
      </Div1>
      <Div2>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={date}
            onChange={(newdate) => {
              setdate(newdate);
            }}
          />
        </LocalizationProvider>
      </Div2>
      <Div3>
        <input type="submit" placeholder="Submit" />
      </Div3>
      <Div4>
        <Button value={Pending} onChange={(e) => setPending(e.target.value)}>
          Pending
        </Button>
        <Button1 value={Approved} onChange={(e) => setApproved(e.target.value)}>
          Approved
        </Button1>
        <Button2 value={Canceled} onChange={(e) => setCanceled(e.target.value)}>
          Canceled
        </Button2>
      </Div4>
    </Div>
  );
};
export default Booking;
