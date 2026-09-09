import React, { useEffect, useState } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { WhatsappIcon } from "react-share";
import logo from "/logo1.jpg";

const Footer = () => {
  const [loagout, removelogout] = useState(false);

  const handlelogout = () => {
    localStorage.removeItem("user-token");
    window.location.replace("/");
  };

  useEffect(() => {
    if (localStorage.getItem("user-token")) {
      removelogout(true);
    } else {
      removelogout(false);
    }
  }, []);

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <img src={logo} alt="zozac logo" />
              <span>ZOZAC Community</span>
            </div>
            <p>
              Creating Platforms for Dialogue, Unity, Collaboration, Youths
              Empowerment & Sustainable Skills for Community Development.
            </p>
            <div className="footer-social">
              <a
                href="https://cm.linkedin.com/in/zozac-community-94a547268"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/zozaccommunity"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="footer-links">
            <h4>Organization</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about">Our Team</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-links">
            <h4>Contact Us</h4>
            <ul>
              <li><a href="mailto:zozaccommunity@gmail.com">zozaccommunity@gmail.com</a></li>
              <li><a href="tel:+237674274276">+237 674274276</a></li>
              <li>Location: Tiko SW Region, Cameroon, P.O BOX 237 TIKO</li>
              {loagout && (
                <li>
                  <button onClick={handlelogout} className="btn-primary">Logout</button>
                </li>
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <h4>Subscribe to our newsletter</h4>
            <p>We will send you emails of our latest updates all the time. Please subscribe.</p>
            <form className="newsletter-form">
              <input type="email" name="email" placeholder="Your email address" required />
              <button type="submit" className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        {/* Location */}
        <div className="footer-location">
          <div className="footer-location-heading">
            <span className="footer-location-kicker">Find us</span>
            <h4>Our location</h4>
          </div>
          <div className="footer-location-map">
            <iframe
              title="ZOZAC Community on Google Maps"
              src="https://maps.google.com/maps?q=ZOZAC+Community+AFUH+Alfred+Ngum+Likomba&z=16&hl=en&ie=UTF8&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
          <a
            className="footer-location-link"
            href="https://maps.app.goo.gl/hqjXhBJcCB8FCaPJ6"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open in Google Maps →
          </a>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} ZOZAC COMMUNITY. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Fixed WhatsApp floating button */}
      <a
        className="float-whatsapp"
        href="https://wa.me/message/WYIXQMMFCXDVH1"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsappIcon size={32} round />
      </a>
    </footer>
  );
};

export default Footer;