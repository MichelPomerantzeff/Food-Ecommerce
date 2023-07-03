import React from "react";
import { logo } from "../../data/data";
import './Logo.css'

export default function Logo() {
  return (
    <div className="logo">
      <img src={logo} alt="LOGO" />
      <span>The One</span>
    </div>
  );
}
