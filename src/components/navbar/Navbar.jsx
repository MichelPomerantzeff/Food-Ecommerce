import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../config/firebase";
import { InfoOutlined as Info } from "@mui/icons-material";
import MenuDropdown from "./dropdowns/Menu";
import UserDropdown from "./dropdowns/User";
import Logo from "../logo/Logo";
import CartDrawer from "../cart/CartDrawer";

export default function Navbar() {

  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  return (
    <div className="mb-20 md:mb-24 lg:mb-28">
      <div className="fixed top-0 right-0 left-0 z-20">

        <div className="bg-blue-400 text-white text-center">
          Great Deal! Get 10% off for orders over €50
        </div>

        <div className="flex justify-between items-center px-4 py-1 lg:px-10 shadow bg-white">
          <div className="flex gap-5 lg:gap-10 items-center">

            <Logo/>

            <div className="flex items-center cursor-pointer rounded-md hover:bg-orange-100 p-[7px]" onClick={() => navigate('/about')}>
              <Info />
              <span className="font-semibold hidden md:inline">ABOUT</span>
            </div>

            <MenuDropdown />
          </div>

          <div className="flex gap-5 lg:gap-10 items-center">
            <UserDropdown email={user?.email}/>
            <CartDrawer/>
          </div>
        </div>
      </div>
    </div>
  );
}
