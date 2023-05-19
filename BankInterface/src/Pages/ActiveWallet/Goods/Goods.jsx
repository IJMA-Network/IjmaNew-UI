import React, { useState, useContext,useEffect } from 'react'
import Filter from '../../filter/filter'
import './Goods.css'
import GoodState from './GoodsState.json';
import { getData, postData } from '../../../Api/api';
import StoreContext from '.././../../ContextApi';


export default function Goods() {

  const [user, setUser] = useState({ accountName: "",UserAccountNo:"" });

  const [goods, setGoods] = useState([]);
  const [loading, setloading] = useState(true);
  const contextData = useContext(StoreContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(contextData.SignInData, "Good Context Data");

  useEffect(()=> {
    setUser( contextData.SignInData)
    console.log("Sign in in Goods",contextData.SignInData);
    let payload={
        account: user.UserAccountNo,
        consumable: ""
       }
       getData("owned-goods",payload,setGoods);
    },[user])
  GoodState.map((v, i) => { console.log(v, "GoodState") })

  return (
    <div>
      <div class="card card-cascade narrower">
        <Filter />

        <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center"
         style={{ marginTop: "-5%" }}
        >

         

          {/* <a class="white-text mx-3">Allow Access</a> */}

        

        </div>
        <div class="container mt-3">
          <h2 className='text-center'>Goods</h2>

          <table class="table table-hover">
            <thead class="bg-light">
              <tr>
                <th>Consignmento.</th>
                <th>Asset</th>
                <th>Quantity</th>
                <th>Insurance</th>
                <th></th>
              </tr>
            </thead>
            {goods.map((v, i) => {
              return (
                <tbody>
                  <tr>
                    <td>{v.internalReference}</td>
                    <td>{v.asset}</td>
                    <td>{v.quantity.value}</td>
                    <td></td>

                    <td>
                      <span type="button" class="btn btn-warning btn-rounded" data-toggle="modal" data-target="#myModal"
                      //  onClick={() => setClinetID(v._id)}
                      >View</span>
                    </td>

                  </tr>
                </tbody>
              )
            })}


          </table>
        </div>
      </div>


      <div class="modal" id="myModal">
        <div class="modal-dialog modal-dialog-scrollable-sm">
          <div class="modal-content" style={{ width: "115%" }}>

            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h3 class="modal-title">Murabaha Agreements Detail</h3>
              <button type="button" class="btn btn-danger close" data-dismiss="modal">X</button>
            </div>

            {/* <!-- Modal body --> */}
            {GoodState.map((v, i) => {
              return (
                <div class="modal-body">
                  <table id="customers">

                    <tr>
                      <th>Company</th>
                      <th>Contact</th>
                    </tr>
                    <tr>
                      <td>Seller</td>
                      <td>{v.vendor.name}</td>
                    </tr>
                    <tr>
                      <td>Asset</td>
                      <td>{v.description}</td>
                    </tr>
                    <tr>
                      <td>Quantity</td>
                      <td>{v.quantity.value}</td>
                    </tr>
                    <tr>
                      <td>Reedemable</td>
                      <td>Yes</td>
                    </tr>
                    <tr>
                      <td>Issure</td>
                      <td>No</td>
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
