import React from "react";
import "./Snacks.css";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import { banner } from "../../data/data";

export default function Snacks() {
  return (
    <>
      <Navbar />
      <Banner banner={banner.snacks} />
      <div className="snacks">SNACKS</div>
    </>
  );
}
