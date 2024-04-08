import React, { useState } from "react";
import "../Custom.css";
import Logo from "../assets/logo.png";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {!isOpen && (
        <div
          className="flex justify-between gap-2 p-3 text-white px-11"
          style={{ backgroundColor: "#6B3CC9" }}
        >
          <div className="flex items-center flex-row">
              <img src={Logo} alt="logo" className="h-10" />
            <div className="pl-3 text-3xl">
              <b>AT DIGITAL</b>
            </div>
          </div>
          <div className="flex items-center ">
            <div className="md:grid grid-cols-4 gap-5 text-sm hidden">
              <div>SERVICES</div>
              <div>ABOUT US</div>
              <div>CONTACT US</div>
              <div>CAREERS</div>
            </div>
            <div className="md:hidden block">
              <div onClick={toggleMenu} className="flex flex-col">
                <div className="w-5 h-1 bg-white"></div>
                <div className="w-5 h-1 bg-white my-1"></div>
                <div className="w-5 h-1 bg-white"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isOpen && (
        <nav className="absolute w-[100vw] h-[100vh] z-30 bg-slate-50 flex flex-row justify-between">
          <div className="p-6 ">
            <ul>
              <li className="text-md p-4">
                <a href="#home">HOME</a>
              </li>
              <li className="text-md p-4">
                <a href="#services">SERVICES</a>
              </li>
              <li className="text-md p-4">
                <a href="#about">ABOUT US</a>
              </li>
              <li className="text-md p-4">
                <a href="#contact">CONTACT US</a>
              </li>
              <li className="text-md p-4">
                <a href="#careers">CAREERS</a>
              </li>
            </ul>
          </div>
          <div onClick={toggleMenu} className="p-10">
            <div className="text-4xl">
              X
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
