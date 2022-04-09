import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Indicator from "./Indicator";

function Layout(props) {
  return (
    <div>


      <Header />

      {props.spinning && (<Indicator/>)}



      <div className="content">{props.children}</div>



      <Footer />
    </div>
  );
}

export default Layout;