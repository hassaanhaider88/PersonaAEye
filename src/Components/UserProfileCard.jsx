import React from "react";
import { FaUserCircle } from "react-icons/fa"; // Example avatar icon
// import { Redirect } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useAuthStore from "../store/userInfo";

const UserProfileCard = () => {

  const {
    user,
     handleSignOut,
   } = useAuthStore();
      const navigate = useNavigate();
        var handdleSignOut =()=>{
                   handleSignOut();

        }
        var handleUpGrade =()=>{
      return navigate('/upgrade');
        }
  return (
    <div className="w-72 h-[384px] rounded-2xl bg-white shadow-md flex flex-col items-center relative overflow-hidden">
      {/* Top Background */}
      <div className="w-full h-48 bg-gradient-to-br from-[#3015615e] to-[#2F1561]" />

      {/* Avatar */}
      <div className="absolute top-[96px] w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-md">
        <FaUserCircle className="w-24 h-24 text-black" />
      </div>

      {/* Name & Title */}
      <div className="mt-4 text-center">
        <h2 className="text-lg font-medium text-black">{user.name}</h2>
        <p className="text-sm text-gray-500 mt-1">{user.email}</p>
        <p  className="text-sm text-gray-500 mt-1">Number  of Prompts Left {100 - user.numberOfPrompts}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button onClick={handleUpGrade} className="w-20 h-8 text-xs font-bold uppercase border-2 border-black text-black rounded hover:bg-black hover:text-white transition">
        UpGrade</button>
        <button onClick={handdleSignOut} className="w-20 h-8 text-xs font-bold uppercase bg-black text-white rounded hover:bg-white hover:text-black hover:border-2 hover:border-black transition">
         Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserProfileCard;
