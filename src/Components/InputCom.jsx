import { FiSend } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import { FiMic, FiMicOff } from "react-icons/fi";
import { toast } from "react-toastify";
import roleOptions from "../Data/PromptRole";

import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import useRoleStore from "../store/userRole";
import useAuthStore from "../store/userInfo";
import { FaLess } from "react-icons/fa";

const AnimatedInputFooter = ( {handleSendMessageP }) => {
    const { UserSelectRole, handleRoleSelect } = useRoleStore();
    const {updateUserData,user} = useAuthStore()
  const [message, setMessage] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setMessage((prevMessage) => prevMessage + " " + transcript);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    } else {
      toast.warn("SpeechRecognition is not supported in this browser.");
    }
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if(user.numberOfPrompts < 100){
      handleSendMessageP(message);
      setMessage("");
      updateUserData({
        numberOfPrompts: (user.numberOfPrompts || 0) + 1,
      });
    }else{
      toast.warning('Please Upgrade Your Account')
    }
  };

  const toggleListening = () => {
    if (!recognitionRef.current) return;
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };


  const handleBackwardBtn = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };
  const handlefarwardBtn = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };
  return (
    <div className="p-6 fixed left-0  flex justify-center items-center w-[100vw] bottom-0 border-gray-700">
      <form
        onSubmit={handleSendMessage}
        className=" w-[95%] md:w-[60%] mx-auto"
      >
        <div className="relative rounded-xl border border-gray-700 bg-black shadow-lg group overflow-hidden">
          {/* Glow effect */}
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[conic-gradient(#000,#402fb5_5%,#000_38%,#000_50%,#cf30aa_60%,#000_87%)] before:w-[600px] before:h-[600px] before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:blur-2xl before:opacity-40 before:animate-spin-slow z-0" />

          {/* Border gradient */}
          <div className="absolute inset-0 before:absolute before:inset-0 before:bg-[conic-gradient(#1c191c,#402fb5_5%,#1c191c_14%,#1c191c_50%,#cf30aa_60%,#1c191c_64%)] before:w-[600px] before:h-[600px] before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:blur-sm before:opacity-70 before:animate-spin-slow-slower z-0" />

          <textarea
            style={{ boxShadow: "inset -8px 11px 20px purple" }}
            spellCheck={false}
            rows={2}
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={
              UserSelectRole?.title
                ? `AI Will Response As ${ UserSelectRole.title}...`
                : "Select a role first..."
            }
            disabled={!UserSelectRole.title}
            className={`relative resize-none z-10 w-full px-6 py-4 rounded-xl bg-black bg-opacity-70 focus:outline-none ${
              UserSelectRole.title ? "text-white" : "text-gray-500"
            } placeholder:text-gray-500`}
          />

          {/* Mic button */}
          <button
            type="button"
            onClick={toggleListening}
            className={`absolute right-12 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-colors z-10 ${
              isListening
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-gray-700 hover:bg-gray-600 text-gray-300"
            }`}
          >
            {isListening ? (
              <FiMicOff className="w-4 h-4" />
            ) : (
              <FiMic className="w-4 h-4" />
            )}
          </button>

          {/* Send button */}
          <button
            type="submit"
            disabled={!message.trim() || !UserSelectRole.title}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 p-2 rounded-lg transition-colors z-10 ${
              message.trim() && UserSelectRole.title
                ? "bg-purple-600 hover:bg-purple-700 text-white"
                : "bg-gray-700 text-gray-500"
            }`}
          >
            <FiSend className="w-4 h-4" />
          </button>
          <div className="RoleOptions py-2">
            <span
              onClick={handleBackwardBtn}
              className="w-6 z-50 cursor-pointer   absolute bottom-2 left-0"
            >
              <IoIosArrowDropleftCircle size={30} />
            </span>
            <div ref={scrollRef} className="flex gap-1 mb-1 overflow-x-auto scroll-smooth no-scrollbar">
              {roleOptions.map((role, idx) => {
                return (
                  <span
                  onClick={()=>handleRoleSelect(role)}
                    key={idx}
                    className={`${
                      idx === 0 ? "ml-6" : ""
                    } 
                    ${UserSelectRole.title === role.title ? "bg-[#6e3ecea6] border-[#220F49]": "bg-transparent border-1 "}
                    text-nowrap px-2 text-sm  cursor-pointer hover:scale-95 duration-300 relative z-40 rounded-4xl`}
                  >
                    
                    {role.title}
                  </span>
                );
              })}
            </div>
            <span
              onClick={handlefarwardBtn}
              className="w-6 z-50 cursor-pointer absolute bottom-2 right-1"
            >
              <IoIosArrowDroprightCircle size={30} />
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AnimatedInputFooter;
