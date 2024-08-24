// Course.js
// import React from 'react';

import { Link } from "react-router-dom";
import Eyes from "./Eyes";
import { MdNightlight } from "react-icons/md";
import { CiLight } from "react-icons/ci";
// import Cube from "./cube";

function Course({ mode, toggleMode }) {
  return (
    <div>
      <div
        className={`min-h-screen ${
          mode === "dark" ? "bg-gray-900" : "bg-blue-50"
        }`}
      >
        <nav className="  shadow-md sticky top-0 transition-shadow duration-500  ease-in-out flex  font-serif h-20 items-center justify-between border-b-2 border-gray-200 dark:border-gray-700">
          <div className="mx-3 cursor-pointer hover:scale-105 duration-75 ease-out">
            <img src="/logo.png" alt="Logo" />
          </div>
          <ul className="hidden md:flex cursor-pointer ml-[60%] p-5 gap-9 items-center text-gray-900 dark:text-gray-100">
            <li>Home</li>
            <li>About us</li>
            <li>Contact</li>
            <li>
              <Link to="/Course"> Course</Link>
            </li>
          </ul>
          <button
            onClick={toggleMode}
            className="hover:shadow-red-500 m-3 w-fit py-3  font-semibold rounded-sm shadow-md hover:bg-blue-600 transition ease-in-out duration-300 cursor-pointer px-4 text-gray-900 dark:text-gray-100"
          >
            {mode === "dark" ? <CiLight /> : <MdNightlight />}
          </button>
        </nav>
        <div className="block ml-5 p-8 md:flex md:m-4 ">
          <div className="w-[90%] h-96 md:h-auto flex justify-center items-center  md:w-[50%]  dark:border-gray-600">
            {/* <img className="-z-1" src="/sdad.jpg" alt="Reading Time" /> */}

            <Eyes />
          </div>
          <div className="text-3xl mt-7  md:text-6xl p-6 font-Gameplay md:mt-28 text-gray-900 dark:text-gray-100">
            <h1>
              HELLO LEA<span className="text-red-800">RNER!</span>
              <br />
              <br />
              WELCOME TO
              <br />
              <br />
              OUR <span className="text-red-800">WEBSITE..</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
