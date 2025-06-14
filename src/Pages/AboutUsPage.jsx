import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FaRobot, FaBrain, FaRocket, FaCode } from "react-icons/fa";

const AboutUsPage = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 0, rotate: 0 },
        { scale: 1, rotate: 360, duration: 1.5, ease: "back.out(1.7)" }
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0f172a4f] text-white py-12 px-6 md:px-20">
      <Link to="/" className="text-white  text-sm">
        Home
      </Link>
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Hero Section */}
        <img
        loading="lazy"
          ref={imageRef}
          src="/PersonaLogo.png"
          alt="PersonaAEye"
          className="w-28 h-28 mx-auto drop-shadow-[0_0_15px_rgba(0,255,255,0.6)]"
        />
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          About PersonaAEye
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-300 text-lg md:text-xl"
        >
          PersonaAEye is your intelligent digital assistant—engineered by a passionate front-end developer with deep curiosity for AI, real-time systems, and creative coding.
        </motion.p>

        {/* Mission Section */}
        <Section icon={<FaRocket />} title="Our Mission">
          We aim to empower users through intelligent, responsive, and personalized AI interactions. Whether you're a student, developer, or just curious—PersonaAEye is here to assist, respond, and grow with you.
        </Section>

        {/* Developer Background */}
        <Section icon={<FaCode />} title="Who's Behind PersonaAEye?">
          My name is Hassaan Haider, a self-taught front-end developer with 2+ years of experience in building smart, elegant UIs using React, Tailwind CSS, and JavaScript. I’ve worked with tools like Express.js, MongoDB, EJS, and GSAP to bring dynamic web apps to life.
          <br />
          <br />
          My journey began with a love for building things. From simple components to full-stack Pinterest clones, social media tools, video downloaders, and even AI agents—PersonaAEye is the culmination of everything I’ve learned and imagined.
        </Section>

        {/* Tech Stack */}
        <Section icon={<FaBrain />} title="Powered By">
          <ul className="list-disc list-inside text-left">
            <li>React, Zustand, Tailwind CSS, GSAP for UI & animations</li>
            <li>Express.js, Node.js, MongoDB for backend APIs</li>
            <li>Cloudinary for media storage, Vercel for deployment</li>
            <li>AI logic powered by custom response filtering and future LLM support</li>
          </ul>
        </Section>

        {/* Features */}
        <Section icon={<FaRobot />} title="Key Features">
          <ul className="list-disc list-inside text-left">
            <li>Smart local responses for common greetings</li>
            <li>Real-time chat interface with scroll-to-bottom & AI replies</li>
            <li>Custom role selection for personalized responses</li>
            <li>Interactive UI with animated transitions and role-based flows</li>
            <li>Upcoming Telegram bot integration</li>
          </ul>
        </Section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10"
        >
          <p className="text-gray-400 text-md italic">
            "PersonaAEye is more than just a tool—it's your AI-powered companion in the world of code, creativity, and curiosity."
          </p>
          <p className="text-white font-semibold mt-4">
            — Hassaan Haider (Creator of PersonaAEye)
          </p>
        </motion.section>
      </div>
    </div>
  );
};

const Section = ({ icon, title, children }) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="text-left mt-8 space-y-4"
  >
    <h2 className="text-2xl text-white font-semibold flex items-center gap-2">
      {icon} {title}
    </h2>
    <div className="text-gray-300">{children}</div>
  </motion.section>
);

export default AboutUsPage;