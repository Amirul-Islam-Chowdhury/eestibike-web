import React from "react";
import { InlineWidget } from "react-calendly";
import Layout from "../components/Layout";

export default function Booking() {
  return (

    <Layout>

    <div className="Booking">
      <div>

        <h3> Book you time</h3>
        <div>
          <InlineWidget url="https://calendly.com/aislamchy96/march-availity" />
        </div>
      </div>
    </div>
    </Layout>
  );
}
