import React from "react";
import "./shopselect.css";

function Selectshopsite({val , reFetch}) {
  return (
    <div className="shopselect-container">
      <a id="shopsel-but" onClick={() => reFetch(val,"flipkart")} className="btn waves-effect waves-light btn-large b-active">
        Flipkart
      </a>
      <a id="shopsel-but1" onClick={() => reFetch(val,"myntra")} className="btn waves-effect waves-light btn-large">
        Myntra
      </a>
      <a id="shopsel-but2" className="btn waves-effect waves-light btn-large">
        OLX
      </a>
      <a id="shopsel-but3" className="btn waves-effect waves-light btn-large">
        Reliance
      </a>
    </div>
  );
}
export default Selectshopsite;
