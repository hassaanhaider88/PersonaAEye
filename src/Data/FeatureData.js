import {  FaShareAlt, FaFileAlt } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineLanguage } from "react-icons/md";
import { BsChatRightDots, BsShieldLockFill } from "react-icons/bs";


const FeatureData = [
  {
    id: 1,
    title: "Role-Based Prompt Intelligence",
    description:
      "From developers and doctors to dream interpreters — PersonaAEye adapts its answers based on selected roles for unmatched relevance.",
    icon: GiArtificialIntelligence,
  },
  {
    id: 2,
    title: "Context-Aware Conversations",
    description:
      "Each role remembers what matters — get follow-up answers that stay in context, just like a human expert would respond.",
    icon: BsChatRightDots,
  },
  {
    id: 3,
    title: "Structured and Readable Output",
    description:
      "Get Markdown-ready answers for blogs, documentation, or development without formatting it yourself.",
    icon: FaFileAlt,
  },
  {
    id: 4,
    title: "Multi-Language Support",
    description:
      "Whether it's Arabic, Urdu, Hindi or French — generate natural responses in multiple languages and dialects.",
    icon: MdOutlineLanguage, 
  },
  {
    id: 5,
    title: "Private and Secure Replies",
    description:
      "Your prompts and results stay between you and your AI — encrypted, ephemeral, and secure by default.",
    icon: BsShieldLockFill,
  },
  {
    id: 6,
    title: "Collaboration-Ready Sharing",
    description:
      "Easily copy, export, or share responses with your team, clients, or audience with one click.",
    icon: FaShareAlt,
  },
];

export default FeatureData;
