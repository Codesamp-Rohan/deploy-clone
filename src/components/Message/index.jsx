import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const phrases = [
  "We have a",
  "plastic",
  "problem",
  "and",
  "should",
  "raise",
  "recycling",
  "awareness",
];

const Index = () => {
  return (
    <div className="mt-[10vh] mb-20 md:mt-[40vh] p-4 relative">
      <img
        data-scroll
        data-scroll-speed="-0.3"
        className="absolute w-[100px] h-[100px] md:w-[400px] md:h-[200px] rounded-full object-cover right-10"
        src="./pollution1.webp"
        alt="pollution image"></img>
      <img
        data-scroll
        data-scroll-speed="0.3"
        className="absolute w-[100px] h-[100px] z-[-1] md:w-[400px] md:h-[200px] rounded-full object-cover top-[40%] left-[40%]"
        src="./pollution2.webp"
        alt="pollution image"></img>
      <img
        data-scroll
        data-scroll-speed="-0.1"
        className="absolute w-[100px] h-[100px] md:w-[400px] md:h-[200px] rounded-full object-cover bottom-20 right-6"
        src="./pollution3.webp"
        alt="pollution image"></img>

      {phrases.map((text, index) => {
        return <AnimatedText key={index}>{text}</AnimatedText>;
      })}
    </div>
  );
};

function AnimatedText({ children }) {
  const textRefs = useRef([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(textRefs.current, {
      scrollTrigger: {
        trigger: textRefs.current,
        start: "top 60%",
        end: "bottom 40%",
        scrub: true,
      },
      color: "#022d42",
      opacity: 1,
    });
  }, []);

  return (
    <h1
      ref={textRefs}
      className="text-[14vw] line-height uppercase opacity-0 text-[#fff]">
      {children}
    </h1>
  );
}

export default Index;
