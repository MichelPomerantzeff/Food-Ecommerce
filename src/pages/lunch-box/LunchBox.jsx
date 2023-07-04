import React from "react";
import "./LunchBox.css";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import { banner } from "../../data/data";

export default function LunchBox() {
  return (
    <>
      <Navbar/>
      <Banner banner={banner.lunchBox}/>
      <div className="lunch-box">LUNCH BOX</div>
    </>
  );
}
