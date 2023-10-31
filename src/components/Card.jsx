import React from "react";
import im from "./images/bajaj.png";
import "./Card.css";
export default function Card({ title, img, desc, price, url }) {
  return (
    <div className="row">
      <div className="col s3 card small hoverable">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator card-img" height={150} src={img} />
        </div>
        <div className="card-content">
          <span className="card-title  grey-text text-darken-4">{title}</span>
          <p>
            <a className="waves-effect waves-light btn light-blue" href={url}>
              Buy Now
            </a>{" "}
            <i className="activator material-icons right">more_vert</i>
          </p>
        </div>
        <div className="card-reveal">
          <div class="card-action">
            <a className="waves-effect waves-light btn light-blue" href={url}>
              Buy Now
            </a>
          </div>
          <span className="card-title grey-text text-darken-4">
            <a class="waves-effect waves-light  btn-medium">
              <i className="fa-solid fa-indian-rupee-sign" style={{marginRight : "2px"}}></i>
              {price}
            </a>
            <i className="material-icons right">close</i>
          </span>
          <br />
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
