import React, { useEffect } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const PCard = ({Cdata}) => {
        
   useEffect(()=>{
     console.log(Cdata.price)
   },[])
  return (
      <div style={{background: "linear-gradient(90deg,rgba(20, 9, 49, 0.94) 35%, rgba(5, 0, 23, 1) 53%, rgba(21, 9, 51, 0.79) 100%)"}} class="relative z-20 overflow-hidden rounded-3xl  border-[0.5px] border-white/10 p-10 shadow-lg transition-all duration-500 cursor-pointer hover:  group">

  <span class="absolute right-9 top-9">
    <img src={Cdata.icon} loading='lazy' alt="icon"/>
  </span>

  <h3 class="mb-5 text-2xl font-semibold text-white">
   {Cdata.name}
  </h3>

  <div class="flex items-center gap-3 mb-8">
    <h2 class="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
      {`$${Cdata.name}`}
    </h2>
    <p class="text-sm font-medium text-white/70">
     {Cdata.price}$ /month <br />(billed annually)
    </p>
  </div>

  {/* <!-- Divider --> */}
  <div class="my-8 h-[0.5px] w-full bg-gradient-to-r from-white/10 via-white/20 to-white/10"></div>

  {/* <!-- Features --> */}
  <ul class="flex flex-col gap-4 text-white/80">
  {Cdata.features.map((Ftext,idx)=>{
        return(
    <li key={idx} class="flex items-center gap-3">
      <img loading='lazy' src="../../List_Icon.svg" alt="icon"/>
      <span>{Ftext}</span>
    </li>
        )
  })}
  </ul>

  <Link to={`/pricing?plan=${Cdata.name}`}
    class="mt-10 flex items-center justify-center gap-2 rounded-lg border-[0.5px] border-white/20 px-6 py-3 font-medium text-white transition-all duration-300 ease-in-out hover:scale-95 hover:border-white/40 hover:shadow-md hover:bg-white/5">
    Get the plan
   <FaArrowRightLong />
  </Link>

  {/* <!-- Footer text --> */}
  <p class="mt-4 text-center text-sm text-white/50">
    No extra hidden charge
  </p>
</div>
  )
}

export default PCard