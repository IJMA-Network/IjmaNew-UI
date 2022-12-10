import {React,useState,useEffect} from 'react'

import './PurchaesOrder.css';
import {getData,postData} from '../../../Api/Api';
import PurchesOrder from './PurchaesOrderState.json';

export default function PurchaesOrder() {
    const[user,setUser]=useState({accountName:"Seller1"});
    const[pOrders,setpOrders]=useState(PurchesOrder);
    const [item, setItem] = useState(null);
    

    




  useEffect(()=> {
    let payload={
        account: user.accountName,
        consumable: ""
       }
   
getData("received-POs",payload,setpOrders);
},[])


const handleDeliver=async()=>{
    let api="purchaseOrder/deliver";
    let payload={
        stateId: item.processId,
                  account:user.accountName
        }
    console.log("In PO deliver",payload);
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
                <h2 className='text-center'>Purchase Orders Detail</h2>
            <div class="container mt-3">
                        <table class="table table-hover">
                            <thead class="bg-light">
                                <tr>
                                    <th >Date</th>
                                    <th>Refrence No</th>
                                    <th>Bank</th>
                                    <th>Client</th>
                                    <th>Proforma ID</th>
                                    <th>Item</th>
                                    <th>Amount</th>
                                    <th></th>
                                </tr>
                            </thead>
                {pOrders.map((v, i) => {
                    return (


                            <tbody>
                                <tr>
                                    <td>{v.date}</td>
                                    <td>{v.referenceId}</td>
                                    <td>{v.bankAccountInfo.name}</td>
                                    <td>{v.proforma.buyerAccountInfo.name}</td>
                                    <td>{v.applicationId}</td>
                                    <td>{v.proforma.goods.asset}</td>
                                    <td>{v.amount}</td>
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
                            <h3 class="modal-title">Purchase Order Details</h3>
                            <button type="button" class="btn btn-danger close" data-dismiss="modal">X</button>
                        </div>

                        {/* <!-- Modal body --> */}
                      
                        {(item!=null)?
                                <div class="modal-body">
                                    <table id="customers">

                                        <tr>
                                            <th>Company</th>
                                            <th>Contact</th>
                                        </tr>
                                        <tr>
                                            <td>Date</td>
                                            <td>{item.date}</td>
                                        </tr>
                                        <tr>
                                            <td>Refrence No.</td>
                                            <td>{item.referenceId}</td>
                                        </tr>
                                        <tr>
                                            <td>Bank</td>
                                            <td>{item.bankAccountInfo.name}</td>
                                        </tr>
                                        <tr>
                                            <td>Client</td>
                                            <td>Buyer 1</td>
                                        </tr>
                                        <tr>
                                            <td>Proforma Id</td>
                                            <td>{item.applicationId}</td>
                                        </tr>
                                        <tr>
                                            <td>Item</td>
                                            <td>{item.proforma.goods.asset}</td>
                                        </tr>
                                        <tr>
                                            <td>Description</td>
                                            <td>{item.description}</td>
                                        </tr>
                                        <tr>
                                            <td>Quantity</td>
                                            <td>{item.proforma.goods.quantity.value+" "+item.proforma.goods.quantity.unit}</td>
                                        </tr>
                                        <tr>
                                            <td>Amount</td>
                                            <td>{item.amount}</td>
                                        </tr>

                                    </table>

                                </div>
                            :<></>
                        }
                  



                        {/* <!-- Modal footer --> */}
                        <div class="modal-footer">
                            <button type="button" class="btn btn-success" onClick={handleDeliver}>Deliver</button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
