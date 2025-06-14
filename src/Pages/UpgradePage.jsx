import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const UpgradePage = ({plan='free'}) => {
  const [userNumber, setUserNumber] = useState("");
  const [TRXID, setTRXID] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      userNumber,
      TRXID,
      provider: "EasyPress / JSCADS", // Customize as needed
      upgradedAt: new Date().toISOString(),
    };

    console.clear();
    console.log("%c===== ACCOUNT UPGRADE DATA =====", "color: lime; font-size: 20px; font-weight: bold;");
    console.log(data);
    console.log("%c================================", "color: lime; font-size: 20px;");
    toast.success("Your upgrade request has been submitted! Please wait Contact Us After Payment");
  };

  return (
    <section className="min-h-screen bg-transparent flex flex-col items-center justify-center px-4 py-10 text-white">
      <Link to={'/'} className="absolute top-5 left-5">Home</Link>
      <div className="w-full max-w-lg bg-[#15162b] rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-white">Upgrade Your Account</h2>
        <p className="text-sm text-gray-400 text-center mb-6">
          Enter your mobile number and BNIB number provided by EasyPaisa Or JazzCash After Payment.
        </p>
        <div className="mx-auto w-full text-md flex flex-col items-start justify-center">
           <h1>Number: 03437117831</h1>
         <h1>User Name: Hassaan Haider</h1>
         <h1>Amount: {plan == "Free" ? 0  : plan == "free" ? 300 : plan == "Medium" ? 1200 : plan == "Business" ? 2500 :  10000 } Rupess Only</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Your Phone Number</label>
            <input
              type="tel"
              value={userNumber}
              onChange={(e) => setUserNumber(e.target.value)}
              placeholder="+92 345 1234567"
              className="w-full px-4 py-3 rounded-xl bg-[#1f223a] border border-[#2e3154] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">TRX ID</label>
            <input
              type="text"
              value={TRXID}
              onChange={(e) => setTRXID(e.target.value)}
              placeholder="e.g. 34567809876"
              className="w-full px-4 py-3 rounded-xl bg-[#1f223a] border border-[#2e3154] text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-purple-600 hover:bg-purple-700 transition duration-200 py-3 rounded-xl text-lg font-semibold"
          >
            Submit & Upgrade
          </button>
          <p>please contact at <a href="https://wa.me/+923437117831" className="text-green-400">WhatsApp</a></p>
        </form>
      </div>
    </section>
  );
};

export default UpgradePage;
