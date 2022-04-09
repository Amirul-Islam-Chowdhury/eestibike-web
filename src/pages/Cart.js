import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { FaTrash } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import { addDoc, collection } from "firebase/firestore";
import firedb from "../firebaseConfig";

function Cart() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");

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

  const placeorder = async () => {
    const addressInfo = {
      name,
      address,
      number,
    };
    console.log(addressInfo);

    const orderInfo = {
      cartItems,
      addressInfo,
      email: JSON.parse(localStorage.getItem("currentuser")).user.email,
      userid: JSON.parse(localStorage.getItem("currentuser")).user.uid,
    };
    try {
      const result = await addDoc(collection(firedb, "orders"), orderInfo);
      alert(" Order placed successfully");
      handleClose();
    } catch (error) {
      alert("failed!");
    }
  };
  return (
    <Layout>
      <table className="table">
        <thead>
          <tr></tr>
          <th>name</th>
          <th>image</th>
          <th>price</th>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <tr>
                <td>
                  <img src={item.imageURL} height="80" width="80" />
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
        <button onClick={handleShow}> Request Item</button>
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
              placeholder="Email"
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
          <button onClick={handleClose}>Close</button>
          <button onClick={placeorder}>Confirm Order</button>
        </Modal.Footer>
      </Modal>
    </Layout>
  );
}

export default Cart;
