import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <Link to="/about" className="footer__link">
            About Us
          </Link>
          <Link to="/contact" className="footer__link">
            Book
          </Link>
          <Link to="/contact" className="footer__link">
            Contact Us
          </Link>
          <Link to="/gallery" className="footer__link">
            Gallery
          </Link>
          <Link to="/testimonials" className="footer__link">
            Testimonials
          </Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Social Media</h4>
          <Link
            to="https://api.whatsapp.com/send?phone=9121699121"
            target="_blank"
            className="footer__link"
          >
            Whatsapp
          </Link>
          <Link
            to="https://www.instagram.com/whitehillhyd/"
            target="_blank"
            className="footer__link"
          >
            Instagram
          </Link>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Location</h4>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15230.818629355017!2d78.22995!3d17.377939!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbeb4b49942561%3A0x773ea0cc350e33ac!2sWhite%20Hill%20Hyd!5e0!3m2!1sen!2sin!4v1689852676964!5m2!1sen!2sin" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div className="footer__bar">
        &copy; 2023 White Hill Hyd. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
