import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Proformas.css";
import { Spin } from 'antd';
import ProformaJsonData from './ProformaJsonData.json';
import { getData } from "../../../Api/Api";
import StoreContext from '../../../ContextApi';
import Filter from "../../filter/filter";


export default function Proformas() {

  const [allData, setallData] = useState([])
  const [loading, setloading] = useState(true);
  ProformaJsonData.map((v, i) => { console.log(v) })

  const contextData = useContext(StoreContext);
  console.log(contextData.SignInData, "Proformas Context Data");

  const handleRequestMurabaha = async () => {
    setloading(false)
    setTimeout(() => {
      setloading(true)
    }, 2000);
  }
  //   var data = {
  //     account: "Seller2",
  //     consumable: "",
  //   };

  //   var apiURLData = "issued-Proformas";

  // useEffect(()=>{

  //   getData(apiURLData, data).then((res) => {  
  //     setallData(res.data)
  //   });

  // },[])


  console.log(allData, "res");

  return (
    <div class="card card-cascade narrower">
      <Filter />
      <div class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center"
        style={{ marginTop: "-4%" }}
      >
        {/* <div>
          <button
            type="button"
            class="btn btn-outline-white btn-rounded btn-sm px-2"
          >
            <i class="fas fa-th-large mt-0"></i>
          </button>
          <button
            type="button"
            class="btn btn-outline-white btn-rounded btn-sm px-2"
          >
            <i class="fas fa-columns mt-0"></i>
          </button>
        </div>

        <a class="white-text mx-3">Allow Access</a>

        <div>
          <button
            type="button"
            class="btn btn-outline-white btn-rounded btn-sm px-2"
          >
            <i class="fas fa-pencil-alt mt-0"></i>
          </button>
          <button
            type="button"
            class="btn btn-outline-white btn-rounded btn-sm px-2"
          >
            <i class="far fa-trash-alt mt-0"></i>
          </button>
          <button
            type="button"
            class="btn btn-outline-white btn-rounded btn-sm px-2"
          >
            <i class="fas fa-info-circle mt-0"></i>
          </button>
        </div> */}
      </div>
      <div class="container mt-3">
        <h2 className="text-center">Proformas</h2>

        <table class="table table-hover">
          <thead class="bg-light">
            <tr>
              <th>Proforma Id</th>
              <th> Date</th>
              <th>Seller </th>
              <th>Buyer</th>
              <th>Item</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {ProformaJsonData.map((v, i) => {
              return (

                <tr>
                  <td>{v.proformaId}</td>
                  <td>{v.date}</td>
                  <td>{v.sellerAccountInfo.name}</td>
                  <td>{v.buyerAccountInfo.name}</td>
                  <td>{v.goods.asset}</td>
                  <td> {v.goods.quantity.value}  {v.goods.quantity.unit} </td>
                  <td>
                    <span
                      type="button"
                      class="btn btn-warning btn-rounded"
                      data-toggle="modal"
                      data-target="#myModal"
                    //  onClick={() => setClinetID(v._id)}
                    >
                      View
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
          {/* {
            PromissoryNote.map((v, i) => {
              return (

              
              )
            })} */}
        </table>
      </div>
      <div class="modal" id="myModal">
        <div class="modal-dialog modal-dialog-scrollable-sm">
          <div class="modal-content" style={{ width: "115%" }}>
            {/* <!-- Modal Header --> */}
            <div class="modal-header">
              <h3 class="modal-title">Proformas Details</h3>
              <button
                type="button"
                class="btn btn-danger close"
                data-dismiss="modal"
              >
                X
              </button>
            </div>
            <div class="modal-body">
              {ProformaJsonData.map((v, i) => {
                return (

                  <table id="customers">
                    <tr>
                      <td>Proforma Id</td>
                      <td>{v.proformaId}</td>
                    </tr>
                    <tr>
                      <td>DATE</td>
                      <td>{v.date}</td>
                    </tr>
                    <tr>
                      <td>Seller </td>
                      <td>{v.sellerAccountInfo.name}</td>
                    </tr>
                    <tr>
                      <td>Buyer</td>
                      <td>{v.buyerAccountInfo.name}</td>
                    </tr>
                    <tr>
                      <td>Item</td>
                      <td>{v.goods.asset}</td>
                    </tr>
                    <tr>
                      <td>Description</td>
                      <td>{v.description}</td>
                    </tr>
                    <tr>
                      <td>Quantity</td>
                      <td> {v.goods.quantity.value}  {v.goods.quantity.unit} </td>
                    </tr>
                    <tr>
                      <td>Amount</td>
                      <td>{v.amount}</td>
                    </tr>

                  </table>
                )
              }

              )}
            </div>
            {/* <!-- Modal body --> */}
            {/* {PromissoryNote.map((v, i) => {
              return (
              
              )
            })} */}

            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              {/* <button
                type="button"
                class="btn btn-success"
                data-dismiss="modal"
              >
                Request Murabaha
              </button> */}
              {loading ? <button type="button" class="btn btn-success" onClick={handleRequestMurabaha} >Request Murabaha</button> : <Spin size="large" />}

              {/* <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
