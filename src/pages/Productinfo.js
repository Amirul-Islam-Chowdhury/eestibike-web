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
  }, []);

  async function getData() {
    try {
      const productTemp = await getDoc(doc(firedb, "products", params.id));

      console.log(productTemp.data);
      setproduct(productTemp.data());
    } catch (error) {
      console.log(error);
    }
  }

  return (
      <div className="conatiner">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {product && (
              product.name
            )}
          </div>
        </div>
      </div>
  );
}

export default Productinfo;
