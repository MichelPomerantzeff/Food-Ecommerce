import "./App.css";
import Cart from "./components/cart/Cart";
import Banner from "./components/banner/Banner";
import HealthyOption from "./components/healthy-option/HealthyOption";
import Navbar from "./components/navbar/Navbar";
import Slider from "./components/slider/Slider";
import Specials from "./components/specials/Specials";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/signin/Login";
import Register from "./pages/signup/Register";
import About from "./pages/about/About";
import Snacks from "./pages/snacks/Snacks";
import MainCourse from "./pages/main-course/MainCourse";
import HealthyOptions from "./pages/healthy-options/HealthyOptions";
import LunchBox from "./pages/lunch-box/LunchBox";

function App() {




  const router = createBrowserRouter([
    {
      path: "/",
      element: < Home/>,
    },
    {
      path: "/about",
      element: < About/>,
    },
    {
      path: "/snacks",
      element: < Snacks/>,
    },
    {
      path: "/main-course",
      element: < MainCourse/>,
    },
    {
      path: "/healthy-options",
      element: < HealthyOptions/>,
    },
    {
      path: "/lunch-box",
      element: < LunchBox/>,
    },
    {
      path: "sign-in",
      element: < Login/>,
    },
    {
      path: "sign-up",
      element: < Register />,
    },
  ]);







  return (
    <main className="app">
      <RouterProvider router={router}/>


      {/* <SignIn/> */}
      {/* <HealthyOption /> */}
      {/* <Cart/>       */}

    </main>
  );
}

export default App;
