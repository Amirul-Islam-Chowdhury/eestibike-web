import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getDoc, doc } from "firebase/firestore";
import firedb from "../firebaseConfig";
import { useParams } from "react-router";

function Productinfo() {
  const [product, setproduct] = useState();
  const params = useParams();

  useEffect(() => {
    getData();
  }, );

  async function getData() {
    try {
      const productTemp = await getDoc(doc(firedb, "products", params.id));


      console.log(productTemp.data())

      setproduct(productTemp.data());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Layout>
      <div className="conatiner">
        <div className="row justify-content-center mt-5">
          <div className="col-md-8">
            {product && (
              <div>
                <h5>{product.name}</h5>
                <img
                  src={product.imageURL}
                  alt=""  
                  className="product-info-img mt-5" 
                />
                <hr />
                <p>{product.description}</p>
                <div className="d-flex  mt-9">
                  
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Productinfo;
