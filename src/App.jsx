import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/signin/Login";
import Register from "./pages/signup/Register";
import About from "./pages/about/About";
import Snacks from "./pages/snacks/Snacks";
import MainCoursePage from "./pages/main-course-page/MainCoursePage";
import HealthyPage from "./pages/healthy-page/HealthyPage";
import LunchBox from "./pages/lunch-box/LunchBox";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: < Home />,
    },
    {
      path: "/about",
      element: < About />,
    },
    {
      path: "/snacks",
      element: < Snacks />,
    },
    {
      path: "/main-course",
      element: < MainCoursePage />,
    },
    {
      path: "/healthy",
      element: < HealthyPage />,
    },
    {
      path: "/lunch-box",
      element: < LunchBox />,
    },
    {
      path: "sign-in",
      element: < Login />,
    },
    {
      path: "sign-up",
      element: < Register />,
    },
  ]);

  return (
    <main className="app">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
