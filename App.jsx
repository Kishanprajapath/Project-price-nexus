import logo from "./logo.svg";
import "./App.css";
import Homenav from './components/homenav'
import Shopnav from './components/shopnav'
import Shopcontents from './components/shopcontents'
import { Component } from "react";
function App() {
  return (
    <div className="App">
      <Shopnav />
      <Shopcontents />
    </div>
  );
}
export default App;