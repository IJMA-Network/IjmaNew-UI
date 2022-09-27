import React from 'react'
import './Proformas.css'
// import PromissoryNote from './PromissoryNote.json'

export default function Proformas() {

    //   PromissoryNote.map((v, i) => { console.log(v, "xzxzx") })


    return (
        <div class="card card-cascade narrower">
            <div
                class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">

                <div>
                    <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                        <i class="fas fa-th-large mt-0"></i>
                    </button>
                    <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                        <i class="fas fa-columns mt-0"></i>
                    </button>
                </div>

                <a class="white-text mx-3">Allow Access</a>

                <div>
                    <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                        <i class="fas fa-pencil-alt mt-0"></i>
                    </button>
                    <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                        <i class="far fa-trash-alt mt-0"></i>
                    </button>
                    <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                        <i class="fas fa-info-circle mt-0"></i>
                    </button>
                </div>

            </div>
            <div class="container mt-3">
                <h2 className='text-center'>Proformas</h2>

                <table class="table table-hover">
                    <thead class="bg-light">
                        <tr>
                            <th> Date</th>
                            <th>Reference No.</th>
                            <th>Issuer</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>8-31-2022</td>
                            <td>SELLER</td>
                            <td>PR-HDM</td>
                            <td>Electroniics</td>
                            <td>20 pcs</td>
                            <td>
                                <span type="button" class="btn btn-warning btn-rounded" data-toggle="modal" data-target="#myModal"
                                //  onClick={() => setClinetID(v._id)}
                                >View</span>
                            </td>
                        </tr>
                    </tbody>
                    {/* {
            PromissoryNote.map((v, i) => {
              return (

              
              )
            })} */}

                </table>
            </div>
            <div class="modal" id="myModal">
                <div class="modal-dialog modal-dialog-scrollable-sm">
                    <div class="modal-content" style={{ width: "115%" }}>

                        {/* <!-- Modal Header --> */}
                        <div class="modal-header">
                            <h3 class="modal-title">Proformas Details</h3>
                            <button type="button" class="btn btn-danger close" data-dismiss="modal">X</button>
                        </div>
                        <div class="modal-body">
                            <table id="customers">

                                <tr>
                                    <td>Vendor</td>
                                    <td>IBANPAKKA0000SELLER2</td>
                                </tr>
                                <tr>
                                    <td>Client</td>
                                    <td>IBANPAKKA0000BUYER1</td>
                                </tr>
                                <tr>
                                    <td>Refrence No.</td>
                                    <td>PR-HMD-01</td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>31-8-2022</td>
                                </tr>
                                <tr>
                                    <td>Consignment No.</td>
                                    <td>CN-1</td>
                                </tr>
                                <tr>
                                    <td>item</td>
                                    <td>Electronics</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>Samsung Smart TV 36"</td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td>20 pcs</td>
                                </tr>
                                <tr>
                                    <td>Amount</td>
                                    <td>20000</td>
                                </tr>


                            </table>

                        </div>
                        {/* <!-- Modal body --> */}
                        {/* {PromissoryNote.map((v, i) => {
              return (
              
              )
            })} */}



                        {/* <!-- Modal footer --> */}
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" data-dismiss="modal">Request Murabaha</button>
                            {/* <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
