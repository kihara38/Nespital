import * as React from "react";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
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

export default function Booking() {
  const [value, setValue] = React.useState(new Date());

  return (
    <Div>
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
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </LocalizationProvider>
      </Div2>
      <Div3>
        <input type="submit" placeholder="Submit" />
      </Div3>
      <Div4>
        <Button>Pending</Button>
        <Button1>Approved</Button1>
        <Button2>cancel</Button2>
      </Div4>
    </Div>
  );
}
