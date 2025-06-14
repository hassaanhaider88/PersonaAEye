import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import BageButton from "../Components/BageButton";
import PricingData from "../Data/PricingData";
import PCard from "../Components/PCard";

const OurPlansSec = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const halfCircleRef = useRef(null);
  const bubblesContainerRef = useRef(null);
  const [bubbles, setBubbles] = useState([]);

  // Initialize GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate half circle entrance
      gsap.fromTo(
        halfCircleRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );

      // Animate content entrance
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        buttonRef.current,
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          titleRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        )
        .fromTo(
          descriptionRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          "-=0.4"
        );

      // Animate stars
      const stars = containerRef.current?.querySelectorAll(".star");
      stars?.forEach((star, index) => {
        gsap.to(star, {
          opacity: "random(0.2, 1)",
          scale: "random(0.8, 1.2)",
          duration: "random(2, 4)",
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.1,
        });
      });

      // Animate floating elements
      const floatingElements =
        containerRef.current?.querySelectorAll(".floating-element");
      floatingElements?.forEach((element, index) => {
        gsap.to(element, {
          y: "random(-20, 20)",
          opacity: "random(0.3, 0.9)",
          duration: "random(3, 5)",
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
          delay: index * 0.5,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Bubble animation system
  useEffect(() => {
    const generateBubble = () => {
      return {
        id: Math.random(),
        x: Math.random() * (window.innerWidth || 1200),
        y: (window.innerHeight || 800) + 50,
        size: Math.random() * 12 + 6,
        opacity: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 3 + 1,
        color: ["#8B5CF6", "#A855F7", "#C084FC", "#DDD6FE", "#E879F9"][
          Math.floor(Math.random() * 5)
        ],
      };
    };

    const animateBubbles = () => {
      setBubbles((prevBubbles) => {
        const updatedBubbles = prevBubbles
          .map((bubble) => {
            if (bubble.element) {
              const newY = bubble.y - bubble.speed;
              bubble.y = newY;

              gsap.set(bubble.element, {
                y: newY,
                opacity: newY < 100 ? bubble.opacity * 0.98 : bubble.opacity,
              });

              // Add floating animation to each bubble
              gsap.to(bubble.element, {
                scale: "random(0.8, 1.2)",
                duration: "random(1, 3)",
                repeat: -1,
                yoyo: true,
                ease: "power2.inOut",
              });
            }
            return bubble;
          })
          .filter((bubble) => bubble.y > -100);

        // Add new bubbles
        if (Math.random() < 0.4 && updatedBubbles.length < 25) {
          updatedBubbles.push(generateBubble());
        }

        return updatedBubbles;
      });
    };

    const interval = setInterval(animateBubbles, 100);
    return () => clearInterval(interval);
  }, []);

  // Create bubble elements
  useEffect(() => {
    if (!bubblesContainerRef.current) return;

    bubbles.forEach((bubble) => {
      if (!bubble.element) {
        const bubbleEl = document.createElement("div");
        bubbleEl.className = "absolute rounded-full pointer-events-none";
        bubbleEl.style.width = `${bubble.size}px`;
        bubbleEl.style.height = `${bubble.size}px`;
        bubbleEl.style.backgroundColor = bubble.color;
        bubbleEl.style.left = `${bubble.x}px`;
        bubbleEl.style.top = `${bubble.y}px`;
        bubbleEl.style.opacity = bubble.opacity.toString();
        bubbleEl.style.filter = "blur(1px)";

        bubble.element = bubbleEl;
        bubblesContainerRef.current?.appendChild(bubbleEl);

        // Animate bubble entrance
        gsap.fromTo(
          bubbleEl,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: bubble.opacity,
            duration: 0.5,
            ease: "back.out(1.7)",
          }
        );
      }
    });
   
  }, [bubbles]);

 


  // Generate stars for background
  const stars = Array.from({ length: 150 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    opacity: Math.random() * 0.8 + 0.2,
  }));

  return (
    <section
      id="pricing"
      className="w-full text-center min-h-screen flex flex-col items-center justify-center"
    >
      <div className="pricingCircle w-full min-h-[80vh] ">
        <div
          ref={containerRef}
          className="relative min-h-[80vh] overflow-hidden "
        >
          {/* Animated background stars */}
          <div className="absolute inset-0">
            {stars.map((star) => (
              <div
                key={star.id}
                className="absolute bg-white rounded-full star"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                  width: `${star.size}px`,
                  height: `${star.size}px`,
                  opacity: star.opacity,
                }}
              />
            ))}
          </div>

          {/* Floating bubbles container */}
          <div
            ref={bubblesContainerRef}
            className="absolute inset-0 pointer-events-none"
          />

          {/* Half circle at bottom */}
          <div
            ref={halfCircleRef}
            className="absolute   flex flex-col items-center justify-start pt-8 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[400px] md:w-[750px] h-[80vh] rounded-t-full bg-gradient-to-t from-gray-800/40 to-gray-900/60 backdrop-blur-sm border-t border-l border-r overflow-ellipsis border-purple-500/20"
            style={{
              clipPath: "ellipse(100% 100% at 50% 100%)",
              boxShadow: "-2px 320px 40px #4C2365",
            }}
          >
            <BageButton text={"Get Access"} />
            <h1 className="text-2xl  md:text-6xl font-[900] tracking-tight mt-3 text-center  text-white">
              Our Pricings Plan
            </h1>
            <p className="font-[200] text-gray-400 text-center mt-3">
             Choose the plan that fits your workflow. Whether you're just getting <br /> started or scaling fast we have a flexible pricing option tailored for every need.
            </p>
          </div> 
          {/* Additional floating elements */}
          <div className="absolute top-1/4 left-1/4 floating-element">
            <div className="w-4 h-4 bg-purple-400/40 rounded-full" />
          </div>

          <div className="absolute top-1/3 right-1/4 floating-element">
            <div className="w-6 h-6 bg-violet-400/30 rounded-full" />
          </div>

          <div className="absolute bottom-1/4 left-1/3 floating-element">
            <div className="w-5 h-5 bg-purple-300/50 rounded-full" />
          </div>

          <div className="absolute top-1/2 right-1/3 floating-element">
            <div className="w-3 h-3 bg-pink-400/40 rounded-full" />
          </div>

          <div className="absolute bottom-1/3 right-1/4 floating-element">
            <div className="w-7 h-7 bg-indigo-400/30 rounded-full" />
          </div>
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="Pricingcard flex flex-wrap items-center justify-center gap-5 mt-8 px-10">
        {PricingData.map((pcard) => {
          return <PCard Cdata={pcard} key={pcard.id} />;
        })}
      </div>
    </section>
  );
};

export default OurPlansSec;
