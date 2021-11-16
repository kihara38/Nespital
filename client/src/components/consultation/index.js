import { Div, Div1, Span, Div2, Div3, Div4 } from "./element";
const Consultation = () => {
  return (
    <Div>
      <h1>Consultation</h1>
      <Div1>
        <h3>Patient No:</h3>
        <input type="text" placeholder="DFGH45678" />
      </Div1>
      <Span>
        <input type="text" placeholder="Patient:name" />
        <input type="number" placeholder="Age" />
      </Span>
      <Div2>
        <h3>Disease:</h3>
        <Div3>
          <h4>Consultation</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            doloremque veritatis, aut adipisci dolorem, maiores voluptate
            voluptatem eos repellat iure ad mollitia id molestias itaque
            quisquam deserunt perferendis ut nostrum?
          </p>
        </Div3>
      </Div2>
      <Div4>
        <button>submit</button>
      </Div4>
    </Div>
  );
};

export default Consultation;
