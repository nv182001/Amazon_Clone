import React from "react";
import "./Footer.css";

function Footer({ hideButton }) {
  const topFunction = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0; //safari
  };
  return (
    <div className="footer">
      {!hideButton && (
        <button
          className="bottom_button"
          onClick={topFunction}
          id="BackToTopBtn"
        ><h3> Back to Top 🠕</h3>
         
        </button>
      )}
      <div className="bottom_info">
        <div className="bottom_infoDatail">
          <h2>Get To Know Us</h2>
          <p>Careers</p>
          <p>Blog</p>
          <p>About Amazon</p>
          <p>Amazon Devices</p>
        </div>
        <div className="bottom_infoDatail">
          <h2>Earn Money</h2>
          <p>Sell on Amazon</p>
          <p>Sell under Amazon Accelerator</p>
          <p>Become a Partner</p>
          <p>Promote your Product</p>
          <p>Amazon Pay</p>
        </div>
        <div className="bottom_infoDatail">
          <h2>Amazon Payment Product</h2>
          <p>Payment Cards</p>
          <p>Payment in Installments</p>
          <p>Amazon Currency Converter</p>
          <p>Gift Certificate</p>
          <p>Online Recharge</p>
        </div>
        <div className="bottom_infoDatail">
          <h2>Let Us Help You</h2>
          <p>Your Orders</p>
          <p>Shipping Rates & Policies</p>
          <p>Info about Our Marketplace</p>
          <p>Customer Service</p>
        </div>
      </div>

      <div className="bottom_copyright">
        <span> © 1996-2021, Amazon Clone-NV, No rights reserved. </span>
      </div>
    </div>
  );
}

export default Footer;
