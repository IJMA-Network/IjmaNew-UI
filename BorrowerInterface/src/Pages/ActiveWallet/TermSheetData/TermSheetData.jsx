import { React, useState, useEffect, useContext } from 'react';
import './TermSheetData.css';
import { getData, postData } from '../../../Api';
import TermSheetState from './TermSheetState.json';
import Filter from '../../filter/filter';
import StoreContext from '../../../ContextApi';
import { Spin } from 'antd';
import Modal from 'react-bootstrap/Modal';




export default function TermSheetData() {
  const [user, setUser] = useState({ accountName: "Buyer1" });
  const [termsheets, setTermSheets] = useState(TermSheetState);
  const [item, setItem] = useState(null);
  const contextData = useContext(StoreContext);
  const [loading, setloading] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  console.log(contextData.SignInData, "Term Sheet Context Data");

  useEffect(() => {
    let payload = {
      account: user.accountName,
      consumable: ""
    }
    getData("received-TermSheets", payload, setTermSheets);
  }, [])
  const handleReaccept = async () => {
    let api = "termsheet/accept";

    setloading(false)
    setTimeout(() => {
      setloading(true) // 1
      handleClose() // 2
    }, 2000);

    let payload = {

      stateId: item.termSheetReference,
      account: user.accountName
    }
    console.log("In accept TermSheet", payload);
    const resp = await postData(api, payload);
  }


  return (
    <div>
      <div class="card card-cascade narrower">
        <Filter />
        <div
          class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 d-flex justify-content-between align-items-center"
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
          <h2 className='text-center'>Term Sheet Details</h2>

          <table class="table table-hover">
            <thead class="bg-light">
              <tr>
                <th>Bank</th>
                <th>Term Sheet Ref</th>
                <th>Limit</th>
                <th>Tenor</th>
                <th>Rate</th>
                <th>Expire</th>
                <th></th>
              </tr>
            </thead>
            {termsheets.map((v, i) => {
              return (
                <tbody>
                  <tr>
                    <td>{v.bankAccountInfo.name}</td>
                    <td>{v.termSheetReference}</td>
                    <td>{v.limit}</td>
                    <td>{v.tenor}</td>
                    <td>{v.referenceRate}</td>
                    <td>{v.expiryDate}</td>

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
      </div>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Term Sheet Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <!-- Modal body --> */}
          {(item != null) ?

            <div class="modal-body">
              <table id="customers">


                <tr>
                  <td>Bank</td>
                  <td>{item.bankAccountInfo.name}</td>
                </tr>
                <tr>
                  <td>Refernce No</td>
                  <td>{item.termSheetReference}</td>
                </tr>
                <tr>
                  <td>Limit</td>
                  <td>{item.limit}</td>
                </tr>
                <tr>
                  <td>Tenor</td>
                  <td>{item.tenor}</td>
                </tr>
                <tr>
                  <td>Refernce Rate</td>
                  <td>{item.referenceRate}</td>
                </tr>
                <tr>
                  <td>Spread</td>
                  <td>{item.spread}</td>
                </tr>
                <tr>
                  <td>Issue Date</td>
                  <td>{item.issueDate}</td>
                </tr>
                <tr>
                  <td>Expiry Date</td>
                  <td>{item.expiryDate}</td>
                </tr>
                <tr>
                  <td>Acceptance</td>
                  {(item.isAccepted) ?
                    <td>Received</td>
                    :
                    <td>{item.IsAccepted}</td>
                  }
                </tr>


              </table>

            </div>
            : <></>
          }



          {/* <!-- Modal footer --> */}
        </Modal.Body>
        <div class="modal-footer d-flex justify-content-evenly">
          {loading ? <button type="button" class="btn btn-success" onClick={handleReaccept}>Accept Term Sheet</button> : <Spin size="large" />}
        </div>
      </Modal>



    </div>
  )
}
