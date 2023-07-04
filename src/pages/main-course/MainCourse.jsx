import React from "react";
import "./MainCourse.css";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import { banner } from "../../data/data";

export default function MainCourse() {
  return (
    <>
      <Navbar />
      <Banner banner={banner.mainCourse}/>
      <div className="main-course">MAIN COURSE</div>
    </>
  );
}
