import React from "react";
import Card from "./Card";
import useFetchData from "../hooks/useFetchData";
import parseMyntra from "../utils/parseMyntra";
import { useState } from "react";
import Loading from "./Loading";
import Shopnav from "./shopnav";
import Shopcontents from "./shopcontents";
import Selectshopsite from "./shopselect";
export default function SearchPage() {
  const { data, loading, reFetch , selectval , setselectval } = useFetchData();
  const [val, setval] = useState("");
  const handleMyntra = (data) => {
    
    if (data.length === 0) return <div className="h1"></div>;
    // const parsedData = parseMyntra(data);
    let parsedData = data;
    if(selectval === "myntra") {parsedData = parseMyntra(data); }

    if(selectval == "flipkart") {
      parsedData = JSON.parse(data)
      parsedData = parsedData['products']
      };
    console.log(parsedData);
    return parsedData.map((item) => {
      return (
        <Card
          img={item["image"]}
          price={item["price"]}
          title={item["name"]}
          url={item["url"]}
        />
      );
    });
  };

  return (
    <div>
      <Shopnav val={val} setval={setval} reFetch={reFetch} selectval={selectval} />
      <div id="scrollable">
        {/* <Shopcontents /> */}
        <Selectshopsite val={val} reFetch={reFetch} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: loading ? "auto" :"auto auto auto",
          height : loading ? "70vh" :"auto",
          placeItems: "center",
          gap: "2rem",
        }}
      >
        {loading ? <Loading /> : handleMyntra(data)}
      </div>
    </div>
  );
}
