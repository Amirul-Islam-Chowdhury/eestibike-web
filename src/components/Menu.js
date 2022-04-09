import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import{BsCalendarCheck,BsFillBagCheckFill,BsFillTelephoneFill,BsWrench}from "react-icons/bs"
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
            className=" btn btn-primary btn-lg btn-block "
            onClick={() => navigate(`./booking`)}
          >
            {" "}
           <BsCalendarCheck/> {t("book time")}
          </button>
        </div>
        <div class="col">
          <button className="btn btn-primary btn-lg btn-block "
            onClick={() => navigate(`/productlist`)}> <BsFillBagCheckFill/> {t("Shppoing")}</button>
        </div>
        <div class="col">
          <button className=" btn btn-primary btn-lg btn-block"> <BsWrench/>{t("Services")} </button>
        </div>
        <div class="col">
          <button className=" btn btn-primary btn-lg btn-block"> <BsFillTelephoneFill/> {t("Contact")} </button>
        </div>
        
      </div>
    </div>
  );
}

export default Manu;
