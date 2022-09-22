import React from 'react'
import './TermSheet.css'
import { Form } from 'react-bootstrap';

export default function TermSheet() {
    return (
        <div class="container-fluid px-1 py-5 mx-auto">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-7 col-lg-8 col-md-9 col-11 ">
                    {/* <h3>Issue Term Sheet</h3>
                        <p class="blue-text">Just a few Ijma Sheet<br /> so that we can personalize the right experience for you.</p> */}
                        <h3 className='text-center'>Issue Term Sheet</h3>
                    <div class="card ">
                        {/* <p class="blue-text text-center">Just a few Ijma Sheet<br /> so that we can personalize the right experience for you.</p> */}
                        <form class="form-card">

                            <div class="form-group col-12 flex-column d-flex">
                                <label class="form-label">Client Account<span class="text-danger"> *</span></label>
                                <input type="text" id="ans" name="ans" placeholder="Client AAccount-IBAN" onblur="validate(6)" />
                            </div>
                            {/* <br /> */}


                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex">
                                    <label class="form-label">Node Name <span class="text-danger"> *</span></label>
                                    <select name="" id="" class="form-select">
                                        <option value="">ABC Bank</option>
                                        <option value="">XYZ Bank</option>
                                        <option value="">DEF Bank</option>
                                        <option value="">GHI Bank</option>
                                    </select>
                                </div>

                                <div class=" form-group col-sm-6 flex-column d-flex form-label">

                                    <Form.Group controlId="dob" class="form-label">
                                        <label class="form-label">Expiry<span class="text-danger"> *</span></label>
                                        <Form.Control type="date" name="dob" placeholder="Date of Birth" />
                                    </Form.Group>
                                </div>
                            </div>

                            {/* <br /> */}
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-12 flex-column d-flex">
                                    <label class="form-label">Term Sheet Refrence<span class="text-danger"> *</span></label>
                                    <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" />
                                </div>
                            </div>
                            {/* <br /> */}

                            <div class="row justify-content-between text-left">
                                <div class="form-group col-12 flex-column d-flex">
                                    <label class="form-label">Facility Type<span class="text-danger"> *</span></label>
                                    <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" />
                                </div>
                            </div>
                            {/* <br /> */}
                            <div class="row justify-content-between text-left">
                                <div class="form-group col-12 flex-column d-flex">
                                    <label class="form-label">Limit<span class="text-danger"> *</span></label>
                                    <input type="text" id="ans" name="ans" placeholder="" onblur="validate(6)" />
                                </div>
                            </div>
                            {/* <br /> */}

                            <div class="row justify-content-between text-left">
                                <div class="form-group col-12 flex-column d-flex">
                                    <label class="form-label">Tenor<span class="text-danger"> *</span></label>
                                    <input type="text" id="ans" name="ans" placeholder="tenor in months" onblur="validate(6)" />
                                </div>
                            </div>
                            {/* <br /> */}

                            <div class="row justify-content-between text-left">
                                <div class="form-group col-sm-6 flex-column d-flex">
                                    <label class="form-label">Refrance Rate<span class="text-danger"> *</span></label>
                                    <input type="text" id="fname" name="fname" placeholder="Benchmark Rate in %" onblur="validate(1)" />
                                </div>
                                <div class="form-group col-sm-6 flex-column d-flex">
                                    <label class="form-label">Spread<span class="text-danger"> *</span></label>
                                    <input type="text" id="lname" name="lname" placeholder="Spread in%" onblur="validate(2)" />
                                </div>
                            </div>


                            <br />

                            <div class="d-grid gap-2 col-6 mx-auto">
                                <button type="submit" class="btn-block btn-primary">ISSUE</button> </div>
                            {/* <button class="btn btn-primary" type="button">Button</button> */}

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
