import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Signs from "../../components/signs/Signs";

export default function Register(props) {
  return (
    <>
      <Navbar />
      <Signs type={props.type}/>
    </>
  );
}
