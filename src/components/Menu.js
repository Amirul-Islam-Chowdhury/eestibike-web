import React from "react";
import { useNavigate } from "react-router-dom";

import {
  BsCalendarCheck,
  BsFillBagCheckFill,
  BsFillTelephoneFill,
  BsWrench,
} from "react-icons/bs";
import { useTranslation } from "react-i18next";

function Manu() {
  const navigate = useNavigate();

  const { t } = useTranslation(["common"]);

  return (
    
    <div class="menu-btn justify-content-center">
      <hr/>
      <button
        className="menu-btn-opt"
        onClick={() => navigate(`./booking`)}
      >
        {" "}
        <BsCalendarCheck /> {t("Appointment")}
      </button>

      <button
        className="menu-btn-opt "
        onClick={() => navigate(`/productlist`)}
      >
        {" "}
        <BsFillBagCheckFill /> {t("Accessories")}
      </button>

      <button
        className="menu-btn-opt "
        onClick={() => navigate(`/services`)}
      >
        {" "}
        <BsWrench />
        {t("Services")}{" "}
      </button>

      <button
        className="menu-btn-opt "
        onClick={() => navigate(`/contact`)}
      >
        {" "}
        <BsFillTelephoneFill /> {t("Contact")}{" "}
      </button>

      <hr />
    </div>
  );
}

export default Manu;
