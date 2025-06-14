import React, { useRef } from "react";
import UserChat from "./UserChat";
import AIChat from "./AIChat";
import NoChat from "./NoChat";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import useChatStore from "../store/userChat";
import { IoIosArrowDroprightCircle } from "react-icons/io";

const ChatPanel = ({chatRef}) => {
  const { chatData,addChatMessage } = useChatStore()
        const handleScrollToTop = () =>{
       chatRef.current.scrollBy({ top: 300, behavior: "smooth" });
        }
  return (
    <>
      <div ref={chatRef} className="w-full pb-[200px] max-h-full overflow-y-auto  no-scrollbar scroll-smooth relative px-5 md:px-10 py-5 gap-3 bg-transparent flex flex-col">
        {
          chatData.length > 0 ? 
            chatData.map((Chat,idx) => {
          if (Chat.sender === "user") return <UserChat key={idx} ChatData={Chat} />;
          else return ( <AIChat key={idx} ChatData={Chat} />);
        }) : <NoChat/>  
        }
      </div>
       {chatData.length > 0 && (
        <motion.button
          onClick={handleScrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-[25%] left-1/2 -translate-x-1/2 p-3 rounded-full bg-[#462096] text-white shadow-md hover:bg-[#24114d8c] z-50"
        >
          <IoIosArrowDroprightCircle className="w-5 rotate-90 h-5" />
        </motion.button>
      )}
    </>
  );
};

export default ChatPanel;
