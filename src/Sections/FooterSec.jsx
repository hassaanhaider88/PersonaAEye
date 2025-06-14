import React, { useState } from "react";
import { FaFacebookF, FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { BiLogoNetlify } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { toast } from "react-toastify";
// import {  toast } from 'react-toastify';
const FooterSec = () => {
  var FooterNavLinks = [
    "Products",
    "Features",
    "Integrations",
    "Pricing",
    "Changelog",
    "Roadmap",
    "Company",
    "Privacy Policy",
    "Refund Policy",
    "Support",
    "Community",
  ];
  const [IsEmailSubmit, setIsEmailSubmit] = useState(false);
  const [BtnLoading, setBtnLoading] = useState(false);
  const [Email, setEmail] = useState("");
  var Year = new Date().getFullYear();

 const handleEmailSubmit = (e) => {
  e.preventDefault();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!Email) {
    toast.error("Please enter your email address.");
    return;
  } else if (!emailRegex.test(Email)) {
    toast.error("Please enter a valid email address.");
    return;
  }

  setBtnLoading(true);
  setTimeout(() => {
    setIsEmailSubmit(true);
    setBtnLoading(false);
  }, 1000);
};

  return (
    <>
      <section
        id="support"
        className="w-full px-10 md:px-20 text-white text-center bg-[#030014] flex flex-col items-center justify-center"
      >
        <div className="w-full flex items-center md:flex-row flex-col justify-between py-8 px-10 md:px-20">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-3xl font-w=[400]">Stay in the Loop</h1>
            <p className="font-[200] text-gray-400 text-center mt-3">
               Subscribe to get the latest news, updates, and insights
            </p>
          </div>
          <div className="flex items-center gap-4 w-1/2 justify-between">
            {IsEmailSubmit ? (
              <p className="text-green-500 font-semibold text-lg">
                Thank you for subscribing!
              </p>
            ) : (
              <input
                type="email"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter Your Name..."
                className="peer w-full p-3 text-sm font-medium text-gray-100 bg-[#221A3A] rounded-md shadow-md transition-all duration-200 border-0 border-b border-b-[#221A3A] focus:outline-none focus:bg-[#221A3A] focus:border-b-2 focus:border-b-[#4a3194] placeholder:text-gray-400 placeholder:transition-opacity placeholder:duration-200 focus:placeholder:opacity-0"
              />
            )}

            <button
              onClick={handleEmailSubmit}
              disabled={IsEmailSubmit}
              className={`${IsEmailSubmit ? "cursor-not-allowed" : "cursor-pointer"} flex BoxShadow bg-gradient-to-r from-[#2D1A57] to-[#2d1a57a9]  px-4 py-2 border-[1px]  text-[16px]  border-[#221A3A] hover:scale-95 rounded-xl duration-200 focus:ring-1 ring-amber-50  items-center justify-center`}
            >
              {BtnLoading ? "Subscribing.." : "Subscribe"}
            </button>
          </div>
        </div>
        <hr className="w-[40%] h-[1px] rounded-[30px] bg-white " />
        <div className="w-full flex lg:flex-row flex-col gap-5 items-center justify-between py-5 px-10 md:px-20">
          <div className="">
            <img
            loading="lazy"
              src="../../PersonaLogo.png"
              alt="Logo Gose Here"
              width={"70px"}
              height={"70px"}
            />
            <p className="font-[200] text-gray-400 text-left mt-3">
              AI writing tool is designed to empower you with exceptional
              writing capabilities.
            </p>
            <div className="Socialicons py-5 my-5 w-full flex cursor-pointer items-center justify-start gap-3">
              <a href="https://www.facebook.com/CodeWeb88">
                <FaFacebookF
                  size={"30px"}
                  className="hover:scale-05 duration-500"
                />
              </a>
              <a href="https://www.linkedin.com/in/hassaan-haider-627272294">
                <FaLinkedin
                  size={"30px"}
                  className="hover:scale-90 duration-500"
                />
              </a>
              <a href="https://wa.me/+923437117831">
                <FaWhatsapp
                  size={"30px"}
                  className="hover:scale-90 duration-500"
                />
              </a>
              <a href="https://github.com/hassaanhaider88">
                <BsGithub
                  size={"30px"}
                  className="hover:scale-90 duration-500"
                />
              </a>
              <a href="https://app.netlify.com/teams/hassaanhaider88">
                <BiLogoNetlify
                  size={"30px"}
                  className="hover:scale-90 duration-500"
                />
              </a>
            </div>
            <p className="font-[200] text-gray-400 text-left mt-3">PersonaAEye, LLC. {Year}  All rights reserved.</p>
          </div>
          <div className="w-full grid grid-cols-3 gap-2">
            {/* bgColor="bg-gradient-to-tr from-pink-500 to-yellow-400" */}
            {FooterNavLinks.map((link, idx) => (
              <a
                key={idx}
                href="#"
                className={`${
                  idx == 0 || idx == 1 || idx == 2
                    ? "font-[600] text-[18px]"
                    : "font-[300] text-[15px]"
                } text-gray-300 hover:text-white duration-200`}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </section>
      <div className="w-full flex items-center  justify-center flex-col bg-[#030014]  py-5">
        <hr className="w-full bg-[#0300146e] mt-4 h-[4px] " />
        <hr className="w-full bg-[#0300146e] mt-4 h-[4px] " />
        <hr className="w-full bg-[#0300146e] mt-4 h-[4px] " />
        <hr className="w-full bg-[#0300146e] mt-4 h-[4px] " />
        <hr className="w-full bg-[#0300146e] mt-4 h-[4px] " />
      </div>
    </>
  );
};

export default FooterSec;
