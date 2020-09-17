import React from "react";
import { Link } from "react-router-dom";
import logo from "../../resources/images/logo.png";
import cart from "../../resources/images/cart.png";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="CompanyLogo" width="125px" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to="/account">Account</Link>
              </li>
            </ul>
          </nav>
          <img src={cart} alt="Cart Icon" width="30px" height="30px" />
        </div>
      </div>
    </div>
  );
}

export default Header;
