import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import { signInBg } from "../../data";
import '../../shared/UserLog.css'

export default function Login(props) {
  return (
    <>
      <Navbar />
      <section className="sign">
      
      <div className="sign-left">
        <div className="sign-wrapper">

          <h1> SIGN IN </h1>
          
          <form>
            <div className="inputs-wrapper">
              <input type="email" name="email" id="email" placeholder="Email" required/>
              <input type="password" name="pasword" id="pasword" placeholder="Password" required/>
            </div>
          </form>

          <div className="buttons-wrapper">
            <button className="sign-btn" type="submit"> SIGN IN </button>
            <Link to={'/sign-up'}>
              <button className="existing-account-btn">I ALREADY HAVE AN ACCOUNT</button>
            </Link>
          </div>

          <a>Forgot password?</a>

        </div>
      </div>

      <div className="sign-right">
        <img src={signInBg} alt="SIGN IN IMAGE" />
      </div>
    </section>
    </>
  );
}
