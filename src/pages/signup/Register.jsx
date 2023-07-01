import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { signUpBg } from "../../data";
import { Link } from "react-router-dom";
import '../../shared/UserLog.css'

export default function Register() {
  return (
    <>
      <Navbar />
      <section className="sign">
      
      <div className="sign-left">
        <div className="sign-wrapper">

          <h1> CREATE AN ACCOUNT AND LET'S GET STARTED </h1>
          
          <form>
            <div className="inputs-wrapper">
              <input type="text" name="name" id="name" placeholder="Name" required/>
              <input type="email" name="email" id="email" placeholder="Email" required/>
              <input type="password" name="pasword" id="pasword" placeholder="Password" required/>
              <input type="password" name="confirm-password" id="confirm-password" placeholder="Confirm password" required/>
            </div>
          </form>

          <div className="buttons-wrapper">
            <button className="sign-btn" type="submit"> CREATE </button>
            <Link to={'/sign-in'}>
              <button className="create-account-btn">CREATE ACCOUNT</button>
            </Link>
          </div>
        </div>
      </div>

      <div className="sign-right">
        <img src={signUpBg} alt="REGISTER IMAGE" />
      </div>
    </section>
    </>
  );
}
