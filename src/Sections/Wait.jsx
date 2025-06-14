import React from 'react'
import BageButton from '../Components/BageButton'
import { HashLink } from 'react-router-hash-link'

const Wait = () => {
  return (
    <section  
      className="w-full  py-20 px-10 md:px-20 text-center min-h-screen flex flex-col items-center justify-center">
<div className='bg-[#180B39] WaitContainer py-10 w-full h-full flex flex-col items-center justify-center rounded-3xl'>
        <BageButton text={"Try our tool for Free!"} />
        <h1 className="text-2xl  md:text-6xl font-[900] tracking-tight mt-3 text-center  text-white">
        Ready to Transform the Way You Write?
        </h1>
        <p className="font-[200] capitalize text-gray-400 text-center mt-3">
         Experience the future of writing with intelligent AI assistance that enhances your creativity, <br /> boosts productivity, and makes every word count.
        </p>
         <button  className="flex text-[16px] z-20 border border-transparent cursor-pointer gap-3 items-center justify-center bg-[#5F26C0] text-white font-[600] text-lg px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition  mt-20 hover:bg-gradient-to-bl hover:from-[#2d1a57a9] hover:via-[#47298aa9] hover:scale-95 hover:to-[#2D1A57]  w-fit duration-300 BoxShadow">
                <HashLink smooth to="/#pricing">Get Started For Free </HashLink>
         </button>
</div>
    </section>
  )
}

export default Wait