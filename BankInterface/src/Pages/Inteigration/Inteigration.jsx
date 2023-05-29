import React, { useRef, useState, useEffect, useContext } from "react";
import "./Inteigration.css";
import axios from "axios";
import { createTerm } from "../../Api/api";
import StoreContext from "../../ContextApi";
import Modal from 'react-bootstrap/Modal';
import { Spin } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import ApplictionState from '../ActiveWallet/Applications/Application.json';


export default function Inteigration() {
console.log(ApplictionState[0],"ApplictionState");
    const contextData = useContext(StoreContext);
    const [bank, setBank] = useState({ accountName: "Bank1" });
    //   const [NodeName, setNodeName] = useState("ABC Bank");
    //   const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    useEffect(() => {
        setBank(contextData.SignInData);

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
                            <td>Ref</td>
                        </tr>
                        <tr>
                            <td>{ApplictionState[0].referenceId}</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                        </tr>
                        <tr>
                            <td>{ApplictionState[0].date}</td>
                        </tr>
                    </table>
                </div>

                <div><img src="https://www.clipartmax.com/png/middle/213-2137186_arrow-thin-up-comments-top-arrow.png" height={50} alt="" srcset="" /></div>
                {/*  */}

                <div style={{ background: "", display: "flex", flexDirection: "row", justifyContent: "" }} >
                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table onClick={() => handleShow()}>
                            <tr>
                                <td>Proforma</td>
                            </tr>
                            <tr>
                                <td>Ref</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>5/26/2023</td>
                            </tr>
                        </table>
                    </div>

                    <div style={{ marginTop: "5%" }}><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height={50} alt="" srcset="" /></div>
                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table onClick={() => handleShow()}>
                            <tr>
                                <td>Proforma</td>
                            </tr>
                            <tr>
                                <td>Ref</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>5/26/2023</td>
                            </tr>
                        </table>
                    </div>
                    <div style={{ marginTop: "5%" }}><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height={50} alt="" srcset="" /></div>
                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table onClick={() => handleShow()}>
                            <tr>
                                <td>Proforma</td>
                            </tr>
                            <tr>
                                <td>Ref</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>5/26/2023</td>
                            </tr>
                        </table>
                    </div>

                    <div style={{ marginTop: "5%" }}><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height={50} alt="" srcset="" />
                    </div>


                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table onClick={() => handleShow()}>
                            <tr>
                                <td>Proforma</td>
                            </tr>
                            <tr>
                                <td>Ref</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>5/26/2023</td>
                            </tr>
                        </table>
                    </div>
                    <div style={{ marginTop: "5%" }}><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height={50} alt="" srcset="" /></div>
                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table onClick={() => handleShow()}>
                            <tr>
                                <td>Proforma</td>
                            </tr>
                            <tr>
                                <td>Ref</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>5/26/2023</td>
                            </tr>
                        </table>
                    </div>
                </div>

                {/*  */}
                <div><img src="https://www.clipartmax.com/png/middle/213-2137186_arrow-thin-up-comments-top-arrow.png" height={50} alt="" srcset="" /></div>

                <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B" }}>
                    <table onClick={() => handleShow()}>
                        <tr>
                            <td>Proforma</td>
                        </tr>
                        <tr>
                            <td>Ref</td>
                        </tr>
                        <tr>
                            <td>Date</td>
                        </tr>
                        <tr>
                            <td>5/26/2023</td>
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
                                <th>A</th>
                            </tr>
                            <tr>
                                <td>ref</td>
                                <td>{ApplictionState[0].referenceId}</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>{ApplictionState[0].date}</td>
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
