import "./App.css";
import SignIn from "./components/signs/Signs";
import Bag from "./components/bag/Bag";
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

function App() {




  const router = createBrowserRouter([
    {
      path: "/",
      element: < Home/>,
    },
    {
      path: "sign-in",
      element: < Login type={'sign-in'}/>,
    },
    {
      path: "sign-up",
      element: < Register type={'sign-up'}/>,
    },
  ]);







  return (
    <main className="app">
      <RouterProvider router={router}/>


      {/* <SignIn/> */}
      {/* <HealthyOption /> */}
      {/* <Bag/>       */}

    </main>
  );
}

export default App;
