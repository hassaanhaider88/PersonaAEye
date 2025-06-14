import  { useEffect, useRef, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";
import { Link, Links } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const NavBar = ({IsNavLinkShown=true}) => {
  const [CntNavLink, setCntNavLink] = useState("Home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [IsMenuShow, setIsMenuShow] = useState(false)

const CommonClassInNav = "relative  text-white backdrop-blur-md transition py-1 px-4 rounded-[20px] font-light hover:scale-105 duration-300";
const AcitveNavClass = "font-semibold bg-[#382461a4] ring-1 ring-white/30 before:absolute before:inset-0.5 before:rounded-[20px] before:bg-gradient-to-r before:from-purple-500 before:to-purple-700 before:blur-md before:opacity-40 before:z-[-1]"
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`transition-colors py-6 sticky top-0 z-[100] md:px-14 px-8 w-full flex  justify-between items-center ${
          isScrolled === true ? "bg-[#1b0f3165]" : "bg-transparent"
        }`}
      >
        <Link to={"/"}>
          <div className="Logo">
            <img
            loading="lazy"
              src="./PersonaLogo.png"
              alt="Logo Gose Here "
              width={"50px"}
              height={"50px"} 
            />
          </div>
        </Link>
        {IsNavLinkShown && (
        <div className="navlinks lg:flex hidden gap-4">
          <HashLink smooth to="#home">
            <span
              onClick={() => setCntNavLink("Home")}
              className={`${CommonClassInNav} ${
                CntNavLink === "Home"
                  ? `${AcitveNavClass}`
                  : "opacity-90 hover:opacity-100"
              } `}
            >
              Home
            </span>
          </HashLink>
          <HashLink smooth to="#feature">
            <span
              onClick={() => setCntNavLink("Feature")}
              className={`${CommonClassInNav} ${
                CntNavLink === "Feature"
                  ? `${AcitveNavClass}`
                  : "opacity-90 hover:opacity-100"
              } `}
            >
              Feature
            </span>
          </HashLink>
          <HashLink smooth to="#pricing">
            <span
              onClick={() => setCntNavLink("Pricing")}
              className={`${CommonClassInNav} ${
                CntNavLink === "Pricing"
                  ? `${AcitveNavClass}`
                  : "opacity-90 hover:opacity-100"
              } `}
            >
              Pricing
            </span>
          </HashLink>
         <Link to="/about-us">
            <span
              onClick={() => {setCntNavLink("About") ; setIsMenuShow(false)}}
              className={`${CommonClassInNav} ${
                CntNavLink === "About"
                  ? `${AcitveNavClass}`
                  : "opacity-90 hover:opacity-100"
              } `}
            >
              About
            </span>
          </Link>
          <HashLink smooth to="#support">
            <span
              onClick={() => setCntNavLink("Support")}
              className={`${CommonClassInNav} ${
                CntNavLink === "Support"
                  ? `${AcitveNavClass}`
                  : "opacity-90 hover:opacity-100"
              } `}
            >
              Support
            </span>
          </HashLink>
        </div>
        )}
        <div className="buttons hidden justify-center items-center lg:flex gap-5">
          <Link to={"/sign-in"}>
            <button className="relative text-white font-light">Sign In</button>
          </Link>
          <Link to={"/sign-in"}>
            <button className="relative flex gap-1 items-center justify-center text-white backdrop-blur-md transition py-2 px-5 rounded-[5px] font-light hover:scale-105 duration-300 bg-[#382461a4] ring-1 ring-white/30 before:absolute before:inset-0.5 before:rounded-[20px] before:bg-gradient-to-r before:from-purple-500 before:to-purple-700 cursor-pointer before:blur-md before:opacity-40 before:z-[-1]">
              Sign Up <LuArrowUpRight />
            </button>
          </Link>
        </div>
        <div className="BurgerMenu lg:hidden flex items-center">
          {/* Burger Menu */}
          <label className="burger" htmlFor="burger">
            <input checked={IsMenuShow} onChange={()=>setIsMenuShow(!IsMenuShow)} type="checkbox" id="burger" />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
      {/* Mobile Menu goes here  */}
      {
        IsMenuShow === true && (
                <div className="flex justify-center z-50 items-center w-full h-screen bg-[#00000062] fixed">
        <div className="w-[500px] bg-[#180b3ad5] rounded-lg p-5 flex flex-col justify-center items-start gap-5">

          <HashLink smooth to="#home">
            <span
              onClick={() => {setCntNavLink("Home"); setIsMenuShow(false)}}
              className={`${CommonClassInNav} ${
                CntNavLink === "Home"
                  ? `${AcitveNavClass}`
                  : "opacity-90 hover:opacity-100"
              } `}
            >
              Home
            </span>
          </HashLink>
          <HashLink smooth to="#feature">
            <span
              onClick={() => {setCntNavLink("Feature") ; setIsMenuShow(false)}}
              className={`${CommonClassInNav} ${
                CntNavLink === "Feature"
                  ? `${AcitveNavClass}`
                  : "opacity-90 hover:opacity-100"
              } `}
            >
              Feature
            </span>
          </HashLink>
          <HashLink smooth to="#pricing">
            <span
              onClick={() => {setCntNavLink("Pricing") ; setIsMenuShow(false)}}
              className={`${CommonClassInNav} ${
                CntNavLink === "Pricing"
                  ? `${AcitveNavClass}`
                  : "opacity-90 hover:opacity-100"
              } `}
            >
              Pricing
            </span>
          </HashLink>
          <Link to="/about-us">
            <span
              onClick={() => {setCntNavLink("About") ; setIsMenuShow(false)}}
              className={`${CommonClassInNav} ${
                CntNavLink === "About"
                  ? `${AcitveNavClass}`
                  : "opacity-90 hover:opacity-100"
              } `}
            >
              About
            </span>
          </Link>
          <HashLink smooth to="#support">
            <span
              onClick={() => {setCntNavLink("Support") ; setIsMenuShow(false)}}
              className={`${CommonClassInNav} ${
                CntNavLink === "Support"
                  ? `${AcitveNavClass}`
                  : "opacity-90 hover:opacity-100"
              } `}
            >
              Support
            </span>
          </HashLink>
          <Link smooth to="/sign-in">
            <span
              className={` relative  text-white backdrop-blur-md transition py-1 px-4 rounded-[5px] font-light hover:scale-105 duration-30 bg-[#382461a4] ring-1 ring-white/30 before:absolute before:inset-0.5 before:rounded-[20px] before:bg-gradient-to-r before:from-purple-500 before:to-purple-700 before:blur-md before:opacity-40 before:z-[-1]`}
            >
              Sign In
            </span>
          </Link>
        
        </div>
        
      </div>
        )
      }
    </>
  );
};

export default NavBar;
