import React from "react";
import Logo from "../assets/logo.png";
export default function Footer() {
  return (
    <div className=" text-white px-8" style={{backgroundColor:"#6B3CC9"}}>{/* bluish-purple */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-2 p-7 ">
        <div className="lg:col-span-1  ">
        <div className="flex items-center flex-row pb-4">
              <img src={Logo} alt="logo" className="h-10" />
            <div className="pl-3 text-3xl">
              <b>AT DIGITAL</b>
            </div>
          </div>
          <div className="lg:w-[300px] md:text-md text-sm ">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective-your
            business results.
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-3 md:grid-cols-2">
        <div className="col-span-1">
          <div>
            <b>Our Technologies</b>
          </div>
          <ul className="md:text-md text-sm">
            <li className="pt-2">ReactJS</li>
            <li className="pt-2">Gatsby</li>
            <li className="pt-2">NestJS</li>
            <li className="pt-2">NodeJS</li>
          </ul>
        </div>
        <div className="col-span-1">
          <div>
            <b>Our Services</b>
          </div>
          <ul className="text-md">
            <li className="pt-2">Social Media Marketing</li>
            <li className="pt-2">Web & Mobile App Development</li>
            <li className="pt-2">Data Analytics</li>
          </ul>
        </div>
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <div class="mx-auto w-1/2 border-t border-gray-300"></div>
        <div className="flex justify-center  text-md mt-2 mb-4">
          Privacy Policy | Terms & Conditions
        </div>
      </div>
    </div>
  );
}
