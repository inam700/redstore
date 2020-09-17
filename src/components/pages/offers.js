import React from "react";
import exclusive from "../../resources/images/exclusive.png";
import { Link } from "react-router-dom";

function Offers() {
  return (
    <div className="offer">
      <div className="container-sm">
        <div className="row">
          <div className="col-2">
            <img src={exclusive} alt="" className="offer-image" />
          </div>
          <div className="col-2">
            <p>Exclusively Available on Red Store</p>
            <h1>Smart Band 4</h1>
            <small>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </small>
            <Link to="/" className="btn">
              Purchase Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offers;
