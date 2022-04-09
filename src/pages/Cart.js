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
                <td> <FaTrash/></td>
              </tr>

            }
          )}

        </tbody>
      </table>
      
    </Layout>
  );
}

export default Cart;
