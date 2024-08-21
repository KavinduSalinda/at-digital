import React, { useState } from "react";
import "../Custom.css";
import CompanyLogo from "./CompanyLogo";
import MenuIcon from "./icon/MenuIcon";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {!isOpen && (
        <nav className="flex justify-between gap-2 p-3 text-white px-11 bg-primary">
          <CompanyLogo />
          <div className="flex items-center">
            <div className="md:grid grid-cols-4 gap-5 text-sm hidden">
              <a href="#services" className="hover:underline">
                SERVICES
              </a>
              <a href="#about" className="hover:underline">
                ABOUT US
              </a>
              <a href="#contact" className="hover:underline">
                CONTACT US
              </a>
              <a href="#careers" className="hover:underline">
                CAREERS
              </a>
            </div>
            <div className="md:hidden block">
              <MenuIcon onClick={toggleMenu} />
            </div>
          </div>
        </nav>
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
            <div className="text-4xl">X</div>
          </div>
        </nav>
      )}
    </header>
  );
}
