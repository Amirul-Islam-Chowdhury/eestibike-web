import React  from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import i18next from "i18next";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function Header() {
  const { i18n, t } = useTranslation(["common"]);

  useEffect(() => {
    if (localStorage.getItem("i18nextLng")?.length > 2) {
      i18next.changeLanguage("en");
    }
  }, []);
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  const { cartItems } = useSelector((state) => state.cartReducer);
  const { user } = JSON.parse(localStorage.getItem("currentuser"));

  const logout = () => {
    localStorage.removeItem("currentuser");
    window.location.reload();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            EestiBikes
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <FaBars />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {user.email.substring(0, user.email.length - 10)}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/orders">
                  {t("Orders")}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  {t("Cart")} {cartItems.length}
                </Link>
              </li>
              <li className="nav-item ">
                <select
                  className="nav-link bg-dark "
                  onChange={handleLanguageChange}

                  value={localStorage.getItem("i18nextLng")}
                >
                  <option value="en"> ENG</option>
                  <option value="et"> EST</option>
                </select>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={logout}>
                  {t("Logout")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
