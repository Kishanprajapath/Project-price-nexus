import logo from "./logo.svg";
import "./App.css";
import Homenav from './components/homenav'
import Shopnav from './components/shopnav'
import Shopcontents from './components/shopcontents'
import { Component } from "react";
import SearchPage from "./components/SearchPage";
import Card from "./components/Card";
function App() {
  return (
    <div className="App">
      <Shopnav />
      <Shopcontents />
      {/* <SearchPage/> */}
      <Card title={"HRX by Hrithik Roshan Men Ankle length Pack of 3 Terry Socks"} img={"http://assets.myntassets.com/h_($height),q_($qualityPercentage),w_($width)/v1/assets/images/976817/2018/10/4/4db844a2-89c9-46a4-9ccf-c2b8db3306fb1538652963787-HRX-by-Hrithik-Roshan-Active-Men-Set-of-3-Ankle-Length-Socks-1.jpg"} price={"699"} />
    </div>
  );
}
export default App;