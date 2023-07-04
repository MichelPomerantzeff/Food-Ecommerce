import React from "react";
import "./HealthyOptions.css";
import { banner } from "../../data/data";

export default function Heading() {
  return (
    <div className="healthy-options">
      <div className="ho-heading">
        <div className="ho-heading-left">
          <img src={banner.healthyBanner} alt="HEALTHY HEADING" />
        </div>
        <div className="ho-heading-right">
          <div className="ho-heading-right-wrapper">
            <h2 className="ho-title">HEALTHIER 2023 KIT</h2>
            <p className="ho-description">
              Our selection of ready-to-eat frozen meals comes in a 10-day kit,
              designed to help you establish a healthier routine.
            </p>
            <div className="ho-price-wrapper">
              <div className="ho-whole-price">€85.20</div>
              <div className="ho-price-per-day">€17.04</div>
            </div>
          </div>
        </div>
      </div>
      <div className="ho-content"></div>
    </div>
  );
}
