import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Heading from "../../components/healthy-options/Heading";
import Footer from "../../components/footer/Footer";
import HealthyDay from "../../components/healthy-options/HealthyDay";
import { healthyOptions } from "../../data/data";

export default function HealthyPage() {
  return (
    <>
      <Navbar />
      <Heading />
      <HealthyDay day={1} healthyOptions={healthyOptions.day_one} />
      <HealthyDay day={2} healthyOptions={healthyOptions.day_two} />
      <HealthyDay day={3} healthyOptions={healthyOptions.day_three} />
      <HealthyDay day={4} healthyOptions={healthyOptions.day_four} />
      <HealthyDay day={5} healthyOptions={healthyOptions.day_five} />
      <Footer />
    </>
  );
}
