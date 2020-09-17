import React from "react";
import playStore from "../../resources/images/play-store.png";
import appStore from "../../resources/images/app-store.png";
import logoWhite from "../../resources/images/logo-white.png";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col-1">
            <h3>Download Our App</h3>
            <p>Download App for Android and iOS Mobile Phones.</p>
            <div className="app-logo">
              <img src={playStore} alt="" />
              <img src={appStore} alt="" />
            </div>
          </div>
          <div className="footer-col-2">
            <img src={logoWhite} alt="" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt
            </p>
          </div>
          <div className="footer-col-3">
            <h3>Useful Links</h3>
            <ul>
              <li>Coupons</li>
              <li>Blog Post</li>
              <li>Return Policy</li>
              <li>Join Us</li>
            </ul>
          </div>
          <div className="footer-col-4">
            <h3>Follow Us</h3>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
              <li>Linked In</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">CopyRights | All Right Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
