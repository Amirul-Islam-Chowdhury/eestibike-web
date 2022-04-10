import React from "react";
import Banner from "../components/Banner";

import Layout from "../components/Layout";
import Menu from "../components/Menu";
import About from "./About";

function Home() {
  return (
    <Layout>
      <Banner />

      <Menu />
      <About/>

    </Layout>
  );
}

export default Home;
