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
  const { data, loading, reFetch } = useFetchData();
  const [val, setval] = useState("");

  const handleMyntra = (data) => {
    
    if (data.length === 0) return <div className="h1">No Results Found</div>;
    const parsedData = parseMyntra(data);
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
      <Shopnav val={val} setval={setval} reFetch={reFetch} />
      <div id="scrollable">
        <Shopcontents />
        <Selectshopsite />
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
