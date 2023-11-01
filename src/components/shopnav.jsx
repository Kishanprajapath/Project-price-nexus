import React, { useEffect } from "react";
import "./shopnav.css";
import logo from "./images/logo.png";
import namelogo from "./images/nameLogo.png";
import { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

function Shopnav({ val, setval, reFetch , selectval }) {
  useEffect(() => {
    // use materialize js dropdown
    var elems = document.querySelectorAll(".dropdown-trigger");
    var instances = M.Dropdown.init(elems, {
      coverTrigger: false,
      constrainWidth: false,
    });
  }, []);

  return (
    <div className="shopfixeddiv>">
      <div className="shopmycontainer">
        <div id="shopPNlogo">
          <img id="ShopPNlogo" src={logo} alt="Logo"></img>
          <img id="shopname-logo" src={namelogo} alt="Name"></img>
        </div>
        <div className="shopnavalign">
          {/* <div className="categories dropdown-trigger" data-target="cat_drop">
            <p id="shopdropdowntext">All</p>
            <i id="shopdropdown" class="material-icons">
              keyboard_arrow_down
            </i>
          </div> */}
          <ul id="cat_drop" class="dropdown-content">
            <li>
              <a href="#!">one</a>
            </li>
            <li>
              <a href="#!">two</a>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a href="#!">three</a>
            </li>
            <li>
              <a href="#!">
                <i class="material-icons">view_module</i>four
              </a>
            </li>
            <li>
              <a href="#!">
                <i class="material-icons">cloud</i>five
              </a>
            </li>
          </ul>

          <div className="shopnavsearch">
            <nav>
              <div className="nav-wrapper">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    reFetch(val, selectval);
                  }}
                >
                  <div className="input-field">
                    <input
                      id="search"
                      className="search-inp"
                      type="search"
                      placeholder="What are you looking for..."
                      value={val}
                      onChange={(e) => {
                        setval(e.target.value);
                      }}
                      required
                    ></input>
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
