import React, { useEffect, useRef, useState } from "react";

const GlassPanel = () => {
  const targetDivRef = useRef(null);
  const [LeftPosition, setLeftPosition] = useState("-150px");
  const [TopPosition, setTopPosition] = useState("0px");
  const handleMouseMove = (e) => {
    const rect = targetDivRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setLeftPosition(`${x - 40}px`); // adjust for 80px blob
    setTopPosition(`${y - 40}px`);
  };
  useEffect(() => {
  const targetDiv = targetDivRef.current;
    if (targetDiv) {
      targetDiv.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (targetDiv) {
        targetDiv.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);
  return (
    <div ref={targetDivRef} className=" overflow-hidden relative px-0 md:px-10 sm:px-3 flex items-center justify-center">
      <div className="w-full z-30   border-b-[#5938a0] border-2 max-w-5xl h-[400px] rounded-3xl border-white/10 bg-white/5 backdrop-blur-lg shadow-2xl p-6 flex flex-col">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-4">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>

        <div className="flex flex-1 space-x-4">
          {/* Sidebar */}
          <div className="w-1/4 space-y-4">
            {Array.from({ length: 6 }).map((_, idx) => (
              <div
                key={idx}
                className="h-10 rounded-lg bg-white/10 animate-pulse"
              ></div>
            ))}
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-4">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div
                key={idx}
                className="h-4 rounded bg-white/10 w-full animate-pulse"
              ></div>
            ))}
            {Array.from({ length: 3 }).map((_, idx) => (
              <div
                key={idx}
                className="h-4 rounded bg-white/10 w-3/4 animate-pulse"
              ></div>
            ))}
            {Array.from({ length: 2 }).map((_, idx) => (
              <div
                key={idx}
                className="h-4 rounded bg-white/10 w-full animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
      <span
        id="CursorFollower"
        className="absolute w-[120px] h-[120px] bg-[#0C0524] rounded-full pointer-events-none"
        style={{
          top: TopPosition,
          left: LeftPosition,
        }}
      ></span>
    </div>
  );
};

export default GlassPanel;
