import React from "react";
import "../styles/home.scss";
import home from "../assets/home.png";
import NeumorphismButton from "../components/Button";
import { Link } from "react-router-dom";
import CategoriesComponents from "../components/CategoriesComponents";

function Home() {
  return (
    <>
    <div className="homebody lg:flex xl:h-[85vh] justify-between gap-4">
      <div className="lg:w-1/2 w-full h-full  ">
        <h1 className="lg:text-7xl (900) text-5xl md:p-6 lg:py-12 xl:p-20 p-12  text-gray-800 flex text-center justify-center items-center">
          Welcome To SWAROJGAR
        </h1>
        <h1 className="lg:text-4xl text-2xl xl:px-5  text-gray-800 flex text-center">
          Connecting talented freelancers with exceptional clients to drive
          innovation and success.
        </h1>
        <div className="flex items-center justify-center xl:p-6 my-6">
          <Link to={"/jobs"}>
            <NeumorphismButton text={"Find Your Job Now!"} />
          </Link>
        </div>
      </div>
      <div className=" xl:w-1/2 h-full my-12 text-4xl  text-gray-700">
        <div className="flex h-full w-full items-center justify-center p-4">
          <img
            src={home}
            alt="homeimage"
            className="xl:size-3/4 rounded-3xl "
          />
        </div>
      </div>
    </div>
    <CategoriesComponents />
    </>
  );
}

export default Home;
