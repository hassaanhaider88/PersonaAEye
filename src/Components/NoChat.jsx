import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Sparkles, Send } from "lucide-react";
import HeroPText from "./HeroPText";

const floatAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const pulseAnimation = {
  animate: {
    scale: [1, 1.1, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const glowAnimation = {
  initial: { boxShadow: "0 0 0px rgba(0,0,0,0)" },
  animate: {
    boxShadow: [
      "0 0 0px rgba(0,0,0,0)",
      "0 0 10px rgba(99,102,241,0.6)",
      "0 0 0px rgba(0,0,0,0)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const NoChat = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-6 text-center bg-transparent">
      {/* Animated Illustration */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", duration: 0.8 }}
        className="relative bg-[#20203a] rounded-full p-10 shadow-lg"
      >
        <motion.div
          className="absolute -top-4 -right-4 bg-blue-600 p-2 rounded-full shadow-lg"
          {...floatAnimation}
        >
          <Sparkles className="text-white w-5 h-5" />
        </motion.div>

        <motion.div
          className="absolute -bottom-4 -left-4 bg-purple-600 p-2 rounded-full shadow-lg"
          {...floatAnimation}
          transition={{ ...floatAnimation.animate.transition, delay: 1 }}
        >
          <Send className="text-white w-5 h-5" />
        </motion.div>

        <motion.div {...pulseAnimation}>
          <MessageCircle className="text-blue-400 w-16 h-16" />
        </motion.div>
      </motion.div>

      {/* Headings */}
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-white font-bold text-2xl mt-6"
      >
        No Conversations Yet
      </motion.h2>

      <HeroPText
        className="scrambled-text-demo"
        radius={100}
        duration={1.2}
        speed={0.5}
        scrambleChars={".:"}
      >
        You haven’t started a conversation yet. Tap below to begin a new chat
        and make some connections. Be Carefull AI can Make mistake.And We Don't Save Your Chat As Well. Fell Free.
      </HeroPText>
    </div>
  );
};

export default NoChat;
