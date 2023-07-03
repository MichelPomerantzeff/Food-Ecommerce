import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping, faCircleInfo, faListAlt, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import "../../shared/Dropdown.css"
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../config/firebase"
import { signOut } from "firebase/auth";
import Bag from "../bag/Bag";
import { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../logo/Logo";

export default function Navbar() {

  const [user] = useAuthState(auth);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const bagItems = useSelector(state => state.bag);




  const bagUnits = bagItems?.reduce((acc, cur) => {
    return cur.units + acc
  }, 0)



  //Log user out
  function signUserOut() {
    signOut(auth)
  }
  
  return (
    <>
      {isBagOpen && <Bag closeBag={setIsBagOpen}/>}
      <section className="topbar-container">
        <div className="offer-highlight">
          Great Deal! Get 10% off for orders over €50
        </div>

        <div className="navbar">
          <div className="navbar-side nav-left">
            <Link to={"/"}>
              <Logo/>
            </Link>

            <Link>
              <span className="about-link">About</span>
            </Link>

            <Link>
              <span className="about-link">Menu</span>
            </Link>
          </div>

          <div className="navbar-side nav-right">
            {
              user ?
              <div className="log-in-icon-wrapper">
                <FontAwesomeIcon className="log-in-icon" icon={faUser} />
                <span>{user.displayName}</span>

                <ul className="dropdown-box">
                  <li className="dropdown-option"> Orders history </li>
                  <li className="dropdown-option" onClick={signUserOut} > Sign out </li>
                </ul>

              </div>
              :
              <Link className="log-in-icon-wrapper" to={"/sign-in"}>
                <span>Login</span>
              </Link>
            }
            <div onClick={() => setIsBagOpen(true)} className="bag">
              <FontAwesomeIcon className="bag-icon" icon={faBagShopping} />
            </div>
              <span>{bagUnits}</span>
          </div>

        </div>
      </section>
    </>
  );
}
