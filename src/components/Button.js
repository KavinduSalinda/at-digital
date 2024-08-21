import React from "react";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      class="rounded-md px-[12px] py-[20px] max-w-[214px] h-[38px] flex items-center text-white bg-secondary"
    >
      {text}
    </button>
  );
}
