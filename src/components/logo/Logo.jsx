import React from "react";
import { logo } from "../../data/data";
import './Logo.css'
import { useNavigate } from "react-router-dom";

export default function Logo() {

  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/')} className="logo">
      <img src={logo} alt="LOGO" />
      <span>The One</span>
    </div>
  );
}
