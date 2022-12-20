import { React, useState, useEffect } from 'react'
import './Promissory.css';
import PromissoryNote from './PromissoryNote.json';
import { getData, postData } from '../../../Api/api';
import Modal from 'react-bootstrap/Modal';
import Filter from '../../filter/filter';
import { ToastContainer, toast } from 'react-toastify';
import { Spin } from 'antd';

export default function Promissory() {
  const [bank, setBank] = useState({ accountName: "Bank1" });
  const [pNotes, setPNotes] = useState(PromissoryNote);
  const [item, setItem] = useState(null);


  const [loading, setloading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    let payload = {
      account: bank.accountName,
      consumable: ""
    }

    getData("issued-PNs", payload, setPNotes);
  }, [])


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

  const handleRedeeem = async () => {
    setloading(false)

    setTimeout(() => {
      setloading(true) // 1
      handleClose() // 2
      notify() // 3
    }, 2000);

    let api = "pNote/burn";
    let payload = {
      applicationId: item.id,
      term: "2",
      insuranceRequired: true,
      account: ""
    }
    console.log("In Redeem PNode", payload);
    const resp = await postData(api, payload);
  }

  return (
    <div class="card card-cascade narrower">
      <ToastContainer />
      <Filter />
      <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center"
        style={{ marginTop: "-5%" }}
      >




      </div>
      <div class="container mt-3">
        <h2 className='text-center'>Promissory Notes</h2>

        <table class="table table-hover">
          <thead class="bg-light">
            <tr>
              <th>Issue Date</th>
              <th>Freference No..</th>
              <th>Issuer</th>
              <th>Payee</th>
              <th>Amount</th>
              <th>Expire Date</th>
              <th></th>
            </tr>
          </thead>
          {
            pNotes.map((v, i) => {
              return (

                <tbody>
                  <tr>
                    <td>{v.issueDate}</td>
                    <td>{v.id}</td>
                    <td>{v.issuerAccount.name}</td>
                    <td>{v.payeeAccount.name}</td>
                    <td>{v.value}</td>
                    <td>{v.maturity}</td>
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
          <Modal.Title>Promissory Details</Modal.Title>
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
                  <td>Issue Date.</td>
                  <td>{item.issueDate}</td>
                </tr>
                <tr>
                  <td>Refrence No.</td>
                  <td>{item.id}</td>
                </tr>
                <tr>
                  <td>Issuer</td>
                  <td>{item.issuerAccount.name}</td>
                </tr>
                <tr>
                  <td>Payee</td>
                  <td>{item.payeeAccount.name}</td>
                </tr>
                <tr>
                  <td>Amount</td>
                  <td>{item.value}</td>
                </tr>
                <tr>
                  <td>Redeemad</td>
                  <td>Yes</td>
                </tr>
                <tr>
                  <td>Expiry</td>
                  <td>{item.maturity}</td>
                </tr>

              </table>

            </div>
            : <></>
          }

          {/* <!-- Modal footer --> */}
        </Modal.Body>
        {/* <div class="modal-footer d-flex justify-content-evenly"> */}
        <div class="modal-footer">
          {loading ? <button type="button" class="btn btn-success close" data-dismiss={show} onClick={handleRedeeem} >Redeeem</button> : <Spin size="large" />}
        </div>
      </Modal>
    </div>

  )
}
