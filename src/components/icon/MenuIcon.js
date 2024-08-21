import React from "react";

const MenuIcon = ({ onClick }) => {
    return (
      <button onClick={onClick} className="flex flex-col cursor-pointer">
        <div className="w-5 h-1 bg-white"></div>
        <div className="w-5 h-1 bg-white my-1"></div>
        <div className="w-5 h-1 bg-white"></div>
      </button>
    );
};

export default MenuIcon;