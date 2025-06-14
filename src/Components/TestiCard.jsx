import React from "react";

const TestiCard = ({ TData,Heigh }) => {
  return (
    <div className="w-full bg-gradient-to-b from-[#120c2b] to-[#0d0626] border-[0.5px] border-white/10 rounded-[20px] shadow-lg hover:shadow-2xl transition-all duration-500 p-6 flex flex-col items-center justify-center gap-4" style={{ height: Heigh }}>
      
      <div className="flex items-center justify-center gap-4">
        <img
        loading="lazy"
          src={TData.userImage}
          alt={TData.userName}
          className="w-16 h-16 rounded-full object-cover border-[2px] border-white/20 shadow-inner"
        />
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-semibold text-white">{TData.userName}</h1>
          <p className="text-sm text-gray-400">{TData.userRole}</p>
        </div>
      </div>

      <div className="w-[60px] h-[1px] bg-gradient-to-r from-purple-500 via-blue-400 to-purple-500 rounded-full my-2" />

      <div className="text-gray-300 text-center text-sm leading-relaxed px-2 sm:px-4">
        “{TData.userTestimonial}”
      </div>

    </div>
  );
};

export default TestiCard;
