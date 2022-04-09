import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import{BsCalendarCheck,BsFillBagCheckFill}from "react-icons/bs"
import{useTranslation} from "react-i18next"
import i18next from "i18next";

function Manu() {
  const navigate = useNavigate();

  const {t}=useTranslation(["common"]);


  useEffect(()=>{
    if(localStorage.getItem("i18nextLng")?.length>2){
      i18next.changeLanguage("en");
    }
   },[]);
   


  return (
    <div class="container">
      <div class="row ">
        <hr/>
        <div class="col-sm">
          <button
            className=" btn-outline-dark px "
            onClick={() => navigate(`./booking`)}
          >
            {" "}
           <BsCalendarCheck/> {t("book time")}
          </button>
        </div>
        <div class="col">
          <button className="btn-outline-dark "
            onClick={() => navigate(`/productlist`)}> <BsFillBagCheckFill/> {t("eshop")}</button>
        </div>
        <div class="col">
          <button className=" btn-outline-dark">{t("about")} </button>
        </div>
        
      </div>
    </div>
  );
}

export default Manu;
