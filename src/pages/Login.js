import React ,{useState} from "react";
import { Link } from "react-router-dom";
import {  signInWithEmailAndPassword, getAuth } from "firebase/auth";



function Login() {

  const [ email, setEmail]= useState("");
  const [password, setPassword] =useState("");
  const auth=getAuth();

  const login=async()=>{
    try {
      const result= await signInWithEmailAndPassword( auth,email, password)
      localStorage.setItem("currentuser" ,JSON.stringify(result))
      window.location.href="/"
      alert('Login successful')


    } catch (error) {
      console.log(error)
      alert("Login failed")
      
    }  }

  
  return (
    <div className="login-parent">
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
            <hr/>

            <input type="text" className="form-control" placeholder="Email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            <input type="password" className="form-control mt-2" placeholder="Password" value={password} onChange={(e)=> {setPassword(e.target.value)}}/>

            <button className="btn-success mt-2" onClick={login}> Login </button>
            <hr/>
           <Link to={'/signup'}>Register Here </Link>


            


          </div>

        </div>

        
      </div>
    </div>
  );
}

export default Login;
