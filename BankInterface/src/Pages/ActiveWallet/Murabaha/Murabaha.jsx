import { React, useState, useEffect, useContext } from 'react'
import './Murabaha.css'
import JsonData from './MurbahaState.json'
import { getData, postData } from '../../../Api/api'
import Modal from 'react-bootstrap/Modal';
import { Spin } from 'antd';
import { ToastContainer, toast } from 'react-toastify';
import StoreContext from '.././../../ContextApi';
import Filter from './filter';


export default function Murabaha() {
    const contextData = useContext(StoreContext);
    const [user, setUser] = useState({ accountName: "", UserAccountNo: "" });
    const [filterItem, setfilterItem] = useState(JsonData);
    const [item, setItem] = useState(null);

    const [loading, setloading] = useState(true);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setUser(contextData.SignInData)
        let payload = {
            account: user.UserAccountNo,
            consumable: ""
        }
        getData("issued-murabaha", payload, setfilterItem);
    }, [user])

    const notify = () => toast.success('🦄 Successfully completed Transaction', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const handleMurabahaOffer = async () => {

        setloading(false)

        setTimeout(() => {
            setloading(true) // 1
            handleClose() // 2
            notify() // 3
        }, 2000);

        let api = "murabaha/offer";
        let payload = {
            stateId: item.internalReference,

            account: user.UserAccountNo,
        }
        console.log("In murabaha/offer", payload);
        const resp = await postData(api, payload);
    }




    return (
        <div class="card card-cascade narrower">
            <ToastContainer />

            <Filter data={{ JsonData, setfilterItem }} />
            <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center"
                style={{ marginTop: "-5%" }}
            >


            </div>
            <div class="container mt-3">
                <h2 className='text-center'>Murabaha Contact</h2>
                <table class="table table-hover">
                    <thead class="bg-light">
                        <tr>
                            <th >Date</th>
                            <th>Refrence No</th>
                            <th>Bank</th>
                            <th>Borrower</th>
                            <th>Term</th>
                            <th>Cost Price</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    {filterItem.map((v, i) => {

                        return (
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
                                    <td>Medicines</td> */}
                                    <td>unSigned</td>

                                    <td>
                                        <span type="button" class="btn btn-warning btn-rounded" data-toggle="modal" data-target="#myModal"
                                            onClick={() => handleShow(setItem(v))}
                                        >View</span>
                                    </td>

                                </tr>
                            </tbody>
                        )
                    })}
                </table>
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Murabaha Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <!-- Modal body --> */}
                    {(item != null) ?

                        <div class="modal-body">
                            <table id="customers">

                                <tr>
                                    <th>Company</th>
                                    <th>Contact</th>
                                </tr>
                                <tr>
                                    <td>Date</td>
                                    <td>{item.agreementDate}</td>
                                </tr>
                                <tr>
                                    <td>Refrence No.</td>
                                    <td>{item.internalReference}</td>
                                </tr>
                                <tr>
                                    <td>Bank</td>
                                    <td>{item.bankAccountInfo.name}</td>
                                </tr>
                                <tr>
                                    <td>Applicant</td>
                                    <td>{item.borrowerAccountInfo.name}</td>
                                </tr>
                                <tr>
                                    <td>Cost Price</td>
                                    <td>{item.costPrice}</td>
                                </tr>
                                <tr>
                                    <td>Tenor</td>
                                    <td>{item.term}</td>
                                </tr>
                                <tr>
                                    <td>Selling Price</td>
                                    <td>{item.sellingprice}</td>
                                </tr>
                                <tr>
                                    <td>Profile Rate</td>
                                    <td>{item.profitrate}</td>
                                </tr>
                                <tr>
                                    <td>Item</td>
                                    <td>{item.goods.asset}</td>
                                </tr>
                                <tr>
                                    <td>Bank Signature</td>
                                    {(item.bankSignature) ?
                                        <td>Signed</td>
                                        :
                                        <td>Un Signed</td>
                                    }
                                </tr>
                                <tr>
                                    <td>Brorower Signature</td>
                                    {(item.borrowerSignature) ?
                                        <td>Signed</td>
                                        :
                                        <td>Un Signed</td>
                                    }
                                </tr>

                            </table>

                        </div>
                        : <></>
                    }



                    {/* <!-- Modal footer --> */}

                </Modal.Body>
                <div class="modal-footer">
                    {loading ? <button type="button" class="btn btn-success close" data-dismiss={show} onClick={handleMurabahaOffer} >Offer</button> : <Spin size="large" />}
                </div>
            </Modal>

        </div>
    )
}
