import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import { signUpBg } from "../../data/data";
import { Link, useNavigate } from "react-router-dom";
import '../../shared/UserLog.css'

import { auth } from "../../config/firebase"
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

export default function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Create User
  const registerWithEmail = async () => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      // Sign in
      const user = result.user;
      await updateProfile(user, { displayName: name });
      user && navigate('/');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <Navbar />
      <section className="sign">
      
      <div className="sign-left">
        <div className="sign-wrapper">

          <h1> CREATE AN ACCOUNT AND LET'S GET STARTED </h1>
          
          <form>
            <div className="inputs-wrapper">
              <input onChange={e => setName(e.target.value)} type="text" name="name" id="name" placeholder="Name" required/>
              <input onChange={e => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email" required/>
              <input onChange={e => setPassword(e.target.value)} type="password" name="pasword" id="pasword" placeholder="Password" required/>
              <input onChange={e => setConfirmPassword(e.target.value)} type="password" name="confirm-password" id="confirm-password" placeholder="Confirm password" required/>
            </div>
          </form>

          <div className="buttons-wrapper">
            <button onClick={registerWithEmail} className="sign-btn" type="submit"> CREATE </button>
            <Link to={'/sign-in'}>
              <button className="create-account-btn">I ALREADY HAVE AN ACCOUNT</button>
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
