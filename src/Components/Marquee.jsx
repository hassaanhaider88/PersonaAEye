const logos = [
  "../../ptcl.png",
  "../../jazz.png",
  "../../zong.png",
  "../../telenor.png",
  "../../ufone.png",
  "../../nayatel.png",
  "../../careem.png",
  "../../rozee.png",
  "../../daraz.png",
  "../../foodpanda.jpg",
  "../../finja.jpg",
  "../../nykea.png",
  "../../ptcl.png",
  "../../jazz.png",
  "../../zong.png",
  "../../telenor.png",
  "../../ufone.png",
  "../../nayatel.png",
  "../../careem.png",
  "../../rozee.png",
  "../../daraz.png",
  "../../foodpanda.jpg",
  "../../finja.jpg",
  "../../nykea.png",
];

const TechBrandsMarquee = () => {
  return (
    <div className="relative  w-[90%] mt-10 overflow-hidden py-8 bg-transparent">
      <div className="absolute top-0  left-0 w-full h-full  pointer-events-none z-10"></div>

      <div className="animate-marquee whitespace-nowrap flex gap-12 px-6">
        {logos.map((logo, index) => (
          <img
          loading="lazy"
            key={index}
            src={logo}
            alt={`Tech Brand ${index}`}
            className="h-16 w-auto object-contain rounded-xl shadow-lg bg-white p-2"
          />
        ))}
      </div>
    </div>
  );
};

export default TechBrandsMarquee;
