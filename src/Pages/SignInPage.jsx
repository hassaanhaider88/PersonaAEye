import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Sections/FooterSec";
import GlassPanel from "../Components/GlassPanel";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbPasswordFingerprint } from "react-icons/tb";
import { HiEye, HiEyeOff } from "react-icons/hi";
import useAuthStore from "../store/userInfo";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { signInWithPopup } from "firebase/auth";
// import { auth, googleProvider } from "./firebase";


const SignInPage = () => {
  const { handleSignIn, isLoggedIn, loadUserFromLocalStorage } = useAuthStore();
  const [IsBtnLoading, setIsBtnLoading] = useState(false);
  const navigate = useNavigate();
useEffect(() => {
  if (isLoggedIn) {
    console.log("User is logged in:", isLoggedIn);
    setIsBtnLoading(false);
    navigate("/");
  }
}, [isLoggedIn]);

  const [IsPassShown, setIsPassShown] = useState(false);
  const [FormData, setFormData] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const handleFormData = (e) => {
    setIsBtnLoading(true);
    if (FormData.Name && FormData.Email && FormData.Password) {
      e.preventDefault();
      handleSignIn(FormData);
      setTimeout(() => {
        setIsBtnLoading(false);
        return navigate("/");
      }, 1000);
    } else {
      setIsBtnLoading(false);
      toast.error("Please Fill All fields..😠");
    }
  };

const  handleGoogleCall = async()=>{
  toast.success('Google Will added soon')
  // try {
  //     const result = await signInWithPopup(auth, googleProvider);
  //     const user = result.user;
  //     const name = user.displayName;
  //     const email = user.email;

  //     console.log("Name:", name);
  //     console.log("Email:", email);
  //     alert(`Welcome ${name}! Your email is ${email}`);

  //   } catch (error) {
  //     console.error("Google sign-in error:", error);
  //   }
}
const handleGitHubCall = () =>{
    toast.success('GitHub Will added soon')
}

  var BtnCss =
    "w-full cursor-pointer flex items-center justify-center gap-3 bg-transparent border border-slate-600 text-white py-3 px-4 rounded-lg transition-colors hover:border-[#794FC4] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2";
  return (
    <>
      <NavBar IsNavLinkShown={false} />
      <div className="min-h-screen p-14  w-full flex-col gap-10 flex items-center justify-center">
        <h1 className="text-4xl  md:text-7xl font-[900] tracking-tight mt-3 text-center  text-white">
          Sign In
        </h1>
        <p className="font-[200]  text-gray-400 text-center">Home / Sign In</p>
        <div className="min-h-screen BxShadow gap-9 lg:flex-row py-12 flex-col rounded-4xl w-full px-10 bg-[#100D20] flex">
          <div className="flex-1 flex items-center justify-center px-6 lg:px-10">
            <div className="max-w-lg">
              <h1 className="text-5xl font-bold text-white mb-12 leading-tight">
                Unlock the Power of
                <br />
                PersonaAEye
              </h1>
              <GlassPanel />
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="flex-1 flex items-center justify-center px-8 lg:px-16">
            <div className="w-full max-w-sm">
              <div className="space-y-4 mb-8">
                <button onClick={handleGoogleCall} className={BtnCss}>
                  <FcGoogle />
                  Sign in with Google
                </button>
                <button onClick={handleGitHubCall} className={BtnCss}>
                  <BsGithub />
                  Sign in with GitHub
                </button>
              </div>

              {/* Divider */}
              <div className="relative mb-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-600"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-[#100D20] text-slate-400">
                    Or sign up with email
                  </span>
                </div>
              </div>

              {/* Email Sign Up Form */}
              <form className="space-y-4">
                {/* Name Input */}
                <div className="relative">
                  <FaRegUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    value={FormData.Name}
                    name="Name"
                    onChange={(e) =>
                      setFormData({
                        ...FormData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    required
                    type="text"
                    placeholder="Enter your name"
                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                </div>

                {/* Email Input */}
                <div className="relative">
                  <MdOutlineEmail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    value={FormData.Email}
                    name="Email"
                    onChange={(e) =>
                      setFormData({
                        ...FormData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    required
                    type="email"
                    placeholder="Enter your email"
                    className="w-full pl-12 pr-4 py-3 bg-transparent border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                </div>

                {/* Password Input */}
                <div className="relative">
                  <TbPasswordFingerprint className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input
                    value={FormData.Password}
                    name="Password"
                    onChange={(e) =>
                      setFormData({
                        ...FormData,
                        [e.target.name]: e.target.value,
                      })
                    }
                    required
                    type={`${IsPassShown ? "text" : "password"}`}
                    placeholder="Your Password"
                    className="w-full pl-12 pr-12 py-3 bg-transparent border border-slate-600 text-white placeholder-slate-400 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  />
                  {/* HiEyeOff || HiEye */}
                  {IsPassShown ? (
                    <HiEye
                      onClick={() => setIsPassShown(!IsPassShown)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 cursor-pointer"
                    />
                  ) : (
                    <HiEyeOff
                      onClick={() => setIsPassShown(!IsPassShown)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5 cursor-pointer"
                    />
                  )}
                </div>

                {/* Sign Up Button */}
                <button
                  onClick={handleFormData}
                  type="submit"
                  className="w-full bg-[#7C52C7] hover:bg-[#7d52c7b9] hover:scale-95 cursor-pointer text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  {IsBtnLoading ? "Signing...." : "Sign up with AI Tool"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignInPage;
