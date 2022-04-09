import "./App.css";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Productinfo from './pages/Productinfo'
import Signup from "./pages/Signup";
import Booking from "./pages/Booking";

import "./style/layout.css"
import "./style/home.css"
import "./style/product.css"
import "./style/banner.css"
import "./style/login.css"

import {
  Routes,
  BrowserRouter as Router,
  Navigate,
  Route,
  BrowserRouter,
} from "react-router-dom";
import ProductList from "./pages/ProductList";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <BrowserRouter>
        <Routes>
          <Route path="/" excact element={ 

            <ProtectedRoutes> <Home /></ProtectedRoutes>

            }/>
           
          <Route path="/about" excact element={ <ProtectedRoutes> <About /></ProtectedRoutes>}/>
          <Route path="/cart" excact element={ <ProtectedRoutes> <Cart /></ProtectedRoutes>}/>
          <Route path="/login" excact element={<Login />}/>
          <Route path="/productlist" excact element={ <ProtectedRoutes> <ProductList /></ProtectedRoutes>}/>
          <Route path="/productinfo/:id" excact element={ <ProtectedRoutes> <Productinfo /></ProtectedRoutes>}/>
          <Route path="/signup" excact element={< Signup />}/>
          <Route path="/booking" excact element={< Booking />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

export const ProtectedRoutes =({children})=>{
  if (localStorage.getItem("currentuser")){
    return children;
  } else
  {
    return <Navigate to="/login"/>
  }

}