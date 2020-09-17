import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../resources/images/image1.png";

function Banner() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-2">
          <h1>
            Give Your Workout <br />A New Style
          </h1>
          <hr className="solid" />
          <p>
            Success isn't always about greatness. It's about consistency.
            Consistent <br />
            hard work gains success.
          </p>
          <Link to="/" className="btn">
            Explore Now &#8594;
          </Link>
        </div>
        <div className="col-2">
          <img src={image1} alt="Banner" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
