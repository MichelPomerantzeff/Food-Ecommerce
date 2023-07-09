import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import "../../css/Dropdown.css"
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../config/firebase"
import { signOut } from "firebase/auth";
import Cart from "../cart/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../logo/Logo";
import { Badge } from "@mui/material"
import { ShoppingCartOutlined } from "@mui/icons-material"

export default function Navbar() {

  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector(state => state.cart);

  //Log user out
  function signUserOut() {
    signOut(auth)
  }

  return (
    <>
      {isCartOpen && <Cart closeCart={setIsCartOpen} />}
      <section className="topbar-container">
        <div className="offer-highlight">
          Great Deal! Get 10% off for orders over €50
        </div>

        <div className="navbar">
          <div className="navbar-side nav-left">
            <Logo />

            <Link to={'/about'}>
              <span className="about-link">About</span>
            </Link>

            <div className="menu-link-wrapper">
              <span className="menu-link">Menu</span>
              <ul className="dropdown-box">
                <Link to={'/main-course'}> <li className="dropdown-option">Main course</li></Link>
                <Link to={'/healthy'}> <li className="dropdown-option">Healthy options</li></Link>
                <Link to={'/snacks'}> <li className="dropdown-option">Snacks</li></Link>
                <Link to={'/lunch-box'}> <li className="dropdown-option">Lunchbox</li></Link>
              </ul>
            </div>
          </div>

          <div className="navbar-side nav-right">
            {
              user ?
                <div className="log-in-icon-wrapper">
                  <FontAwesomeIcon className="log-in-icon" icon={faUser} />
                  <span>{user.displayName}</span>

                  <ul className="dropdown-box">
                    <li className="dropdown-option" onClick={() => navigate('/orders')}> Orders history </li>
                    <li className="dropdown-option" onClick={signUserOut} > Sign out </li>
                  </ul>

                </div>
                :
                <Link className="log-in-icon-wrapper" to={"/sign-in"}>
                  <span>Login</span>
                </Link>
            }
            <div onClick={() => setIsCartOpen(true)} className="cart">
              <Badge badgeContent={cartItems.totalItems} color="primary" onClick={() => setIsCartOpen(true)} >
                <ShoppingCartOutlined />
              </Badge>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
