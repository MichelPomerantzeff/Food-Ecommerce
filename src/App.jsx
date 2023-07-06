import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page/HomePage";
import SignInPage from "./pages/sign-in-page/SignInPage";
import SignUpPage from "./pages/sign-up-page/SignUnPage";
import AboutPage from "./pages/about-page/AboutPage";
import SnacksPage from "./pages/snacks-page/SnacksPage";
import MainCoursePage from "./pages/main-course-page/MainCoursePage";
import HealthyPage from "./pages/healthy-page/HealthyPage";
import LunchBoxPage from "./pages/lunch-box-page/LunchBoxPage";
import CheckoutPage from "./pages/checkout-page/CheckoutPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: < HomePage />,
    },
    {
      path: "/about",
      element: < AboutPage />,
    },
    {
      path: "/snacks",
      element: < SnacksPage />,
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
      element: < LunchBoxPage />,
    },
    {
      path: "sign-in",
      element: < SignInPage />,
    },
    {
      path: "sign-up",
      element: < SignUpPage />,
    },
    {
      path: "checkout",
      element: < CheckoutPage />,
    },
  ]);

  return (
    <main className="app">
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
