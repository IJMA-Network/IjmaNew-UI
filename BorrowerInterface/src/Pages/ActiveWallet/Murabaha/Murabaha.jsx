import Item from 'antd/lib/list/Item';
import { React, useState, useContext } from 'react'
import StoreContext from '../../../ContextApi';
import Filter from '../../filter/filter';
import './Murabaha.css';
import MurbaState from './MurbahaState.json';

export default function Murabaha() {

    const [murabaha, setMurabaha] = useState(MurbaState);
    const contextData = useContext(StoreContext);
    console.log(contextData.SignInData, "murabaha Context Data");

    murabaha.map((v, i) => { console.log(v, "MurbanState") })




    return (
        <div class="card card-cascade narrower">
            <Filter />
            <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center"
                style={{ marginTop: "-4%" }}
            >

                {/* <div>
                    <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                        <i class="fas fa-th-large mt-0"></i>
                    </button>
                    <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
                        <i class="fas fa-columns mt-0"></i>
                    </button>
                </div>
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
                </div> */}

            </div>
            <div class="container mt-3">
                <h2 className='text-center'>Murabaha Contact</h2>
                {murabaha.map((v, i) => {
                    return (


                        <table class="table table-hover">
                            <thead class="bg-light">
                                <tr>
                                    <th >Date</th>
                                    <th>Refrence No</th>
                                    <th>Bank</th>
                                    <th>Borrower</th>
                                    <th>Term</th>
                                    <th>Cost Price</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{v.agreementDate}</td>
                                    <td>{v.internalReference}</td>
                                    <td>{v.bankAccountInfo.name}</td>
                                    <td>Buyer 1</td>
                                    <td>{v.term}</td>
                                    <td>{v.costPrice}</td>
                                    {/* <td>{v.borrowerAccountInfo.name}</td>
                                    <td>{v.sellingprice}</td>
                                    <td>{v.profitrate}</td>
                                    <td>Medicines</td>
                                    <td>Signed</td>
                                    <td>Signed</td> */}
                                    <td>
                                        <span type="button" class="btn btn-warning btn-rounded" data-toggle="modal" data-target="#myModal"
                                        //  onClick={() => setClinetID(v._id)}
                                        >View</span>
                                    </td>

                                </tr>
                            </tbody>

                        </table>
                    )
                })}
            </div>

            <div class="modal" id="myModal">
                <div class="modal-dialog modal-dialog-scrollable-sm">
                    <div class="modal-content" style={{ width: "115%" }}>

                        {/* <!-- Modal Header --> */}
                        <div class="modal-header">
                            <h3 class="modal-title">Murabaha Agreement Details</h3>
                            <button type="button" class="btn btn-danger close" data-dismiss="modal">X</button>
                        </div>


                        {murabaha.map((v, i) => {
                            return (
                                <div class="modal-body">
                                    <table id="customers">

                                        <tr>
                                            <th>Company</th>
                                            <th>Contact</th>
                                        </tr>
                                        <tr>
                                            <td>Date</td>
                                            <td>{v.agreementDate}</td>
                                        </tr>
                                        <tr>
                                            <td>Refrence No.</td>
                                            <td>{v.internalReference}</td>
                                        </tr>
                                        <tr>
                                            <td>Bank</td>
                                            <td>{v.bankAccountInfo.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Applicant</td>
                                            <td>{v.borrowerAccountInfo.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Cost Price</td>
                                            <td>{v.costPrice}</td>
                                        </tr>
                                        <tr>
                                            <td>Tenor</td>
                                            <td>{v.term}</td>
                                        </tr>
                                        <tr>
                                            <td>Selling Price</td>
                                            <td>{v.sellingprice}</td>
                                        </tr>
                                        <tr>
                                            <td>Profile Rate</td>
                                            <td>{v.profitrate}</td>
                                        </tr>
                                        <tr>
                                            <td>Item</td>
                                            <td>Medicines</td>
                                        </tr>
                                        <tr>
                                            <td>Bank Signature</td>
                                            {(Item.bankSignature) ?
                                                <td>Signed</td>
                                                :
                                                <td>Un Signed</td>
                                            }
                                        </tr>
                                        <tr>
                                            <td>Brorower Signature</td>
                                            {(Item.borrowerSignature) ?
                                                <td>Signed</td>
                                                :
                                                <td>Un Signed</td>
                                            }
                                        </tr>

                                    </table>

                                </div>
                            )
                        })}



                        {/* <!-- Modal footer --> */}
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
