import React from "react";
import "./homenav.css";
function Homenav() {
  return (
    <div className="mycontainer">
      <div className="contents">
        <div className="navdiv">
          <i className="small material-icons">home</i>
          <li className="navelmt">Home</li>
        </div>
        <div className="navdiv">
          <i className="small material-icons">info</i>
          <li className="navelmt">About</li>
        </div>
        <div className="navdiv">
          <i className="small material-icons">local_offer</i>
          <li className="navelmt">Offers</li>
        </div>
        <div className="navdiv">
          <i className="small material-icons">phone</i>
          <li className="navelmt">Contact us</li>
        </div>
      </div>
      <div className="navsearch">
        <nav>
          <div className="nav-wrapper">
            <form>
              <div className="input-field">
                <input id="search" type="search" required></input>
                <label class="label-icon" for="search">
                  <i class="material-icons">search</i>
                </label>
                <i class="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}
export default Homenav;