import React, { useEffect, useRef, useState } from "react";
import BageButton from "../Components/BageButton";
import HeroPText from "../Components/HeroPText";
import FeatureData from "../Data/FeatureData.js";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

const FeatureSec = () => {
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
    <section
      id="feature"
      className="w-full text-center min-h-screen flex flex-col items-center justify-center"
    >
      <BageButton text={"Some of Main Features"} />
      <h1 className="text-4xl  md:text-7xl font-[900] tracking-tight mt-3 text-center  text-white">
        Key Features of Our Tool
      </h1>
      <HeroPText
        className="scrambled-text-demo"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars={".:"}
      >
        Say goodbye to writer’s block and complicated prompts. PersonaAEye lets
        you focus only on your ideas — while it transforms them into clear,
        professional, and well-structured writing. It’s fast, reliable, and
        tailored to your intent, whether you’re drafting emails, blog posts, or
        technical content.
      </HeroPText>
      {/* Features List */}
      <div className="featuresCards grid px-10 md:px-20  gap-4  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {FeatureData.map((feature) => {
          return (
            <div
              key={feature.id}
              className="featureCard text-center flex gap-3 flex-col items-center justify-cente p-6 bg-[#06031793] hover:bg-[#06031781] rounded-[20px] cursor-pointer 
    hover:shadow-[-2px_-2px_5px_-2px__inset_#fafafa,2px_2px_5px_-2px__inset_#fafafa] transition-all duration-500 transform hover:scale-90"
            >
              <span className="text-4xl p-5 rounded-full bg-[#060317be] border-[1px] border-[#fcfcfce0] text-[#fcfcfce0] mb-4">
                {<feature.icon />}
              </span>
              <h2 className="text-2xl font-bold text-white mb-2">
                {feature.title}
              </h2>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          );
        })}
      </div>
      <div className="AssistanceDiv relative  w-full min-h-screen mt-5 flex flex-col md:flex-row items-center justify-center gap-5 md:px-20 px-5 py-8">
        <div
          ref={targetDivRef}
          className="w-full flex py-10 md:py-20 min-h-[80vh] rounded-4xl border-[0.5px] border-[#fafafa]  px-8 z-20 flex-col lg:flex-row justify-between items-center bg-[#13092ecc]"
        >
          <div>
            <BageButton text={"PersonaAEye-Powered Writings Tools"} />
            <h1 className="text-2xl text-left  md:text-4xl font-[900] tracking-tight mt-3 text-white">
              Smarter, Faster & Sharper Writing
            </h1>
            <p className="font-[200] text-gray-400 text-left mt-3">
              Unlock next-level writing with our intelligent AI assistant <br />
              Enhancing your clarity, speed, and creativity across every word
              you write.
            </p>
            <Link to={"/sign-in"}>
              <button className="flex items-center w-full md:w-fit focus:scale-95 justify-center gap-1.5 px-6 py-2 rounded-full bg-[#2D1E4D] cursor-pointer text-white border-[0.5px] border-[#fafafa] duration-300 my-5 hover:shadow-[-2px_-2px_5px_-2px__inset_#fafafa,2px_2px_5px_-2px__inset_#fafafa] transition-all">
                Learn More <FaArrowRight />
              </button>
            </Link>
          </div>
          <div>
            <img
            loading="lazy"
              src="../FeatureImgBg.svg"
              alt="Feature Illustration"
              className="w-full md:w-[500px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
        <span
          id="CursorFollower"
          className="absolute w-[220px] flex items-center justify-center blur-lg h-[220px] bg-[#301a7a] rounded-full pointer-events-none"
          style={{
            top: TopPosition,
            left: LeftPosition,
          }}
        >
          <span className="absolute w-[160px] blur-lg h-[160px] bg-[#ffffffe7] rounded-full pointer-events-none">
            <span className="absolute w-[120px] blur-lg h-[120px] bg-[#0a0a0af3] rounded-full pointer-events-none"></span>
          </span>
        </span>
      </div>
    </section>
  );
};

export default FeatureSec;
