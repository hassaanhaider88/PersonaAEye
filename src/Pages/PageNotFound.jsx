import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-black via-[#111827] to-[#0f172a] min-h-screen flex flex-col items-center justify-center text-white px-6">
      
      {/* Logo Glow */}
      <motion.img
      loading="lazy"
        src="/PersonaLogo.png"
        alt="PersonaAEye Logo"
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-28 h-28 mb-6 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] animate-pulse"
      />

      {/* 404 Text */}
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="text-6xl font-extrabold tracking-wide text-cyan-400"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-xl text-gray-300 text-center max-w-xl"
      >
        The page you're looking for doesn’t exist or has been moved. Maybe you're lost in the PersonaAEye universe 🌌
      </motion.p>

      {/* CTA */}
      <Link to={'/'}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/")}
        className="mt-8 flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 transition-colors px-6 py-3 rounded-full text-lg font-medium shadow-lg"
      >
        <FaArrowLeft /> Go Back Home
      </motion.button></Link>

      {/* Footer Spark */}
      <motion.div
        className="mt-20 text-xs text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        Powered by <span className="text-cyan-400 font-semibold">PersonaAEye</span>
      </motion.div>
    </div>
  );
};

export default PageNotFound;
