import React from "react";
import Logo from "../assets/logo.png";

export default function CompanyLogo({ image = Logo, name = 'X DIGITAL' }) {
  return (
    <div className="flex items-center flex-row">
      <img src={image} alt="logo" className="h-10" />
      <div className="pl-3 text-3xl">
        <b>{name}</b>
      </div>
    </div>
  );
}



