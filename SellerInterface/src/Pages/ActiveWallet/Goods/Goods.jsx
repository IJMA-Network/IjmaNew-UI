import React, { useState, useContext,useEffect } from 'react';
import './Goods.css';
import { getData, postData } from '../../../Api/Api';
import GoodState from './GoodsState.json';
import Filter from "../../filter/filter";
import StoreContext from '../../../ContextApi';

import { Spin } from 'antd';

export default function Goods() {

  const [user, setUser] = useState({ accountName: "",UserAccountNo:"" });

   const [goods, setGoods] = useState([]);
   const [item, setItem] = useState({});

   goods.map((v, i) => { console.log(v, "GoodState") })

  const [loading, setloading] = useState(true);
  const contextData = useContext(StoreContext);
  console.log(contextData.SignInData, "Good Context Data");

  useEffect(() => {
    setUser(contextData.SignInData);
    let payload = {
        account: user.UserAccountNo,
        consumable: ""
    }
    getData("owned-goods", payload, setGoods);
    console.log("POs in seller PO",goods);
}, [user])


  const Redeem = () => {
    setloading(false)
    setTimeout(() => {
      setloading(true)
    }, 2000);
  }


  return (
    <div>
      <div class="card card-cascade narrower">
        <Filter />
        <div
          class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4  d-flex justify-content-between align-items-center"
          style={{ marginTop: "-4%" }}>
          {/* <div>
            <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
              <i class="fas fa-th-large mt-0"></i>
            </button>
            <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
              <i class="fas fa-columns mt-0"></i>
            </button>
          </div>

          <a class="white-text mx-3">Allow Access</a>

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
          <h2 className='text-center'>Goods</h2>

          <table class="table table-hover">
            <thead class="bg-light">
              <tr>
                <th>Asset</th>
                <th>Consignment Number</th>
                <th>Description</th>
                <th>Redeemable</th>
                <th>Quantity</th>
                <th></th>
              </tr>
            </thead>
            {goods.map((v, i) => {
              return (
                <tbody>
                  <tr>
                    <td>{v.asset}</td>
                    <td>{v.consignmentNumber}</td>
                    <td>{v.description}</td>
                    <td>{v.isRedeemable}</td>
                    <td>{v.quantity.unit} {v.quantity.value}</td>
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
                      <td>Asset</td>
                      <td>{v.asset}</td>
                    </tr>
                    <tr>
                      <td>Consignment Number</td>
                      <td>{v.consignmentNumber}</td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{v.description}</td>
                    </tr>
                    <tr>
                      <td>Reedemable</td>
                      <td>{v.isRedeemable}</td>
                    </tr>
                    <tr>
                      <td>Quantity</td>
                      <td>{v.quantity.unit} {v.quantity.value}</td>
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
