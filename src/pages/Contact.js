import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <h1 className=" mt-2"> Contact</h1>
      <hr />


      <div className="contact-details">

        <p> <b>Phone </b>: 53704066 </p>
        <p> <b>Email </b>: aislamchy96@gmail.com </p>
 
        

      </div>
      <hr/>
      
      <div className="address">


        <h3> Here you will find us</h3>

     

        <iframe title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2029.2555704303336!2d24.760915615938195!3d59.42881201008427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294a6da03c45b%3A0x13e7b2f905a66761!2sLiivam%C3%A4e%203%2C%2010132%20Tallinn!5e0!3m2!1sen!2see!4v1649591053565!5m2!1sen!2see"
          width="600"
          height="450"
          
        ></iframe>
      </div>
    </Layout>
  );
}

export default Contact;
