import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Sarthi from "./pages/Sarthi";
import Jobs from "./pages/Jobs";
import QuickSearch from "./pages/QuickSearch";
import Catalogue from "./pages/Catalogue";
import WhyUs from "./pages/WhyUs";
import Error404 from "./pages/Error404";
import Events from "./pages/Events";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div ><Navbar /><Home /><Footer /></div>,
    },
    {
      path: "/sarthi",
      element: <><Navbar /><Sarthi /><Footer /></>,
    },
    {
      path: "/jobs",
      element: <><Navbar /><Jobs /><Footer /></>,
    },
    {
      path: "/quick-search",
      element: <><Navbar /><QuickSearch /><Footer /></>,
    },
    {
      path: "/catalogue",
      element: <><Navbar /><Catalogue /><Footer /></>,
    },
    {
      path: "/events",
      element: <><Navbar /><Events /><Footer /></>,
    },
    {
      path: "/why-us",
      element: <><Navbar /><WhyUs /><Footer /></>,
    },
    {
      path: "/login",
      element: <><Navbar /><Login /><Footer /></>,
    },
    {
      path: "/signup",
      element: <><Navbar /><Signup /><Footer /></>,
    },
    {
      path: "/*",
      element: <><Navbar /><Error404 /><Footer /></>,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
