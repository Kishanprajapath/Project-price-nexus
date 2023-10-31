import React from "react";
import Card from "./Card";
import useFetchData from "../hooks/useFetchData";
import parseMyntra from "../utils/parseMyntra";
import { useState } from "react";
import Loading from "./Loading";
export default function SearchPage() {
  const { data, loading, reFetch } = useFetchData();
  const [val, setval] = useState("");

  const handleMyntra = (data) => {
    if(data.length === 0) return (<h1>No Results Found</h1>);
    const parsedData = parseMyntra(data);
    return parsedData.map((item) => {
      return (
        <Card
          img={item["image"]}
          price={item["price"]}
          name={item["name"]}
          url={item["url"]}
        />
      );
    });
  };

  return (
    <div>
      <input value={val} onChange={(e) => setval(e.target.value)} />
      <button onClick={() => reFetch(val)}>Search</button>
      {loading ? <Loading /> : handleMyntra(data)}
    </div>
  );
}
