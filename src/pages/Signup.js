import React, { useState } from "react";
import {  createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setcPassword] = useState("");
  const auth=getAuth();

  const register= async()=>{
    try {
        
      const result= await createUserWithEmailAndPassword( auth,email, password)
      localStorage.setItem("currentuser", JSON.stringify(result));
      window.location.href = "/";
      console.log(result);
      toast.success(" Registration success")

    } catch (error) {
      console.log(error)
      toast.error("Already have account ?")
      
    }  }
  return (
    <div className="registration-parent">

      <div className="row justify-content center">
        <div className="col-md-5">
          <lottie-player
            src="https://assets8.lottiefiles.com/packages/lf20_jvlBSF.json"
            background="transparent"
            speed=".50"
            loop
            
            autoplay
          >
            
          </lottie-player>
        </div>
        <div className="col-md-4">
        <h1 className="login-page-head">EestiBikes</h1>

          <div className="register-form">
            <h2> Signup </h2>
            <hr />

            <input
              type="text"
              className="form-control mt-2"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="cofirm password"
              value={cpassword}
              onChange={(e) => {
                setcPassword(e.target.value);
              }}
            />

            <button className="signup-btn info" onClick={register}> Signup </button>
            <hr/>
            <Link to="/login" > Go to Login </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
