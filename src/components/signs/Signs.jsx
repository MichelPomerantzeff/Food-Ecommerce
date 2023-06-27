import React from "react";
import { signInBg } from "../../data";
import "./Signs.css";

export default function Signs() {
  return (
    <section className="sign-in">
      <div className="sign-in-left">
        <div className="sign-in-wrapper">

          <h1>LOGIN OR CREATE AN ACCOUNT</h1>
          
          <form>
            <div className="inputs-wrapper">
              <input type="text" name="" id="" placeholder="Name" required/>
              <input type="email" name="" id="" placeholder="Email" required/>
              <input type="password" name="" id="" placeholder="Password" required/>
            </div>

            <div className="buttons-wrapper">
              <button className="sign-in-btn" type="submit">Sign in</button>
              <button className="create-account-btn">Create account</button>
            </div>

            <a>Forgot password?</a>
          </form>

        </div>
      </div>

      <div className="sign-in-right">
        <img src={signInBg} alt="SIGN IN IMAGE" />
      </div>
    </section>
  );
}
