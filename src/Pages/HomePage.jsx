import NavBar from "../Components/NavBar";
import HeroSec from "../Sections/HeroSec";
import FeatureSec from "../Sections/FeatureSec";
import ThreadLines from "../Components/ThreadLine";
import OurPlansSec from "../Sections/OurPlansSec";
import TestimonialSec from "../Sections/TestimonialSec";
import ContactSec from "../Sections/ContactSec";
import Wait from "../Sections/Wait";
import FooterSec from "../Sections/FooterSec";
import ScrollVelocity from "../Components/MarqueeText";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <HeroSec />

      <div style={{ width: "100%", height: "200px", position: "relative" }}>
        <ThreadLines amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <FeatureSec />
      
      <div style={{ width: "100%", height: "200px", position: "relative" }}>
        <ThreadLines amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <OurPlansSec/>
      <div style={{ width: "100%", height: "200px", position: "relative" }}>
        <ThreadLines amplitude={1} distance={0} enableMouseInteraction={true} />
      </div>
      <TestimonialSec/>
      <ContactSec/>
       {/* <div style={{ width: "100%", height: "200px", position: "relative" }}>
        <ThreadLines amplitude={1} distance={0} enableMouseInteraction={true} />
      </div> */}
      <div className="w-full py-20">
        <ScrollVelocity
  texts={['PersonaAEye', 'HMK CodeWeb']} 
  className="custom-scroll-text"
/>
      </div>
      <Wait/>
      <FooterSec/>
    </>
  );
};

export default HomePage;
