import React from "react";
import { useEffect } from "react";
import "./shopselect.css";

function Selectshopsite({val , reFetch}) {
  
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
  btn_click("btns");

}, []);
  return (
    <div className="shopselect-container">
      <a id="shopsel-but" onClick={() => reFetch(val,"flipkart")} className="btns waves-effect waves-light btn-large b-active">
        Flipkart
      </a>
      <a id="shopsel-but1" onClick={() => reFetch(val,"myntra")} className="btns waves-effect waves-light btn-large">
        Myntra
      </a>
      <a id="shopsel-but2" className="btns waves-effect waves-light btn-large">
        OLX
      </a>
      <a id="shopsel-but3" className="btns waves-effect waves-light btn-large">
        Reliance
      </a>
    </div>
  );
}
export default Selectshopsite;
