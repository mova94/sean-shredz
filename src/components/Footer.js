import React from "react";
import "../styling/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <a
              className="social-icon-link tiktok"
              href="https://www.tiktok.com/@sean.shredzz"
              target="_blank"
              rel="noopener"
              aria-label="TikTok"
            >
              <i className="fab fa-tiktok" />
            </a>
            <a
              class="social-icon-link facebook"
              href="https://www.facebook.com/sean.maloney.1447?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook" />
            </a>
            <a
              class="social-icon-link instagram"
              href="https://instagram.com/sean.shredz"
              target="_blank"
              rel="noopener"
              aria-label="Instagram"
            >
              <i class="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
