import {React, useState,useEffect } from 'react';
import './Proformas.css'
import { InputNumber } from 'antd';
import {getData,postData} from '../../../Api'
import ProformaState from './ProformaState.json'


export default function Proformas() {
    const[user,setUser]=useState({accountName:"Buyer1"});
    const[bank,setBank]=useState({accountName:"Bank1"});
    const [value, setValue] = useState('');
    const [item, setItem] = useState(null);
   
    const[proformas,setProformas]=useState(ProformaState);
    useEffect(()=> {
        let payload={
            account: user.accountName,
            consumable: ""
           }
   getData("received-Proformas",payload,setProformas);
    },[])
    
const handleRequestMurabaha=async()=>{
    let api="apply/murabaha";
    let payload={
        bank:bank.accountName,
        proformaId: item.processId,
        "term": value,
        borrower:user.accountName
        }
    console.log("In request Murabaha",payload);
    const resp= await postData(api,payload);
}

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
                    {proformas.map((v, i) => {
              return (
                    <tbody>
                        <tr>
                            <td>{v.date}</td>
                            <td>{v.proformaId}</td>
                            <td>{v.sellerAccountInfo.name}</td>
                            <td>{v.goods.asset}</td>
                            <td>{v.goods.quantity.value+" "+v.goods.quantity.unit}</td>
                            <td>
                                <span type="button" class="btn btn-warning btn-rounded" data-toggle="modal" data-target="#myModal"
                                  onClick={() => setItem(v)}
                                >View</span>
                            </td>
                        </tr>
                    </tbody>
               )
            })}
                

                </table>
            </div>
            <div class="modal" id="myModal">
                <div class="modal-dialog modal-dialog-scrollable-sm">
                    <div class="modal-content" style={{ width: "115%" }}>

                        {/* <!-- Modal Header --> */}
                        <div class="modal-header">
                            <h3 class="modal-title">Proforma Details</h3>
                            <button type="button" class="btn btn-danger close" data-dismiss="modal">X</button>
                        </div>

                        {(item!=null)?
                        <div class="modal-body">
                            <table id="customers">

                                <tr>
                                    <td>Vendor</td>
                                    <td>{item.sellerAccountInfo.name}</td>
                                </tr>
                                <tr>
                                    <td>Client</td>
                                    <td>{item.buyerAccountInfo.name}</td>
                                </tr>
                                <tr>
                                    <td>Refrence No.</td>
                                    <td>{item.proformaId}</td>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>{item.date}</td>
                                </tr>
                                <tr>
                                    <td>Consignment No.</td>
                                    <td>{item.goods.consignmentNumber}</td>
                                </tr>
                                <tr>
                                    <td>Item</td>
                                    <td>{item.goods.asset}</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>{item.description}</td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td>{item.goods.quantity.value+" "+item.goods.quantity.unit}</td>
                                </tr>
                                <tr>
                                    <td>Amount</td>
                                    <td>2{item.amount}</td>
                                </tr>


                            </table>

                        </div>
                          :<></>
                        }
                        {/* <!-- Modal body --> */}
                  



                        {/* <!-- Modal footer --> */}
                        <div class="modal-footer d-flex justify-content-evenly">
                            <input type="number" placeholder="Tenor" onChange={(e)=>setValue(e.target.value)} />
                            <button type="button" class="btn btn-success" onClick={handleRequestMurabaha} >Request Murabaha</button>
                            {/* <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> */}
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}
