import React from "react";

export default function NavBar() {
  return (
    <div>
      <div className="flex justify-between gap-2 p-3 text-white px-11" style={{backgroundColor:"#6B3CC9"}}>
        <div className="flex items-center">
          <div className="pl-3 text-3xl">
            <b>AT DIGITAL</b>
          </div>
        </div>
        <div className="flex items-center ">
          <div className="grid grid-cols-4 gap-2 text-sm">
            <div>SERVICES</div>
            <div>ABOUT US</div>
            <div>CONTACT US</div>
            <div>CAREERS</div>
          </div>
        </div>
      </div>
    </div>
  );
}
