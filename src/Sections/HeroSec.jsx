import { FaWandMagicSparkles } from 'react-icons/fa6'
import GlassPanel from '../Components/GlassPanel'
import HeroPText from '../Components/HeroPText'
import BageButton from '../Components/BageButton'
import { Link } from 'react-router-dom'

const HeroSec = () => {
  return (
    <div className='w-full py-10 min-h-screen flex flex-col gap-4'>
    <section id="home" className="w-full text-center min-h-screen flex flex-col items-center justify-center">
      <BageButton text={'Your Ultimate PersonaAEye Companian!'}/>
      <h1 className='text-4xl  md:text-7xl font-[900] tracking-tight mt-3 text-center  text-white'>
        Just Describe the Problem <br /> PersonaAEye Handles the Rest.
      </h1>
      <HeroPText
  className="scrambled-text-demo"
  radius={100}
  duration={1.2}
  speed={0.5}
  scrambleChars={'.:'}
>
  AI-Powered, Prompt-Free Interaction Template for Modern Tools
  <br />
  Designed for startups, SaaS, and AI products. Includes pre-built roles, clean UI, and fast performance — just plug in and go
</HeroPText>
      <Link to={'/sign-in'}>
      <button className='py-3 px-5  text-white bg-[#7345C6] mt-8 font-[400] rounded-xl hover:scale-95 duration-200 cursor-pointer '>Start Your Free Trial</button></Link>
    </section>
      <GlassPanel />
      </div>
  )
}

export default HeroSec