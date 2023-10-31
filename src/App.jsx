import logo from "./logo.svg";
import "./App.css";
import Homenav from "./components/homenav";
import Shopnav from "./components/shopnav";
import Shopcontents from "./components/shopcontents";
import { Component } from "react";
import Selectshopsite from "./components/shopselect";
import Background from "./components/Shop_Background";
import { useEffect } from "react";
import SearchPage from "./components/SearchPage";

  function App() {
  
  return (
    <div className="App">
      <Background />
      
       
      <SearchPage/>
    </div>
  );
}
export default App;
