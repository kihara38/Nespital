import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";
import FormControl from "@mui/material/FormControl";
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
import getCurrentUser from "../../lib/auth";
import { InputLabel, MenuItem, Select } from "@mui/material";

const Booking = () => {
  const [date, setdate] = React.useState(new Date());
  const [Pending, setPending] = React.useState("");
  const [Approved, setApproved] = React.useState("");
  const [Canceled, setCanceled] = React.useState("");
  const [doctors, setDoctors] = React.useState("");
  const [doctorId, setDoctorId] = React.useState("");
  const [Loading, setIsLoading] = React.useState(true);

  const history = useHistory();

  useEffect(() => {
    console.log("getting doctors");
    // get doctors
    const user = getCurrentUser();
    const config = {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    };

    axios.get(`/api/doctor/all`, config).then((response) => {
      setDoctors(response.data.data);
      setIsLoading(false);
    });
  }, []);
  const handleChange = (event) => {
    setDoctorId(event.target.value);
  };
  const submit = async (e) => {
    e.preventDefault();
    const user = getCurrentUser();
    try {
      await axios.post("http://localhost:5002/api/appointment/", {
        date,
        doctor: doctorId,
        approval_status: "Pending",
        userId: user.id,
      });
    } catch (error) {
      console.log(error);
    }
    history.push("/patientProfile");
  };
  return (
    <Div onSubmit={submit}>
      <H1>Booking Appointment</H1>
      <Div1>
        <h3>Hospital</h3>
        <h4>Doctor</h4>
        <h5>specialist</h5>
      </Div1>
      {Loading ? (
        <div></div>
      ) : (
        <div
          style={{
            width: "100%",
            textAlign: "center",
            display: "flex",
            justifyItems: "center",
          }}
        >
          <Box sx={{ width: 300, textAlign: "center " }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Doctor
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={doctorId}
                label="Select Doctor"
                onChange={handleChange}
              >
                {doctors.map(({ _id, user }, index) => (
                  <MenuItem value={_id} key={_id}>
                    {user.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </div>
      )}
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
