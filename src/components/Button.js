import React from "react";

export default function Button({text, onClick}) {
  return (
    <div>
      <div onClick={onClick} class="rounded-md px-[12px] py-[20px] max-w-[214px] h-[38px] flex items-center text-white" style={{backgroundColor:"#F28D35"}}>
        {text}
      </div>
    </div>
  );
}
