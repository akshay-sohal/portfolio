import React from "react";
import webIcon from "../../assets/images/web-icn.svg";
import emailIcon from "../../assets/images/email-icn.svg";
import telIcon from "../../assets/images/tel-icn.svg";
import fbIcon from "../../assets/images/fb-icn.svg";
import instaIcon from "../../assets/images/insta-icn.svg";
import linkedinIcon from "../../assets/images/linkedin-icn.svg";
import pinterestIcon from "../../assets/images/pinterest-icn.svg";

import "./Footer.css"; 

export default function Footer() {
  return (
    <footer id="contact-sec" className="footer-section">
      <div className="site-container">

        <div className="site-common-content section-title">
          <h2 className="site-title-h2">Contact</h2>
          <p className="site-title-h3 text-bold">
            Have a project in mind? Let’s build something amazing together.
          </p>
        </div>

        <div className="footer-row">
          <div className="left-col">
            <div className="social-info">
              <img src={webIcon} alt="web-icon" />
              <a href="mailto:karanpatel.dev@gmail.com">karanpatel.dev@gmail.com</a>
            </div>

            <div className="social-info">
              <img src={emailIcon} alt="email-icon" />
              <a href="https://www.karanpatel.dev" target="_blank" rel="noopener noreferrer">
                www.karanpatel.dev
              </a>
            </div>

            <div className="social-info">
              <img src={telIcon} alt="telephone-icon" />
              <a href="tel:+1234567890">+1 234 567 890</a>
            </div>

            <div className="social-icons">
              <a href="#"><img src={fbIcon} alt="facebook-icon" /></a>
              <a href="#"><img src={instaIcon} alt="instagram-icon" /></a>
              <a href="#"><img src={linkedinIcon} alt="linkedin-icon" /></a>
              <a href="#"><img src={pinterestIcon} alt="pinterest-icon" /></a>
            </div>
          </div>

          <div className="footer-right-col">
            <form action="#" className="contact-form">
              <div className="form-col">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
              </div>

              <div className="form-col">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" />
              </div>

              <div className="form-col">
                <label htmlFor="message">Message</label>
                <textarea id="message"></textarea>
              </div>

              <input type="submit" value="Send" />
            </form>
          </div>
        </div>

        <div className="section-divider"></div>
      </div>
    </footer>
  );
}
