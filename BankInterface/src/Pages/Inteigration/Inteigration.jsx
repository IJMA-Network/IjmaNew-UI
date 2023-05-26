import React, { useRef, useState, useEffect, useContext } from "react";
import { Form } from "react-bootstrap";
import "./Inteigration.css";
import axios from "axios";
import { createTerm } from "../../Api/api";
import StoreContext from "../../ContextApi";
import { Card, Col, Row } from 'antd';



export default function Inteigration() {
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

    useEffect(() => {
        setBank(contextData.SignInData);

    }, [contextData.SignInData])


    const FormSubmit = () => {
        var profitRate = {
            referenceRate: Rate.current.value,
            spread: Spread.current.value,
        };

        var data = {
            bank: bank.UserAccountNo,
            client: Client.current.value,
            InteigrationReference: Refrense.current.value,
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
                        <input type="serch" name="" id="" />
                    </div>
                </div>
            </div>
            <div style={{ background: "", justifyContent: "end" }} >
                <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B" }}>
                    <table>
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

                <div><img src="https://www.clipartmax.com/png/middle/213-2137186_arrow-thin-up-comments-top-arrow.png" height={50} alt="" srcset="" /></div>
                {/*  */}

                <div style={{ background: "", display: "flex", flexDirection: "row", justifyContent: "" }} >
                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table>
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

                    <div style={{marginTop:"5%"}}><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height={50} alt="" srcset="" /></div>
                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table>
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
                    <div style={{marginTop:"5%"}}><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height={50} alt="" srcset="" /></div>
                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table>
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

                    <div style={{marginTop:"5%"}}><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height={50} alt="" srcset="" />
                    </div>


                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table>
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
                    <div style={{marginTop:"5%"}}><img src="https://cdn-icons-png.flaticon.com/512/109/109617.png" height={50} alt="" srcset="" /></div>
                    <div className="site-card-wrapper" style={{ width: "20%", backgroundColor: "#11366B", color: "white" }}>
                        <table>
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
                    <table>
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
        </div>
    );
}
