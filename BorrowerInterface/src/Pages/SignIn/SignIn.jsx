import React, { useRef, useState, useContext } from "react";
import "./SignIn.css";
import ijma from '../../Images/Ijma.png'
import { useNavigate } from "react-router-dom"
import axios from "axios";
import StoreContext from '../../ContextApi';
import { Button, message, Space } from 'antd'




export default function SignIn() {

  let UserId = useRef()
  let UserName = useRef()
  let UserPassword = useRef()

  const contextData = useContext(StoreContext);
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const key = 'updatable';
  const openMessage = () => {
    messageApi.open({
      key,
      type: 'loading',
      content: 'Loading...',
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: 'this is a successfully login!',
        duration: 2,
      });
    }, 1000);
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };
  const handleClick = () => {

    axios({
      method: "post",
      url: "https://sign-api-boiler-plate.vercel.app/UserSignIn",
      data: {
        UserId: UserId.current.value,
        UserName: UserName.current.value,
        UserPassword: UserPassword.current.value
      }
    }).then((res) => {
      console.log(res);
      // localStorage.setItem("SiginData", JSON.stringify(res))
      // alert("Login Successfully!")
      openMessage()
      contextData.setSignInData(res.data);


    }).catch((err) => {

      console.log(err, "employee not found");
    })

  };
  console.log(contextData, "contextData");
  return (

    <div id="SignIn">
      {contextHolder}
      <div class="container h-100">
        <div class="d-flex justify-content-center h-100">
          <div class="user_card">
            <div class="d-flex justify-content-center">
              <div class="brand_logo_container">
                <img
                  src={ijma}
                  class="brand_logo"
                  alt="Logo"
                />
              </div>
            </div>
            <div class="d-flex justify-content-center form_container">
              <form onSubmit={(e) => {
                e.preventDefault();
                handleClick();
              }}
              >
                <br />
                <div class="input-group mb-3">
                  <div class="input-group-append">

                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control input_user"
                    placeholder="User Id"
                    ref={UserId}
                    required
                  />
                </div>

                <div class="input-group mb-3">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fas fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control input_user"
                    placeholder="User Name"
                    ref={UserName}
                    required
                  />
                </div>
                <div class="input-group mb-2">
                  <div class="input-group-append">
                    <span class="input-group-text">
                      <i class="fas fa-key"></i>
                    </span>
                  </div>
                  <input
                    type="password"
                    class="form-control input_pass"
                    placeholder="User Password"
                    ref={UserPassword}
                    required
                  />
                </div>

                <div class="form-group">
                  <div class="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      class="custom-control-input"
                      id="customControlInline"
                    />
                    <label
                      class="custom-control-label"
                      for="customControlInline"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div class="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" name="button" class="btn login_btn">Sign In</button>
                </div>
              </form>
            </div>

            <div class="mt-4">
              <div class="d-flex justify-content-center links">
                Don't have an account?{" "}
                <a href="#" class="ml-2">
                  Sign Up
                </a>
              </div>
              <div class="d-flex justify-content-center links">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
