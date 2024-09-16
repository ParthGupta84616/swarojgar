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
import AIbot from "./components/AIbot";
import PostJob from "./pages/PostJob";
import UnderConstruction from "./pages/UnderConstruction";



export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div ><Navbar /><Home /><Footer /><AIbot /></div>,
    },
    {
      path: "/sarthi",
      element: <><Navbar /><Sarthi /><Footer /><AIbot /></>,
    },
    {
      path: "/jobs",
      element: <><Navbar /><Jobs /><Footer /><AIbot /></>,
    },
    {
      path: "/quick-search",
      element: <><Navbar /><UnderConstruction /><Footer /><AIbot /></>,
    },
    {
      path: "/catalogue",
      element: <><Navbar /><Catalogue /><Footer /><AIbot /></>,
    },
    {
      path: "/events",
      element: <><Navbar /><Events /><Footer /><AIbot /></>,
    },
    {
      path: "/why-us",
      element: <><Navbar /><WhyUs /><Footer /><AIbot /></>,
    },
    {
      path: "/login",
      element: <><Navbar /><Login /><Footer /><AIbot /></>,
    },
    {
      path: "/signup",
      element: <><Navbar /><Signup /><Footer /><AIbot /></>,
    },
    {
      path: "/post-job",
      element: <><Navbar /><PostJob /><Footer /><AIbot /></>,
    },
    {
      path: "/find-job",
      element: <><Navbar /><UnderConstruction /><Footer /><AIbot /></>,
    },
    {
      path: "/*",
      element: <><Navbar /><Error404 /><Footer /><AIbot /></>,
    }
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
