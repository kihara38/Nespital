import { Form,Div,Div1,Input,Div2,Div3,Div4,Div5,Div6,Div7,Div8,Div9,Diva,Divb,Divc,Fieldset,Legend,Select } from "./element";
const P_Form = () => {
    return (
      <Form>
        <Div>
          <Input type="text" name="Sir_name" placeholder="Sir_name" />
          <Input type="text" name="First_name" placeholder="First_name" />
          <Input type="text" name="Last_name" placeholder="Last_name" />
        </Div>
        <Div1>
        <Input type="date" name="Date of birth" />{'DOB'}
        </Div1>
        <Div2>
        <Input type="radio" name="Male" />{'Male'}
        <Input type="radio" name="Female" />{'Female'}
        </Div2>
  
        <Fieldset>
          <Legend>Address</Legend>
          <Div3>
            <Div4>
              <Input
                type="number"
                name="Phone_number"
                placeholder="Phone_number"
              />
              <Input
                type="number"
                name="Phone_number2"
                placeholder="Phone_number2"
              />
            </Div4>
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
            <Input type="text" name="District" placeholder="District" />
            <Input type="text" name="Location" placeholder="Location" />
          </Div3>
          <Div5>
            <Input type="text" name="PO .box" placeholder="PO .box" />
            <Input type="number" name="Area_code" placeholder="Area_code" />
          </Div5>
          <Div6>
            <Input type="text" name="PO .box2" placeholder="PO .box2" />
            <Input type="number" name="Area_code2" placeholder="Area_code2" />
            <Input type="email" name="email" placeholder="ex:myname@example.com"/>
          </Div6>
        </Fieldset>
        <Fieldset>
          <Legend>NextKin Details</Legend>
          <Diva>
          <Div7>
          <Input type="text" name="Sir_name" placeholder="Sir_name" />
          <Input type="text" name="First_name" placeholder="First_name" />
          <Input type="text" name="Last_name" placeholder="Last_name" />
        </Div7>
        <Div8>
        <Select name="county" id="county">
              <option defaultChecked>Relationship</option>
              <option>parent</option>
              <option>spouce</option>
              <option>child</option>
              <option>relative</option>
              <option>gurdian</option>
             
            </Select>
        </Div8>
          <Div9>
              <Input
                type="number"
                name="Phone_number"
                placeholder="Phone_number"
              />
              <Input
                type="number"
                name="Phone_number2"
                placeholder="Phone_number2"
              />
            </Div9>
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
            <Input type="text" name="District" placeholder="District" />
            <Input type="text" name="Location" placeholder="Location" />
          </Diva>
          <Divb>
            <Input type="text" name="PO .box" placeholder="PO .box" />
            <Input type="number" name="Area_code" placeholder="Area_code" />
          </Divb>
          <Divc>
            <Input type="text" name="PO .box2" placeholder="PO .box2" />
            <Input type="number" name="Area_code2" placeholder="Area_code2" />
            <Input type="email" name="email" placeholder="ex:myname@example.com"/>
          </Divc>
        </Fieldset>
      </Form>
    );
  };
  
  export default P_Form;
  