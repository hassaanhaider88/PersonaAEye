import React from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";

const BageButton = ({text}) => {
  return (
    <div>
      <button className="flex text-[13px] scale-90 border border-transparent cursor-pointer gap-3 items-center justify-center bg-gradient-to-r from-[#2D1A57] to-[#2d1a57d5] text-white font-[600] text-lg px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition hover:border-b-[#6f4db8] duration-300 hover:scale-x-90 hover:border-b-1">
        <FaWandMagicSparkles />
        <span>{text}</span>
      </button>
    </div>
  );
};

export default BageButton;
