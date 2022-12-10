import React, { useRef, useState, useEffect } from "react";

import "./UserForm.css";

// import ijma from '../../Images/Ijma.png'
// import { useNavigate } from "react-router-dom"

export default function UserForm(params) {


    let val_name = useRef()
    let val_iban = useRef()
    let val_ntn = useRef()
    let val_legalStatus = useRef()
    let val_address = useRef()
    let val_contact = useRef()
    let val_representative = useRef()


    return (
        <div>
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div class="d-table-cell align-middle">
                            <div class="text-center mt-4">
                                <h1 class="h2">Get started</h1>
                                {/* <p class="lead">
								Start creating the best possible user experience for you customers.
							</p> */}
                            </div>

                            <div class="card">
                                <div class="card-body">
                                    <div class="m-sm-4">
                                        <form>
                                            <div class="form-group">
                                                <label>Name</label>
                                                <input class="form-control form-control-lg" type="text" name="name" ref={val_name} placeholder="Enter your name" />
                                            </div>
                                            <div class="form-group">
                                                <label>IBAN</label>
                                                <input class="form-control form-control-lg" type="text" name="company" ref={val_iban} placeholder="Enter your IBAN " />
                                            </div>
                                            <div class="form-group">
                                                <label>NTN</label>
                                                <input class="form-control form-control-lg" type="text" name="email" ref={val_ntn} placeholder="Enter your NTN" />
                                            </div>
                                            <div class="form-group">
                                                <label>legalStatus</label>
                                                <input class="form-control form-control-lg" type="text" name="text" ref={val_legalStatus} placeholder="Enter Your legalStatus" />
                                            </div>
                                            <div class="form-group">
                                                <label>Address</label>
                                                <input class="form-control form-control-lg" type="text" name="text" ref={val_address} placeholder="Enter Address" />
                                            </div>
                                            <div class="form-group">
                                                <label>Contact</label>
                                                <input class="form-control form-control-lg" type="number" name="number" ref={val_contact} placeholder="Enter Contact" />
                                            </div>
                                            <div class="form-group">
                                                <label>Representative</label>
                                                <input class="form-control form-control-lg" type="text" name="text" ref={val_representative} placeholder="Enter Representative" />
                                            </div>
                                            <div class="text-center mt-3">
                                                <a href="index.html" class="btn btn-lg btn-primary">Submit</a>
                                                {/* <!-- <button type="submit" class="btn btn-lg btn-primary">Sign up</button> --> */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}