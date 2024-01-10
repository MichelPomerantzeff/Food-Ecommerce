import "./Navbar.css";
import "../../css/Dropdown.css";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { signOut } from "firebase/auth";
import Cart from "../cart/Cart";
import { useState } from "react";
import { useSelector } from "react-redux";
import { logo } from "../../data/data";
import { Badge } from "@mui/material";
import { ShoppingCartOutlined, MenuBook, InfoOutlined as Info, AccountCircle as User } from "@mui/icons-material";
import MenuDropdown from "./dropdowns/Menu";
import UserDropdown from "./dropdowns/User";

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
    <div className="mb-20 md:mb-24 lg:mb-28">
      <div className="fixed top-0 right-0 left-0 z-20">

        {isCartOpen && <Cart closeCart={setIsCartOpen} />}

        <div className="bg-blue-400 text-white text-center">
          Great Deal! Get 10% off for orders over €50
        </div>

        <div className="flex justify-between items-center px-4 lg:px-10 shadow bg-white">
          <div className="flex gap-5 lg:gap-10 items-center">

            <div
              className="w-[65px] lg:w-[75px] cursor-pointer"
              onClick={() => navigate('/')}
            >
              <img className="rounded-full" src={logo} alt="LOGO" />
            </div>

            <div className="flex items-center cursor-pointer rounded hover:bg-orange-100 p-2" onClick={() => navigate('/about')}>
              <Info />
              <span className="font-semibold hidden md:inline">ABOUT</span>
            </div>

            <MenuDropdown />
          </div>

          <div className="flex gap-5 lg:gap-10 items-center">
            <UserDropdown email={user?.email}/>
            <div onClick={() => setIsCartOpen(true)} className="flex gap-1 cursor-pointer">
              <Badge badgeContent={cartItems.totalItems} color="primary" onClick={() => setIsCartOpen(true)} >
                <ShoppingCartOutlined />
              </Badge>
              <span className="font-semibold hidden md:inline">CART</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
