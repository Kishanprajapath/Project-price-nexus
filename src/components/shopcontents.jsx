import React from "react";
import { useEffect } from "react";
import "./shopcontents.css";

function Shopcontents() {
  useEffect(() => {
      const btn_click = (_CLASS) => {
      let btns = document.querySelectorAll(`.${_CLASS}`);
      // add class active to the button that is clicked
      

      btns.forEach((btn) => {
          btn.addEventListener("click", function () {
              btns.forEach((btn) => btn.classList.remove("b-active"));
              this.classList.add("b-active");
          });
      });
    };
    btn_click("btn");
 
  }, []);
  return (
    <div className="shopcontent-container">
      <a id="shop_comp" className="waves-effect waves-light btn-large">
        Deals
      </a>
      <a id="shop_comp" className="waves-effect waves-light btn-large">
        Deals
      </a>
      <a id="shop_comp" className="waves-effect waves-light btn-large">
        Deals
      </a>
      <a id="shop_comp" className="waves-effect waves-light btn-large">
        Deals
      </a>
      <a id="shop_comp" className="waves-effect waves-light btn-large">
        Deals
      </a>
      <a id="shop_comp" className="waves-effect waves-light btn-large">
        Deals
      </a>
      <a id="shop_comp" className="waves-effect waves-light btn-large">
        Deals
      </a>
    </div>
  );
}
export default Shopcontents;
