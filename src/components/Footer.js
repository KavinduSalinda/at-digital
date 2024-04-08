import React from "react";

export default function Footer() {
  return (
    <div className=" text-white px-8" style={{backgroundColor:"#6B3CC9"}}>{/* bluish-purple */}
      <div className="grid grid-cols-4 gap-2 p-6 ">
        <div className="col-span-2">
          <div className="text-3xl pb-3">
            <b>AT DIGITAL</b>
          </div>
          <div className="w-[300px] text-sm">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective-your
            business results.
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <b>Our Technologies</b>
          </div>
          <ul className="text-sm">
            <li className="pt-2">ReactJS</li>
            <li className="pt-2">Gatsby</li>
            <li className="pt-2">NestJS</li>
            <li className="pt-2">NodeJS</li>
            <li className="pt-2">GraphQL</li>
            <li className="pt-2">Laravel</li>
          </ul>
        </div>
        <div className="col-span-1">
          <div>
            <b>Our Services</b>
          </div>
          <ul className="text-sm">
            <li className="pt-2">Social Media Marketing</li>
            <li className="pt-2">Web & Mobile App Development</li>
            <li className="pt-2">Data Analytics</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <div class="mx-auto w-1/2 border-t border-gray-300"></div>
        <div className="flex justify-center  text-sm mt-2 mb-4">
          Privacy Policy | Terms & Conditions
        </div>
      </div>
    </div>
  );
}
