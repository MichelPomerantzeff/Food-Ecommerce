import React from "react";
import "./About.css";
import Navbar from "../../components/navbar/Navbar";
import { aboutImg } from "../../data/data";
import Footer from "../../components/footer/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="about">
        <div className="about-heading">
          <h1>THE MISSING SOLUTION IN YOUR DAILY ROUTINE</h1>
          <p>
            If you appreciate the fusion of delectable and nutritious cuisine
            that promotes wellness for both individuals and the planet, allow me
            to present an enticing offering.
          </p>
        </div>
        <div className="about-heading-img">
          <img className="about-img" src={aboutImg} alt="ABOUT HEADING IMG" />
        </div>

        <div className="about-description">
          <div className="description-wrapper">
            <h1>WE CONNECT YOU TO DELICIOUS FOOD</h1>
            <p>
              In collaboration with family farmers, we source fresh ingredients
              directly from those who cultivate them to bring them to our
              kitchen and ultimately to your table. We carefully curate a
              selection of products to provide you with the finest options,
              while our team of skilled chefs continuously craft incredible
              dishes to enhance your everyday culinary experience.
            </p>
          </div>

          <div className="description-wrapper">
            <h1>DIVERSITY SPEAKS VOLUMES</h1>
            <p>
              We offer a wide range of ready-to-eat frozen meals to elevate your
              daily routine. Moreover, we are constantly exploring new flavors
              and culinary creations. With hundreds of dishes available on our
              website and app, you'll find an extensive selection that caters to
              your preferences.
            </p>
          </div>

          <div className="description-wrapper">
            <h1>LOTS OF TECHNOLOGY AND LOVE INVOLVED</h1>
            <p>
              We have a user-friendly app, seamless delivery services, and meals
              that are easy to heat up and enjoy. As we learn from your orders,
              we continuously strive to get closer to you and meet your needs.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
