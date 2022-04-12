import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import Indicator from "../components/Indicator";
import {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();
  const [spinning, setSpinner]= useState(false);


  const login = async () => {

    try {
      setSpinner(true)

      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("currentuser", JSON.stringify(result));
      window.location.href = "/";
      setSpinner(false)
    } catch (error) {
      console.log(error);
      setSpinner(false)
      toast.error(" Please enter correct Email & Password")
    }
  };

  return (
    <div className="login-parent">
      {spinning && (<Indicator/>)}
      <div className="row justify-content center">
        <div className="col-md-6">
          <lottie-player
            src="https://assets10.lottiefiles.com/packages/lf20_sgnacf85.json"
            background="tranparent"
            speed="0.25"
            loop
            autoplay
          ></lottie-player>
        </div>

        <div className="col-md-4">
          <h1 className="login-page-head">EestiBikes</h1>
          <div className="login-form">
            <h3> Login </h3>
            <hr />

            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              className="form-control mt-2"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button className="login-btn success" onClick={login}>
              {" "}
              Login{" "}
            </button>
           
            <button className="signup-btn info" onClick={() => navigate(`/signup`)}> Signup </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
