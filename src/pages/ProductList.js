import React, { useState } from "react";

import { getDocs, collection } from "firebase/firestore";
import firedb from "../firebaseConfig";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BsTools} from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { useTranslation } from "react-i18next";

function ProductList() {

  const [products, setproducts]= useState([]);
  const navigate= useNavigate()
  const { cartItems } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const [spinning, setSpinner]= useState(false);
  const {  t } = useTranslation(["common"]);




  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    setSpinner(true)
    try {
      const users = await getDocs(collection(firedb, "products"));
      const productsArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        productsArray.push(obj);
      });

      setproducts(productsArray);
      setSpinner(false)

    } catch (error) {
      console.log(error);
      setSpinner(false)
    }
  }



  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
 



  return (
    <Layout spinning={spinning}>
    <div className="container p-2">
     <hr/>
      <h3> {t("Accessories")}</h3>
      <hr />

      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-3">
              <div className="m-2 p-2 product position relative">
                <div className="product-content">
                  <p>{product.name}</p>
                  <div className="text-center">
                    <img
                      src={product.imageURL}
                      alt=""
                      className="product-img"
                    />
                    <h2>${product.price} </h2>
                  </div>
                  <div className="product-actions">
                    <div className="d-flex justify-content-center ">
                      <button className="login-btn success"
                        onClick={() => {
                          addToCart(product);
                        }}
                      >
                        {t("Add To Cart")}
                      </button>
                      <button 
                      className="signup-btn info"
                        onClick={() => navigate(`/productinfo/${product.id}`)}
                      >
                        {t("View")}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </Layout>
  );
}

export default ProductList;
