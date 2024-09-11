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



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div ><Navbar /><Home /></div>,
    },
    {
      path: "/sarthi",
      element: <><Navbar /><Sarthi /></>,
    },
    {
      path: "/jobs",
      element: <><Navbar /><Jobs /></>,
    },
    {
      path: "/quick-search",
      element: <><Navbar /><QuickSearch /></>,
    },
    {
      path: "/catalogue",
      element: <><Navbar /><Catalogue /></>,
    },
    {
      path: "/events",
      element: <><Navbar /><WhyUs /></>,
    },
    {
      path: "/why-us",
      element: <><Navbar /><Error404 /></>,
    },
  ]);
  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </div>
  );
}
