import React from "react";
import eimiTechLogo from "../assets/main-logo.svg";

const Nav: React.FC = () => {
  return (

    <div className="container mx-auto navbar bg-base-100 ">
      <div className="navbar-start">
        <a href="/" className="text-xl font-medium ">
          <img src={eimiTechLogo} alt="Eimi Tech Innovation" />
        </a>
      </div>
      <div className="hidden navbar-center lg:flex">
        {/* TODO:active  */}
        <ul className=" menu menu-horizontal">
          <li>
            <a href="#mission"> Mission</a>
          </li>
          <li>
            <a href="#services"> Services </a>
          </li>
          <li>
            <a href="#about"> About </a>
          </li>
        </ul>
      </div>
      <div className="gap-3 navbar-end">
        <a className="rounded-md btn btn-sm bg-btnBg text-bgText w-30 hover:bg-btnHover">
          Contact Us
        </a>
        <a className="rounded-md w-30 btn btn-sm bg-btnBg text-bgText hover:bg-btnHover">
          Join us...
        </a>
      </div>

      <div className="dropdown">
        <div
          tabIndex={0}
          role="button"
          className="border btn btn-ghost lg:hidden "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-28 p-2 right-5 shadow"
        >
          <li>
            <a>Mission</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>About</a>
          </li>
        </ul>
      </div>
    </div>


  );
};

export default Nav;
