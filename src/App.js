import "./App.css";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Login from "./pages/Login";

import "./style/layout.css"

import {
  Routes,
  BrowserRouter as Router,
  Navigate,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" excact element={<Home />}></Route>
          <Route path="/about" excact element={<About />}></Route>
          <Route path="/cart" excact element={<Cart />}></Route>
          <Route path="/login" excact element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
