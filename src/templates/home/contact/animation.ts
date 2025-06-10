'use client'
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";

const SkillsAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {

    if(!sectionRef.current ) return;
    
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        scrub: 1,
        pin: true,
        end: "bottom top",
        markers: true
      },
      onComplete: () => {
        gsap.to(contactSectionRef.current, { autoAlpha: 1, duration: 0.5})
      }
    })

    heroTl.to(titleRef.current, { scale: 10 }, 0 )
    heroTl.to(heroSectionRef.current, { filter: 'brightness(14)' }, 0 )
    // heroTl.to(contactSectionRef.current, { autoAlpha: 1 })
  }, [sectionRef.current])

  return {
    sectionRef,
    titleRef,
    heroSectionRef,
    contactSectionRef
  };
};

export default SkillsAnimation;
