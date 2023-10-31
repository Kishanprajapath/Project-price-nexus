import React from "react";
import "./shopnav.css";
import logo from "./images/logo.png";
import namelogo from "./images/nameLogo.png";
function Shopnav() {
  return (
    <div className="shopfixeddiv>">
      <div className="shopmycontainer">
        <div id="shopPNlogo">
          <img id="ShopPNlogo" src={logo} alt="Logo"></img>
          <img id="shopname-logo" src={namelogo} alt="Name"></img>
        </div>
        <div className="shopnavalign">
          <div className="categories">
            <p id="shopdropdowntext">All</p>
            <i id="shopdropdown" class="material-icons">
              keyboard_arrow_down
            </i>
          </div>
          <div className="shopnavsearch">
            <nav>
              <div className="nav-wrapper">
                <form>
                  <div className="input-field">
                    <input
                      id="search"
                      className="search-inp"
                      type="search"
                      placeholder="What are you looking for..."
                      required></input>
                    <i id="shopsearch-icon" className="material-icons">
                      search
                    </i>
                  </div>
                </form>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Shopnav;
