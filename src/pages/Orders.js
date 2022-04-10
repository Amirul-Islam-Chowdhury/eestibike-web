import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Layout from "../components/Layout";
import { getDocs, collection } from "firebase/firestore";
import firedb from "../firebaseConfig";
import { useTranslation } from "react-i18next";

function Orders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const result = await getDocs(collection(firedb, "orders"));
      const ordersArray = [];
      result.forEach((doc) => {
        ordersArray.push(doc.data());
      });

      setOrders(ordersArray);
    } catch (error) {
      console.log(error);
    }
  }
  const { t } = useTranslation(["common"]);

  return (
    <Layout>
      <h2 className="mt-2"> {t("Orders History")}</h2>
      <hr/>
      {orders.map((order) => {
        return (
          <table className="table m-3">
            <thead>
              <tr></tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
            </thead>
            <tbody>
              {order.cartItems.map((item) => {
                return (
                  <tr>
                    <td>
                      <img src={item.imageURL} alt ="" height="80" width="80" />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
      })}
    </Layout>
  );
}

export default Orders;
