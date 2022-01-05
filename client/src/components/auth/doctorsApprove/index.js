import { Doctor1, Detail, List } from "./element";
const DoctorApprove = () => {
  return (
    <Doctor1 id="Doctors approve">
      <Detail>
        <h3>Name</h3>
        <h3>Doctor's id</h3>
        <h3>cv</h3>
        <h3>status</h3>
      </Detail>
      <List>
        <h3>kihara nelson</h3>
        <h3>345678900-896</h3>
        <h3>pdf</h3>
        <h3>
          <button style={{ background: "blue" }}>approved </button>
          <button style={{ background: "red" }}>declined</button>
        </h3>
      </List>
    </Doctor1>
  );
};

export default DoctorApprove;
