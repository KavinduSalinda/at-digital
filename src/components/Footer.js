import React from "react";
import CompanyLogo from "./CompanyLogo";

const Footer = () => {
  return (
    <footer className="bg-primary text-white px-8 py-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-4">
        <section className="lg:col-span-1">
          <CompanyLogo />
          <p className="lg:w-[300px] text-sm md:text-md pt-4">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve a single objective your
            business results.
          </p>
        </section>
        <div className="grid grid-cols-1 gap-8 md:gap-3 md:grid-cols-2">
          <section>
            <h4 className="font-bold text-md">Our Technologies</h4>
            <ul className="text-sm md:text-md mt-2">
              <li className="pt-2">ReactJS</li>
              <li className="pt-2">Gatsby</li>
              <li className="pt-2">NestJS</li>
              <li className="pt-2">NodeJS</li>
            </ul>
          </section>
          <section>
            <h4 className="font-bold text-md">Our Services</h4>
            <ul className="text-sm md:text-md mt-2">
              <li className="pt-2">Social Media Marketing</li>
              <li className="pt-2">Web & Mobile App Development</li>
              <li className="pt-2">Data Analytics</li>
            </ul>
          </section>
        </div>
      </div>
      <div className="flex flex-col items-center mt-6">
        <hr className="w-1/2 border-t border-gray-300 mb-2" />
        <p className="text-sm md:text-md">
          <a href="/privacy-policy" className="hover:underline">Privacy Policy</a> |{" "}
          <a href="/terms-conditions" className="hover:underline">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
