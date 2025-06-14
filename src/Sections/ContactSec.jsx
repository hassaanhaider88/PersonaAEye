import { useState } from "react";
import BageButton from "../Components/BageButton";
import { toast } from "react-toastify";
import HeroPText from "../Components/HeroPText";

const ContactSec = () => {
  const [IsFormSubmited, setIsFormSubmited] = useState(false);
  const [FormData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });
  const handleFormData = (e) => {
    e.preventDefault();
    if (FormData.Name && FormData.Email && FormData.Message) {
      setIsFormSubmited(true);
      // setIsFormSubmited(false);
    } else {
      toast.error("Please Full The Feilds Properly");
      setIsFormSubmited(false);
    }
  };
  return (
    <section
      id="contact"
      className="w-full px-10 md:px-20 text-center min-h-screen flex flex-col items-center justify-center"
    >
      <div className="bg-[#180B39] pt-20 w-full h-full flex flex-col items-center justify-center rounded-3xl ">
        <BageButton text={"Need Any Help!"} />
        <h1 className="text-2xl  md:text-6xl font-[900] tracking-tight mt-3 text-center  text-white">
          Contact With Us
        </h1>
        <p className="font-[200] text-gray-400 text-center mt-3">
          Have questions or need help getting started? Fill out the form <br />{" "}
          below and our team will get back to you promptly
        </p>
        {IsFormSubmited ? (
          <div className="w-full border border-white rounded-b-none border-b-transparent px-5 md:px-10 rounded-4xl max-w-4xl mx-auto mt-10 pb-10 flex flex-col gap-5">
            <HeroPText
              className="scrambled-text-demo"
              radius={100}
              duration={1.2}
              speed={0.5}
              scrambleChars={".:"}
            >
              Thanks For Contacting Us. We Will Reach You As Soon As Possible.
              Please Wait Till.
            </HeroPText>
          </div>
        ) : (
          <form
            action="/"
            className="w-full border border-white rounded-b-none border-b-transparent px-5 md:px-10 rounded-4xl max-w-4xl mx-auto mt-10 pb-10 flex flex-col gap-5"
          >
            <div className="flex flex-col md:flex-row gap-5 mt-10 w-full max-w-4xl mx-auto">
              <div className="flex text-left flex-col w-full">
                <label
                  htmlFor="Name"
                  className="text-white text-[17px] my-3 font-[400]"
                >
                  Name
                </label>
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
                  placeholder="Enter Your Name..."
                  className="peer w-full px-3 py-3 text-sm font-medium text-gray-100 bg-[#221A3A] rounded-md shadow-md transition-all duration-200 border-0 border-b border-b-[#221A3A] focus:outline-none focus:bg-[#221A3A] focus:border-b-2 focus:border-b-[#4a3194] placeholder:text-gray-400 placeholder:transition-opacity placeholder:duration-200 focus:placeholder:opacity-0"
                />
              </div>
              <div className="flex text-left flex-col w-full">
                <label
                  htmlFor="Email"
                  className="text-white text-[17px] my-3 font-[400]"
                >
                  Email
                </label>
                <input
                  type="email"
                  value={FormData.Email}
                  name="Email"
                  onChange={(e) =>
                    setFormData({
                      ...FormData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  placeholder="Enter Your Emial ..."
                  className="peer w-full px-3 py-3 text-sm font-medium text-gray-100 bg-[#221A3A] rounded-md shadow-md transition-all duration-200 border-0 border-b border-b-[#221A3A] focus:outline-none focus:bg-[#221A3A] focus:border-b-2 focus:border-b-[#4a3194] placeholder:text-gray-400 placeholder:transition-opacity placeholder:duration-200 focus:placeholder:opacity-0"
                />
              </div>
            </div>
            <div>
              <div className="flex text-left flex-col w-full">
                <label
                  htmlFor="Message"
                  className="text-white text-[17px] my-3 font-[400]"
                >
                  Message
                </label>
                <textarea
                  rows="6"
                  type="text"
                  value={FormData.Message}
                  name="Message"
                  onChange={(e) =>
                    setFormData({
                      ...FormData,
                      [e.target.name]: e.target.value,
                    })
                  }
                  required
                  placeholder="Type Here"
                  className="peer resize-none scrollbar-thin scrollbar-thumb-green-400 scrollbar-track-gray-800 w-full px-3 py-3 text-sm font-medium text-gray-100 bg-[#221A3A] rounded-md shadow-md transition-all duration-200 border-0 border-b border-b-[#221A3A] focus:outline-none focus:bg-[#221A3A] focus:border-b-2 focus:border-b-[#4a3194] placeholder:text-gray-400 placeholder:transition-opacity placeholder:duration-200 focus:placeholder:opacity-0"
                />
              </div>
            </div>
            <button
              onClick={handleFormData}
              className="flex text-[16px]  border border-transparent cursor-pointer gap-3 items-center justify-center bg-gradient-to-r from-[#2D1A57] to-[#2d1a57a9] text-white font-[600] text-lg px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition relative left-1/2 mt-20 hover:bg-gradient-to-bl hover:from-[#2d1a57a9] hover:via-[#47298aa9] hover:scale-95 hover:to-[#2D1A57] -translate-1/2 w-fit duration-300"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSec;
