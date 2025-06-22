import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterestP,
  FaSnapchat,
  FaYoutube,
} from "react-icons/fa";
// import payment1 from "./assets/payment/payment_1.jpeg";
// import payment2 from "./assets/payment/payment_2.jpeg";
// import payment3 from "./assets/payment/payment_3.jpeg";
// import payment4 from "./assets/payment/payment_4.jpeg";
// import payment5 from "./assets/payment/payment_5.jpeg";
// import "./Footer.css"; // Optional: your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Content */}
      <div className="footer-content">
        <div className="categories">
          <h3>GET IN TOUCH</h3>
          <p>
            Any questions? Let us know in 219 Durgesh Vihar J.K Road, Bhopal,
            Madhya Pradesh, INDIA (462041) or call us on (+91) 9752512960
          </p>
          <div className="social-icons">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaPinterestP /></a>
            <a href="#"><FaSnapchat /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        <div className="categories">
          <h3>CATEGORIES</h3>
          <ul>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Dresses</a></li>
            <li><a href="#">Sunglasses</a></li>
          </ul>
        </div>

        <div className="categories">
          <h3>LINKS</h3>
          <ul>
            <li><a href="#">Search</a></li>
            <li><a href="#">About </a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Returns</a></li>
          </ul>
        </div>

        <div className="categories">
          <h3>HELP</h3>
          <ul>
            <li><a href="#">Order</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Shipping</a></li>
            <li><a href="#">FAQ's</a></li>
          </ul>
        </div>

        <div className="categories">
          <h3>NEWSLETTER</h3>
          <input type="email" placeholder="aaabcc@example.com" />
          <button><a href="#">SUBSCRIBE</a></button>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-end">
        {/* <div className="payment-img">
          {/* <a href="#"><img src={payment1} alt="Payment 1" /></a> */}
          {/* <a href="#"><img src={payment2} alt="Payment 2" /></a> */}
          {/* <a href="#"><img src={payment3} alt="Payment 3" /></a> */}
          {/* <a href="#"><img src={payment4} alt="Payment 4" /></a> */}
          {/* <a href="#"><img src={payment5} alt="Payment 5" /></a> */}
        {/* </div> */} 
        <div className="copyright">
          Copyright © 2017 Colorlib. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
