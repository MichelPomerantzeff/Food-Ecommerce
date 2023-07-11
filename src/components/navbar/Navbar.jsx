import "./Navbar.css";
import "../../css/Dropdown.css";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import Cart from "../cart/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";
import Logo from "../logo/Logo";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined, MenuBook,InfoOutlined as Info, AccountCircle as User } from "@mui/icons-material";

export default function Navbar() {

  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = useSelector(state => state.cart);

  //Log user out
  function signUserOut() {
    signOut(auth)
    navigate("/sign-in")
  }

  return (

    <main className="topbar-container">

      {isCartOpen && <Cart closeCart={setIsCartOpen} />}

      <div className="offer-highlight">
        Great Deal! Get 10% off for orders over €50
      </div>

      <div className="navbar">
        <div className="navbar-side nav-left">

          <Logo />

          <div className="navbar-link" onClick={() => navigate('/about')}>
            <Info />
            <span className="navbar-option">ABOUT</span>
          </div>

          <div className="navbar-link">
            <MenuBook />
            <span className="navbar-option">MENU</span>
            <ul className="dropdown-box">
              <li onClick={() => navigate('/main-course')} className="dropdown-option">Main course</li>
              <li onClick={() => navigate('/healthy')} className="dropdown-option">Healthy options</li>
              <li onClick={() => navigate('/snacks')} className="dropdown-option">Snacks</li>
              <li onClick={() => navigate('/lunch-box')} className="dropdown-option">Lunchbox</li>
            </ul>
          </div>
        </div>

        <div className="navbar-side nav-right">
          {
            user ?
              <div className="navbar-link">
                <User />
                <span className="navbar-option">{user.email}</span>

                <ul className="dropdown-box">
                  <li className="dropdown-option" onClick={() => navigate('/orders')}> Orders history </li>
                  <li className="dropdown-option" onClick={signUserOut} > Sign out </li>
                </ul>

              </div>
              :
              <div className="navbar-link" onClick={() => navigate("/sign-in")}>
                <span className="navbar-option">Login</span>
              </div>
          }
          <div onClick={() => setIsCartOpen(true)} className="navbar-link">
            <Badge badgeContent={cartItems.totalItems} color="primary" onClick={() => setIsCartOpen(true)} >
              <ShoppingCartOutlined />
            </Badge>
            <span className="navbar-option">CART</span>
          </div>
        </div>

      </div>
    </main>
  );
}
