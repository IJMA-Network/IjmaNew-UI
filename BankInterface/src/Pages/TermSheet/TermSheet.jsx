import React, { useRef, useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import "./TermSheet.css";
import axios from "axios";
import { createTerm } from "../../Api/api";
import StoreContext from "../../ContextApi";




export default function TermSheet() {
  const contextData = useContext(StoreContext);
  const [bank, setBank] = useState({ accountName: "Bank1" });
  //   const [NodeName, setNodeName] = useState("ABC Bank");
  //   const [users, setUsers] = useState([]);



  const Client = useRef();
  const Expire = useRef();
  const Refrense = useRef();
  const FacilityType = useRef();
  const Limit = useRef();
  const Tenor = useRef();
  const Rate = useRef();
  const Spread = useRef();
  // const bank = useRef();

  console.log(contextData, "SignInData");


  const FormSubmit = () => {
    var profitRate = {
      referenceRate: Rate.current.value,
      spread: Spread.current.value,
    };

    var data = {
      bank: bank.accountName,
      client: Client.current.value,
      termsheetReference: Refrense.current.value,
      facilityType: FacilityType.current.value,
      limit: Limit.current.value,
      tenor: Tenor.current.value,
      profitRate: profitRate,
      expiry: Expire.current.value,
    };
    // const myJSON = JSON.stringify(data);

    // console.log(data, "dataaa");
    createTerm(data);
  };

  return (
    <div class="container-fluid px-1 py-5 mx-auto">
      <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 ">
          {/* <h3>Issue Term Sheet</h3>
                        <p class="blue-text">Just a few Ijma Sheet<br /> so that we can personalize the right experience for you.</p> */}
          <h3 className="text-center">Issue Term Sheet</h3>
          <div class="card ">
            {/* <p class="blue-text text-center">Just a few Ijma Sheet<br /> so that we can personalize the right experience for you.</p> */}
            <form
              class="form-card"
              onSubmit={(e) => {
                e.preventDefault();
                FormSubmit();
              }}
            >
              <div class="form-group col-12 flex-column d-flex">
                <label class="form-label">
                  Client Account<span class="text-danger"> *</span>
                </label>
                <input
                  type="text"
                  id="ans"
                  name="ans"
                  placeholder="Client AAccount-IBAN"
                  //   onblur="validate(6)"
                  ref={Client}
                />
              </div>
              {/* <br /> */}

              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-label">
                    Bank <span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="ans"
                    name="ans"
                    placeholder="Bank Detail"
                    //   onblur="validate(6)"
                    ref={bank}
                  />
                  {/* <select
                    name=""
                    id=""
                    class="form-select"
                    onChange={(e) => setNodeName(e.target.value)}
                  >
                    <option value="ABC Bank">ABC Bank</option>
                    <option value="XYZ Bank">XYZ Bank</option>
                    <option value="DEF Bank">DEF Bank</option>
                    <option value="GHI Bank">GHI Bank</option>
                  </select> */}
                </div>

                <div class=" form-group col-sm-6 flex-column d-flex form-label">
                  <Form.Group controlId="dob" class="form-label">
                    <label class="form-label">
                      Expiry<span class="text-danger"> *</span>
                    </label>
                    <Form.Control
                      type="date"
                      name="dob"
                      ref={Expire}
                      placeholder="Date of Birth"
                    />
                  </Form.Group>
                </div>
              </div>

              {/* <br /> */}
              <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex">
                  <label class="form-label">
                    Term Sheet Refrence<span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="ans"
                    name="ans"
                    placeholder=""
                    // onblur="validate(6)"
                    ref={Refrense}
                  />
                </div>
              </div>
              {/* <br /> */}

              <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex">
                  <label class="form-label">
                    Facility Type<span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="ans"
                    name="ans"
                    placeholder=""
                    // onblur="validate(6)"
                    ref={FacilityType}
                  />
                </div>
              </div>
              {/* <br /> */}
              <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex">
                  <label class="form-label">
                    Limit<span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="ans"
                    name="ans"
                    placeholder=""
                    // onblur="validate(6)"
                    ref={Limit}
                  />
                </div>
              </div>
              {/* <br /> */}

              <div class="row justify-content-between text-left">
                <div class="form-group col-12 flex-column d-flex">
                  <label class="form-label">
                    Tenor<span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="ans"
                    name="ans"
                    placeholder="tenor in months"
                    // onblur="validate(6)"
                    ref={Tenor}
                  />
                </div>
              </div>
              {/* <br /> */}

              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-label">
                    Refrance Rate<span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Benchmark Rate in %"
                    // onblur="validate(1)"
                    ref={Rate}
                  />
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-label">
                    Spread<span class="text-danger"> *</span>
                  </label>
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Spread in%"
                    // onblur="validate(2)"
                    ref={Spread}
                  />
                </div>
              </div>

              <br />

              <div class="d-grid gap-2 col-6 mx-auto">
                <button type="submit" class="btn-block btn-primary">
                  ISSUE
                </button>{" "}
              </div>
              {/* <button class="btn btn-primary" type="button">Button</button> */}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
