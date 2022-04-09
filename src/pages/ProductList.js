import React, { useState } from "react";

import { getDocs, collection } from "firebase/firestore";
import firedb from "../firebaseConfig";
import { useEffect } from "react";
import { BsTools} from "react-icons/bs";


function ProductList() {

  const [products, setproducts]= useState([]);
 

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
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

      console.log(productsArray);
    } catch (error) {
      console.log(error);
    }
  }

  
 



  return (
    <div className="container p-2">
     <hr/>
      <h3> Accessories</h3>
      <hr />

      <div className="row">
        {products.map((product) => {
          return (
            <div className="col-md-3">
              <div className="m-2 p-2 product position relative">
                <div className="product-content" key={product.id}>
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
                      <button className="btn-primary"
                        // onClick={() => {
                        //   addToCart(product);
                        // }}
                      >
                        Add to cart
                      </button>
                      <button 
                      // className="btn-secondary"
                      //   onClick={() => navigate(`/productinfo/${product.id}`)}
                      >
                        View{" "}
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
  );
}

export default ProductList;
