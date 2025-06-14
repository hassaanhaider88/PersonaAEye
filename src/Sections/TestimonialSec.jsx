import TestimonialData from "../Data/TestimonialData";
import BageButton from "../Components/BageButton";
import TestiCard from "../Components/TestiCard";
import TechBrandsMarquee from "../Components/Marquee";

const TestimonialSec = () => {
  return (
    <section className="w-full text-center min-h-screen flex flex-col items-center justify-center">
      <BageButton text={"Wall Of Love"} />
      <h1 className="text-4xl  md:text-7xl font-[900] tracking-tight mt-3 text-center  text-white">
        What Our User Says
      </h1>
      <p className="font-[200] text-gray-400 text-center mt-3">
         Hear what our users have to say about their experience with our AI writing assistant — <br />boosting productivity, creativity, and confidence with every word they write
      </p>
      <div className="userTestimonials w-full   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-20 px-10 gap-6 mt-10">
        <div className="GridNo1 min-h-screen flex flex-col gap-5 ">
          {TestimonialData.slice(0, 3).map((Tcard, idx) => {
            return <TestiCard TData={Tcard} key={idx} Heigh={'350px'} />;
          })}
        </div>
        <div className="GridNo2 min-h-screen flex flex-col gap-5 ">
          {TestimonialData.slice(3, 7).map((Tcard, idx) => {
            return <TestiCard TData={Tcard} key={idx} Heigh={'255px'} />;
          })}
        </div>
        <div className="GridNo3 min-h-s
        creen flex flex-col gap-5">
          {TestimonialData.slice(7, 10).map((Tcard, idx) => {
            return <TestiCard TData={Tcard} key={idx}  Heigh={'350px'}/>;
          })}
        </div>

      </div>
         <TechBrandsMarquee />
    </section>
  );
};

export default TestimonialSec;
