import React, { useState } from "react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        className="flex justify-between gap-2 p-3 text-white px-11"
        style={{ backgroundColor: "#6B3CC9" }}
      >
        <div className="flex items-center">
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
            
          </div>
        </div>
      </div>
    </div>
  );
}
