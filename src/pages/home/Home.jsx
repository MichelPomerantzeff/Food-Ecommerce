import React from "react";
import Banner from "../../components/banner/Banner";
import Specials from "../../components/specials/Specials";
import Slider from "../../components/slider/Slider";
import Navbar from "../../components/navbar/Navbar";
import { dishes } from "../../data";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Specials />
      <Slider title={"CHICKEN"} dish={dishes.chicken} />
      <Slider title={"BEEF"} dish={dishes.beef} />
      <Slider title={"PASTA"} dish={dishes.pasta} />
      <Slider title={"VEGETARIAN"} dish={dishes.vegetarian} />
      <Slider title={"FISH"} dish={dishes.fish} />
    </>
  );
}
