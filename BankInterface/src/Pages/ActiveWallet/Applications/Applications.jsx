import { React, useState, useEffect, useContext } from 'react';
import { getData, postData } from '../../../Api/api';
import { ToastContainer, toast } from 'react-toastify';
import { Button, message, Space, Spin } from 'antd';
import StoreContext from "../../../ContextApi";
import JsonData from './Application.json';
import Modal from 'react-bootstrap/Modal';
import Filter from '../../filter/filter';
import './Applications.css';
// pagination import here
import ApplicationsPagination from "../../Pagination";
//
import { executeflow,checkflowresponse,fetchDataflow,formatDate } from "../../../APIs/cordarestapi";

let itemsPerPage = 5;


export default function Applications() {
    const contextData = useContext(StoreContext);
      const[user,setUser]=useState({accountName:"BankNo.1",UserAccountNo:"Bank1",holdingId:"3C6C69360D52"});
    
    const [bank, setBank] = useState({ accountName: "bank1" });
    const [item, setItem] = useState(null);

    // const [applications, setApplications] = useState(JsonData);
    const [filterItem, setfilterItem] = useState(JsonData);

    const [loading, setloading] = useState(true);
    const [show, setShow] = useState(false);

    // new state pagination here
    const [page, setPage] = useState(1);
    const totalPages = Math.ceil(filterItem?.length / itemsPerPage)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
       // setUser(contextData.SignInData);
        console.log("User in Application", contextData.SignInData);
        getApplications();

      //  getData("FilteredApplications", payload, setfilterItem);
    }, [bank])
    async function getApplications(){
      const endpoint="FilteredApplications"
    const reqbody={
    
      account:user.UserAccountNo,
      type:"all"
    }
    const resp= await fetchDataflow(endpoint,reqbody,user.holdingId,setfilterItem);
    }

    const notify = () => toast.success(' Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const handleIssuePurchaseOrder = async () => {

        let endpoint = "IssuePurchaseOrder";
        const holdingId=user.holdingId;
        const bank=user.UserAccountNo;
        setloading(false)

        setTimeout(() => {
            setloading(true) // 1
            handleClose() // 2
           // notify() // 3
        }, 2000);

        let requestbody={

            bank:bank,
            processId:item.processId,
            term:2
          
            
          }
   
      
        console.log("In handle Purchase Order", requestbody);
        const resp = await executeflow(endpoint,requestbody,holdingId)
    }

    // pagination function here
    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const displayedData = filterItem.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );


    console.log(filterItem, "setfilterItemsetfilterItem");
    return (
        // <div>
        <div className="card card-cascade narrower">
            <ToastContainer />

            <Filter data={{ JsonData, setfilterItem }} />

            <div className="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center"
                style={{ marginTop: "-5%" }}
            >

            </div>
            <div className="container mt-3">
                <h2 className='text-center'>Applications</h2>

                <table className="table table-hover">
                    <thead className="bg-light">
                        <tr>
                            <th>Date</th>
                            <th>Application No</th>
                            <th>Applicant</th>
                            <th>Amount</th>
                            <th>Item</th>
                            <th>Tenor</th>
                            <th>View</th>
                        </tr>
                    </thead>

                    {
                        displayedData?.map((v, i) => {
                            return (

                                <tbody>
                                    <tr>
                                       {v.date?
                                 <td>{formatDate(v.date)}</td>
                            :<td>Undated</td>
                                      }
                                        <td>{v?.processId}</td>
                                        <td>{v?.applicant.accountName}</td>
                                        <td>{v?.amount}</td>
                                        <td>{v?.proforma.goods.asset}</td>
                                        <td>{v?.tenor}</td>

                                        <td>
                                            <span type="button" class="btn btn-warning btn-rounded" data-toggle="modal" data-target="#myModal"
                                                onClick={() => handleShow(setItem(v))}
                                            >View</span>
                                        </td>

                                    </tr>
                                </tbody>
                            )
                        })
                    }

                </table>
                {/* pagination use here */}
                <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
                    <ApplicationsPagination count={totalPages} page={page} onChange={handlePageChange} data={filterItem} />
                </div>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Applications Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {/* <!-- Modal body --> */}
                    {(item != null) ?

                        <div className="modal-body">
                            <table id="customers">

                                <tr>
                                    <th>Company</th>
                                    <th>Contact</th>
                                </tr>
                                <tr>
                                    <td>Date.</td>
                               
                                    {item.date?
                                 <td>{formatDate(item.date)}</td>
                            :<td>Undated</td>
                                      }
                                </tr>
                                <tr>
                                    <td>Refrence No.</td>
                                    <td>{item.processId}</td>
                                </tr>
                                <tr>
                                    <td>Bank</td>
                                    <td>{item.issuingBank.accountName}</td>
                                </tr>
                                <tr>
                                    <td>Applicant</td>
                                    <td>{item.applicant.accountName}</td>
                                </tr>
                                <tr>
                                    <td>Amount</td>
                                    <td>{item.amount}</td>
                                </tr>
                                <tr>
                                    <td>Tenor</td>
                                    <td>{item.tenor}</td>
                                </tr>
                                <tr>
                                    <td>Item</td>
                                    <td>{item.proforma.goods.asset}</td>
                                </tr>
                                <tr>
                                    <td>Description</td>
                                    <td>{item.proforma.goods.description}</td>
                                </tr>
                                <tr>
                                    <td>Quantity</td>
                                    <td>{item.proforma.goods.quantity.value + " " + item.proforma.goods.quantity.unit}</td>
                                </tr>


                            </table>

                        </div>
                        : <></>
                    }
                    {/* <Spin size="large" /> */}




                    {/* <!-- Modal footer --> */}

                </Modal.Body>
                {/* <div class="modal-footer d-flex justify-content-evenly"> */}
                <div className="modal-footer">
                    {loading ? <button type="button" className="btn btn-success close" data-dismiss={show} onClick={handleIssuePurchaseOrder} >Issue Purchase Order</button> : <Spin size="large" />}
                </div>
            </Modal>

        </div>

    )
}
