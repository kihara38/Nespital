import {
  Form,
  Div,
  Div1,
  Input,
  Div3,
  Div4,
  Div5,
  Div7,
  Div8,
  Div9,
  Diva,
  Fieldset,
  Legend,
  Select,
} from "./element";
const P_Form = () => {
  return (
    <Div>
      <Form>
        <img src="" alt="" />
        <Div1>
          {"DOB"}
          <Input type="date" name="Date of birth" />

          <Input type="radio" name="Male" placeholder="male" />
          {"Male"}
          <Input type="radio" name="Female" />
          {"Female"}
        </Div1>

        <Fieldset>
          <Legend>personaldetails</Legend>
          <Div3>
            <Div4>
              <Input
                type="number"
                name="Phone_number"
                placeholder="Phone_number"
              />

              <Select name="county" id="county">
                <option defaultChecked>choose your county</option>
                <option>Mombasa</option>
                <option>Kwale</option>
                <option>Nairobi</option>
                <option>Kiambu</option>
                <option>Muranga</option>
                <option>Mombasa</option>
                <option>Machakos</option>
                <option>Mombasa</option>
                <option>Kilifi</option>
                <option>Narok</option>
                <option>Bomet</option>
                <option>Mombasa</option>
                <option>kitui</option>
                <option>Tana river</option>
                <option>Lamu</option>
                <option>Taita taveta</option>
                <option>Garissa</option>
                <option>Wajir</option>
                <option>Mandera</option>
                <option>Marsabit</option>
                <option>Isiolo</option>
                <option>Meru</option>
                <option>Tharaka nithi</option>
                <option>Embu</option>
                <option>Makueni</option>
                <option>Nyandarua</option>
                <option>Nyeri</option>
                <option>Kirinyanga</option>
                <option>West pokot</option>
                <option>Samburu</option>
                <option>Trans nzoia</option>
                <option>Uasin gishu</option>
              </Select>
            </Div4>
            <Input type="text" name="District" placeholder="District" />
            <Input type="text" name="Location" placeholder="Location" />
          </Div3>
          <Div5>
            <Input type="number" name="height" placeholder="height" />
            <Input type="number" name="weight" placeholder="weight" />
          </Div5>
        </Fieldset>
        <Fieldset>
          <Legend>emergencyperson</Legend>
          <Diva>
            <Div7>
              <Input type="name" name="name" placeholder="name" />
            </Div7>
            <Div8>
              <Select name="county" id="county">
                <option defaultChecked>Relationship</option>
                <option>parent</option>
                <option>spouce</option>
                <option>child</option>
                <option>relative</option>
                <option>gurdian</option>
                <option>Friend</option>
              </Select>
              <Input
                type="number"
                name="Phone_number"
                placeholder="Phone_number"
              />
            </Div8>
            <Div9></Div9>
            <Select name="county" id="county">
              <option defaultChecked>choose your county</option>
              <option>Mombasa</option>
              <option>Kwale</option>
              <option>Nairobi</option>
              <option>Kiambu</option>
              <option>Muranga</option>
              <option>Mombasa</option>
              <option>Machakos</option>
              <option>Mombasa</option>
              <option>Kilifi</option>
              <option>Narok</option>
              <option>Bomet</option>
              <option>Mombasa</option>
              <option>kitui</option>
              <option>Tana river</option>
              <option>Lamu</option>
              <option>Taita taveta</option>
              <option>Garissa</option>
              <option>Wajir</option>
              <option>Mandera</option>
              <option>Marsabit</option>
              <option>Isiolo</option>
              <option>Meru</option>
              <option>Tharaka nithi</option>
              <option>Embu</option>
              <option>Makueni</option>
              <option>Nyandarua</option>
              <option>Nyeri</option>
              <option>Kirinyanga</option>
              <option>West pokot</option>
              <option>Samburu</option>
              <option>Trans nzoia</option>
              <option>Uasin gishu</option>
            </Select>
            <Input type="text" name="Location" placeholder="Location" />
          </Diva>
        </Fieldset>
      </Form>
    </Div>
  );
};

export default P_Form;
