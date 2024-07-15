import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

const phrases = ["The", "solution", "is:", "enhanced", "recycling"];

const Index = () => {
  return (
    <div className="mt-[10vh] mb-20 md:mt-[20vh] p-4 relative">
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
