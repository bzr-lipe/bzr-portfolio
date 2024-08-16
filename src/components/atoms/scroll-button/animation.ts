import { useRef, useEffect, useState } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";


const ScrollButtonAnimation = () => {
  const downTextRef = useRef<HTMLDivElement>(null);
  const upTextRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const idleTl = gsap.timeline({repeat: -1});

    idleTl.to(arrowRef.current, {y: 10, duration: 1})
    idleTl.to(arrowRef.current, {y: 0, duration: 1})

    const textsTl = gsap.timeline({
      scrollTrigger: {
        trigger: buttonRef.current,
        markers: true,
        scrub: true,
        start: 'top-=100 top',
        end: () => '+=50',
        onLeave: () => {
          gsap.to(arrowRef.current, { rotate: 225, duration: 0.3});
          gsap.to(upTextRef.current, {autoAlpha: 1, duration: 0.4});
        },
        onEnterBack: () => {
          gsap.to(arrowRef.current, { rotate: 45, duration: 0.2});
          gsap.to(upTextRef.current, {autoAlpha: 0, duration: 0.2});
        }
      }
    });

    textsTl.to(downTextRef.current, { autoAlpha: 0 })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: buttonRef.current,
        start: 'top-=10% top',
        pin: true,
        end: 'bottom+=30', 
        toggleActions: "none play reverse none"
      }
    });

    tl.addLabel('end')
    .to(buttonRef.current, {autoAlpha: 0, duration: 0.2})
    
  }, [buttonRef]);

  return {
    downTextRef,
    upTextRef,
    arrowRef,
    buttonRef
  };
};

export default ScrollButtonAnimation;
