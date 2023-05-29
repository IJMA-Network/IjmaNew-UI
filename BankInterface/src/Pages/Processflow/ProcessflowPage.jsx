import React, { useRef, useState, useEffect, useContext } from "react";
import "./Processflow.css";
import axios from "axios";
import { createTerm } from "../../Api/api";
import StoreContext from "../../ContextApi";
import Modal from 'react-bootstrap/Modal';
import { Spin } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import flowData from './Processflow.json';


export default function Processflow() {


    const contextData = useContext(StoreContext);
    const [bank, setBank] = useState({ accountName: "Bank1" });
    const [loading, setloading] = useState(true);
    const [show, setShow] = useState(false);
    //   const [NodeName, setNodeName] = useState("ABC Bank");
    const [showOne, setShowOne] = useState(false);
    const [PromissoryData, setPromissoryData] = useState(flowData[4].state.data);
    const [showTwo, setShowTwo] = useState(false);
    const [showThree, setShowThree] = useState(false);
    const [showFour, setShowFour] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    console.log(PromissoryData, "rrr")
    console.log(flowData[0].state.data.date, "data 0 index===000");
    // console.log(flowData[1].state.data.id, "data 1 index===111");
    // console.log(flowData[2].state.data.date, "data 2 index===222");
    // console.log(flowData[3].state.data.date, "data 3 index===333");
    // console.log(flowData[4].state.data.date, "data 4 index===444");

    useEffect(() => {
        setBank(contextData.SignInData);

        (flowData[0].state.data.date === undefined) ? setShowOne(false) : setShowOne(true)
        //  (flowData[0].state.data.date===undefined)?setshowTwo(false):setshowTwo(true)
        //  (flowData[0].state.data.date===undefined)?setShowOne(false):setShowOne(true)
        //  (flowData[0].state.data.date===undefined)?setShowOne(false):setShowOne(true)
        //  (flowData[0].state.data.date===undefined)?setShowOne(false):setShowOne(true)
    }, [contextData.SignInData])




    function handleTerm(params) {

        setloading(false)

        setTimeout(() => {
            setloading(true) // 1
            handleClose() // 2
            notify() // 3
        }, 100);
    }

    const notify = () => toast.success('🦄 Successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    return (
        <div class="container-fluid px-1 py-5 mx-auto">
            <div class="row d-flex justify-content-center">
                <div class="col-xl-7 col-lg-8 col-md-9 col-11 ">
                    {/* <h3>Issue Term Sheet</h3>
                        <p class="blue-text">Just a few Ijma Sheet<br /> so that we can personalize the right experience for you.</p> */}
                    <h3 className="text-center">Issue Term Sheet</h3>
                    <div class="card ">
                        {/* <p class="blue-text text-center">Just a few Ijma Sheet<br /> so that we can personalize the right experience for you.</p> */}
                        <input type="serch" name="" id="" />
                    </div>
                </div>
            </div>
            <div style={{ background: "", justifyContent: "end" }} >
                <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                    <table onClick={() => handleShow()}>
                        <tr>
                            <td>Promissory Note</td>
                        </tr>
                        <tr>
                            <td>{flowData[4].state.data.id}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                        </tr>
                        <tr>
                            <td>{flowData[4].state.data.issueDate}</td>
                        </tr>
                    </table>
                </div>


                <div><img src="https://www.clipartmax.com/png/middle/213-2137186_arrow-thin-up-comments-top-arrow.png" height={50} alt="" srcset="" /></div>

                <div style={{ background: "", display: "flex", flexDirection: "row", justifyContent: "" }} >
                    {(showOne === true) ?
                        <>
                            <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                                <table onClick={() => handleShow()}>
                                    <tr>
                                        <td>Proforma</td>
                                    </tr>
                                    <tr>
                                        <td>{flowData[0].state.data.proformaId}</td>
                                    </tr>
                                    <tr>
                                        <td>Date</td>
                                    </tr>
                                    <tr>
                                        <td>{flowData[0].state.data.date}</td>
                                    </tr>
                                </table>
                            </div>
                        </>
                        : <></>}


                    <div style={{ marginTop: "5%" }}><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height={50} alt="" srcset="" /></div>
                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table onClick={(e) => handleShow(flowData[4].state.data)}>
                            <tr>
                                <td>Application</td>
                            </tr>
                            <tr>
                                <td>Ref : {flowData[1].state.data.referenceId}</td>
                            </tr>
                            <tr>
                                <td>Date </td>
                            </tr>
                            <tr>
                                <td>{flowData[1].state.data.date}</td>
                            </tr>
                        </table>
                    </div>
                    <div style={{ marginTop: "5%" }}><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height={50} alt="" srcset="" /></div>
                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table onClick={() => handleShow()}>
                            <tr>
                                <td>Purchase Order</td>
                            </tr>
                            <tr>
                                <td>Ref : {flowData[2].state.data.referenceId}</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>{flowData[2].state.data.date}</td>
                            </tr>
                        </table>
                    </div>

                    <div style={{ marginTop: "5%" }}><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height={50} alt="" srcset="" />
                    </div>


                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table onClick={() => handleShow()}>
                            <tr>
                                <td>Murabha</td>
                            </tr>
                            <tr>
                                <td>Ref</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>{flowData[4].state.data.date}</td>
                            </tr>
                        </table>
                    </div>


                    <div style={{ marginTop: "5%" }}><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height={50} alt="" srcset="" /></div>
                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table onClick={() => handleShow()}>
                            <tr>
                                <td>Good</td>
                            </tr>
                            <tr>
                                <td>Ref</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                            </tr>
                            <tr>
                                {/* <td>{flowData[5].state.data.date}</td> */}
                            </tr>
                        </table>
                    </div>
                </div>

                {/*  */}

                <div><img src="https://www.clipartmax.com/png/middle/213-2137186_arrow-thin-up-comments-top-arrow.png" height={50} alt="" srcset="" /></div>

                <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                    <table onClick={() => handleShow()}>
                        <tr>
                            <td>Invoice</td>
                        </tr>
                        <tr>
                            <td>Ref</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                        </tr>
                        <tr>
                            {/* <td>{flowData[0].state.data.date}</td> */}
                        </tr>
                    </table>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <!-- Modal body --> */}
                    <div class="modal-body">
                        <table id="customers">

                            <tr>
                                <th>Company</th>
                                <th>Contact</th>
                            </tr>
                            <tr>
                                <td>Issue Date.</td>
                                <td>{PromissoryData.issueDate}</td>
                            </tr>
                            <tr>
                                <td>Refrence No.</td>
                                <td>{PromissoryData.id}</td>
                            </tr>
                            <tr>
                                <td>Issuer</td>
                                <td>{PromissoryData.issuerAccount.name}</td>
                            </tr>
                            <tr>
                                <td>Payee</td>
                                <td>{PromissoryData.payeeAccount.name}</td>
                            </tr>

                            <tr>
                                <td>Amount</td>
                                <td>{PromissoryData.value}</td>
                            </tr>
                            <tr>
                                <td>Redeemad</td>
                                <td>Yes</td>
                            </tr>
                            <tr>
                                <td>Expiry</td>
                                <td>{PromissoryData.maturity}</td>
                            </tr>

                        </table>
                    </div>
                </Modal.Body>
                <div class="modal-footer">
                    {loading ? <button type="button" class="btn btn-danger close" data-dismiss={show} onClick={handleTerm}>Close</button> : <Spin size="large" />}
                </div>
            </Modal>
        </div>
    );
}
