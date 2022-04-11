import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { FaTrash } from "react-icons/fa";
import {Modal} from 'react-bootstrap'
import {addDoc, collection} from "firebase/firestore"
import firedb from "../firebaseConfig";
import { toast } from "react-toastify";

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number,setNumber] = useState("");

  
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

  const placeorder = async ()=> {

    const addressInfo={
      name,
      address,
      number
    };
    console.log(addressInfo)

    const orderInfo={
      cartItems,
      addressInfo,
      email: JSON.parse(localStorage.getItem("currentuser")).user.email,
      userid: JSON.parse(localStorage.getItem("currentuser")).user.uid
    }
    try {

      const result= await addDoc(collection(firedb , "orders"), orderInfo)
      console.log(result)
      toast.success("Order Placed")
      handleClose()
    } catch (error) {
      toast.error("You have confirmed order without infomation !")

    }


  }
  return (
    <Layout>
      <table className="table p-2">
        <thead>
          
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr>
                <td>
                  <img src={item.imageURL} height="80" width="80"  alt=""/>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>
                  <FaTrash onClick={() => deleteFromCart(item)} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="d-flex justify-content-end p-4">
        <h1> Total = $ {total} </h1>
      </div>
      <div className="d-flex justify-content-end p-4">
        <button className="btn-outline-success btn-lg" onClick={handleShow}> Next </button>

      </div>




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>INFORMATION </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          
          <div className="register-form">
            <hr />

            <input
              type="text"
              className="form-control mt-2"
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder=" Address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            />
            <input
              type="text"
              className="form-control mt-2"
              placeholder="Phone number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
              }}
            />
            </div>
          
           </Modal.Body>
        <Modal.Footer>
          <button  className="btn-outline-danger" onClick={handleClose}>
            Close
          </button>
          <button className="btn-outline-success" onClick={placeorder}>

            Place Order
          </button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export default Cart;
