import React from "react";
import { signInBg, signUpBg } from "../../data";
import "./Signs.css";
import { Link } from "react-router-dom";

export default function Signs(props) {

  const isRegister = props.type === 'sign-up'

  return (
    <section className="sign">
      
      <div className="sign-left">
        <div className="sign-wrapper">

          <h1> { isRegister ? "CREATE AN ACCOUNT AND LET'S GET STARTED" : "SIGN IN" } </h1>
          
          <form>
            <div className="inputs-wrapper">
              { isRegister && <input type="text" name="" id="" placeholder="Name" required/>}
              <input type="email" name="" id="" placeholder="Email" required/>
              <input type="password" name="" id="" placeholder="Password" required/>
              { isRegister && <input type="password" name="" id="" placeholder="Confirm password" required/>}
            </div>
          </form>

          <div className="buttons-wrapper">
            <button className="sign-btn" type="submit">{ isRegister ? "CREATE" : "SIGN IN"}</button>
            {
              isRegister ?
              <Link to={'/sign-in'}>
                <button className="existing-account-btn">I ALREADY HAVE AN ACCOUNT</button>
              </Link>
              :
              <Link to={'/sign-up'}>
                <button className="create-account-btn">CREATE ACCOUNT</button>
              </Link>
            }
          </div>

          { !isRegister && <a>Forgot password?</a>}

        </div>
      </div>

      <div className="sign-right">
        <img src={isRegister ? signUpBg : signInBg} alt="SIGN IMAGE" />
      </div>
    </section>
  );
}
