import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_section">
        <img
          className="footerLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt="footerLogo"
        />
        <div>
          <p>Copyright © 2024 Netflix. All rights reserved.</p>
        </div>
        <div className="footer_icon"> 
          <a href="/instagram">
            <i className="fa-brands fa-instagram bg_color"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;

