import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { FaTrash } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import firedb from "../firebaseConfig";

function Cart() {

  const { cartItems } = useSelector((state) => state.cartReducer);
  const [total, setTotal] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    let temp = 0;
    cartItems.forEach((cartItem) => {
      temp = temp + cartItem.price;
    });
    setTotal(temp);
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const deleteFromCart = (product) => {
    dispatch({ type: "DELETE_FROM_CART", payload: product });
  };



  
  return (

    
    
    <Layout>

      <table className="table">
        <thead>
          <tr>
            <th>
              image
            </th>
            <th>
              name
            </th>
            <th>
              price
            </th>
          </tr>
        </thead>

        <tbody>
          {
            cartItems.map(item=>{

              return<tr>
                <td> <img src={item.imageURL} height="60" width="60"/></td>
                <td> {item.name}</td>
                <td> {item.price}</td>
                <td> <FaTrash onClick={() => deleteFromCart(item)}/></td>
              </tr>

            }
          )}

        </tbody>
      </table>

      <div className="d-flex justify-content-end p-4">
        <h1> Total = $ {total} </h1>
      </div>
      <div className="d-flex justify-content-end p-4">
        <button> Place Order </button>
      </div>

      
      
    </Layout>
  );
}

export default Cart;
