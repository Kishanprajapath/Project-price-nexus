import logo from "./logo.svg";
import "./App.css";
import Homenav from "./components/homenav";
import Shopnav from "./components/shopnav";
import Shopcontents from "./components/shopcontents";
import { Component } from "react";
import Selectshopsite from "./components/shopselect";
import Background from "./components/Shop_Background";
import { useEffect } from "react";

  function App() {
  useEffect(() => {
    
  }, []);
  return (
    <div className="App">
      <Background />
        <Shopnav />
      <div id="scrollable">
        <Shopcontents />
        <Selectshopsite />
      </div>
    </div>
  );
}
export default App;
