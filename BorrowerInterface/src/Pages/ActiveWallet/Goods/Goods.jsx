import React, { useState, useContext } from 'react'
import Filter from '../../filter/filter';
import './Goods.css';
import GoodState from './GoodsState.json';
import { ToastContainer, toast } from 'react-toastify';
import StoreContext from '../../../ContextApi';


export default function Goods() {
  const [goods, setGoods] = useState(GoodState);

  const contextData = useContext(StoreContext);
  console.log(contextData.SignInData, "Good Context Data");


  goods.map((v, i) => { console.log(v, "GoodState") })
  // const notify = () => toast.success('🦄 Wow so easy!', {
  //   position: "top-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   progress: undefined,
  //   theme: "light",
  // })

  return (
    <div>
      <div class="card card-cascade narrower">
        <Filter />
        <div
          class="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 d-flex justify-content-between align-items-center"
          style={{ marginTop: "-4%" }}
        >
          {/* <div>
            <button onClick={notify}>I eill try Notify !</button>
            <ToastContainer />
          </div> */}
          {/* <div>
            <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
              <i class="fas fa-th-large mt-0 text-black"></i>
            </button>
            <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
              <i class="fas fa-columns mt-0 text-black"></i>
            </button>
          </div>

          <div>
            <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
              <i class="fas fa-pencil-alt mt-0 t text-black"></i>
            </button>
            <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
              <i class="far fa-trash-alt mt-0 text-black" ></i>
            </button>
            <button type="button" class="btn btn-outline-white btn-rounded btn-sm px-2">
              <i class="fas fa-info-circle mt-0 text-black"></i>
            </button>
          </div> */}

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
                    <td>Yes</td>

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
              <h3 class="modal-title">Goods  Detail</h3>
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
                      <td>Vendor</td>
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
                      <td>Insured</td>
                      <td>Yes</td>
                    </tr>


                  </table>

                </div>
              )
            })}



            {/* <!-- Modal footer --> */}
            <div class="modal-footer">
              <button type="button" class="btn btn-success" data-dismiss="modal">Redeem</button>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}
