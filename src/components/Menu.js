import React from "react";
import { useNavigate } from "react-router-dom";

import{BsCalendarCheck,BsFillBagCheckFill,BsFillTelephoneFill,BsWrench}from "react-icons/bs"
import{useTranslation} from "react-i18next"

function Manu() {
  const navigate = useNavigate();

  const {t}=useTranslation(["common"]);


  
   


  return (
    <div class="container justify-content-center">
      <hr/>
      <div class="row justify-content-center p-2 mt-2 ">
        <div class="col">

          <button
            className="btn-outline-secondary  btn-booking " 
            onClick={() => navigate(`./booking`)}
          >
            {" "}
           <BsCalendarCheck/> {t("Book time")}
          </button>
        </div>
        <div class="col">
          <button className="btn-outline-secondary "
            onClick={() => navigate(`/productlist`)}> <BsFillBagCheckFill/> {t("Shop")}</button>
        </div>
        <div class="col">
          <button className=" btn-outline-secondary" onClick={() => navigate(`/services`)}> <BsWrench/>{t(" Services")} </button>
        </div>
        <div class="col">
          <button className=" btn-outline-secondary" onClick={() => navigate(`/contact`)}> <BsFillTelephoneFill/> {t("Contact")} </button>
        </div>
        
      </div>
      <hr/>
    </div>
  );
}

export default Manu;
