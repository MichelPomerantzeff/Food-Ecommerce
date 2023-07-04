import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Banner from "../../components/banner/Banner";
import MainCourse from "../../components/main-course/MainCourse";
import { banner } from "../../data/data";
import { dishes } from "../../data/data";
import Footer from "../../components/footer/Footer";

export default function MainCoursePage() {
  return (
    <>
      <Navbar />
      <Banner banner={banner.mainCourse} />
      <MainCourse title={"CHICKEN"} dishes={dishes.chicken} />
      <MainCourse title={"BEEF"} dishes={dishes.beef} />
      <MainCourse title={"FISH"} dishes={dishes.fish} />
      <MainCourse title={"PASTA"} dishes={dishes.pasta} />
      <MainCourse title={"VEGETARIAN"} dishes={dishes.vegetarian} />
      <Footer/>
    </>
  );
}
