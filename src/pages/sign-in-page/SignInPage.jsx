import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { signInBg } from "../../data/data";
import '../../css/UserLog.css'

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Footer from "../../components/footer/Footer";


export default function SignInPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const auth = getAuth();

  const signIn = async (e) => {
    e.preventDefault()
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      user && navigate('/')
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <>
      <Navbar />
      <section className="sign">
        <div className="sign-left">
          <div className="sign-wrapper">

            <h1> SIGN IN </h1>

            <form>
              <div className="inputs-wrapper">
                <input onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" required />
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="pasword" id="pasword" placeholder="Password" required />
              </div>
            </form>

            <div className="buttons-wrapper">
              <button onClick={signIn} className="sign-btn" type="submit"> SIGN IN </button>
              <Link to={'/sign-up'}>
                <button className="existing-account-btn">CREATE ACCOUNT</button>
              </Link>
            </div>

            <a>Forgot password?</a>

          </div>
        </div>

        <div className="sign-right">
          <img src={signInBg} alt="SIGN IN IMAGE" />
        </div>
      </section>
      <Footer />
    </>
  );
}
