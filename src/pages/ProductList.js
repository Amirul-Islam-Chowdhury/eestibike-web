import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getDocs, collection } from "firebase/firestore";
import firedb from "../firebaseConfig";
import { useEffect } from "react";
import{ useTranslation} from "react-i18next";
import { BsTools} from "react-icons/bs";


function ProductList() {
  const [products, setproducts] = useState([]);
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();

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

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);


const {t}=useTranslation(["common"]);
  return (
    <div className="container p-2">
     <hr/>
      <h3> <BsTools/> {t("Accessories")}</h3>
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
                        onClick={() => {
                          addToCart(product);
                        }}
                      >
                        Add to cart
                      </button>
                      <button 
                      className="btn-secondary"
                        onClick={() => navigate(`/productinfo/${product.id}`)}
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
