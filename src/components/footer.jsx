import React from "react";
import "./footer.css";
export default function Footer() {
  return (
    <div>
      <footer class="footer">
        <div class="container-foot">
          <div class="row-foot">
            <div class="footer-col">
              <h4>Discover</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">team</a>
                </li>
                <li>
                  <a href="#">Get Started</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>About</h4>
              <ul>
                <li>
                  <a href="#">services</a>
                </li>
                <li>
                  <a href="#">contact</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Features</h4>
              <ul>
                <li>
                  <a href="#">shop</a>
                </li>
                <li>
                  <a href="#">pricing</a>
                </li>
                <li>
                  <a href="#">New arrival</a>
                </li>
                <li>
                  <a href="#">Special Offers</a>
                </li>
                <li>
                  <a href="#">Discounts</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Help</h4>
              <ul>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">Terms & conditions</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>Social</h4>
              <ul>
                <li>
                  <a href="#">Twitter</a>
                </li>
                <li>
                  <a href="#">Facebook</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
                <li>
                  <a href="#">Whatsapp</a>
                </li>
              </ul>
            </div>
            <div class="footer-col">
              <h4>FAQ</h4>
              <ul>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Partners</a>
                </li>
                <li>
                  <a href="#">Legal</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="logo">
          <img src="your-logo.png" alt="Your Logo" />
        </div>
        <p class="copyright" style={{fontSize: '20px'}}>
          2023 All rights reserved
        </p>
        <div class="social-links">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    </div>
  );
}
