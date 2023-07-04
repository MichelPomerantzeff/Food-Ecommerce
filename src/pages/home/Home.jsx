import React from "react";
import Banner from "../../components/banner/Banner";
import Specials from "../../components/specials/Specials";
import Slider from "../../components/slider/Slider";
import Navbar from "../../components/navbar/Navbar";
import { banner, dishes } from "../../data/data";
import Footer from "../../components/footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner banner={banner.home} />
      <Specials />
      <Slider title={"CHICKEN"} dish={dishes.chicken} />
      <Slider title={"BEEF"} dish={dishes.beef} />
      <Slider title={"PASTA"} dish={dishes.pasta} />
      <Slider title={"VEGETARIAN"} dish={dishes.vegetarian} />
      <Slider title={"FISH"} dish={dishes.fish} />
      <Footer/>
    </>
  );
}
