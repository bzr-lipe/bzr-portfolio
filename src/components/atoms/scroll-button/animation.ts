import { useRef, useEffect, useState } from "react";
import gsap from "gsap";


const ScrollButtonAnimation = () => {
  const downTextRef = useRef<HTMLDivElement>(null);
  const upTextRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLElement>(null);
  const [ isActive, setIsActive ] = useState<boolean>(false);
  const [ isScrolled, setIsScrolled ] = useState<boolean>(false);
  const [ sectionTrigger, setSectionTrigger ] = useState<HTMLElement | undefined>();

  useEffect(() => {
    if(isActive){
      gsap.to(buttonRef.current, {autoAlpha: 1, duration: 0.4})
      return;
    }
    gsap.to(buttonRef.current, {autoAlpha: 0, duration: 0.2})
  }, [isActive])

  useEffect(() => {
    if(isScrolled){
      gsap.to(arrowRef.current, {rotate: 225, duration: 0.4})
      gsap.to(upTextRef.current, {autoAlpha: 1, duration: 0.4})
      return;
    }
    gsap.to(arrowRef.current, {rotate: 45, duration: 0.2})
    gsap.to(upTextRef.current, {autoAlpha: 0, duration: 0.1})
  }, [isScrolled])

  useEffect(() => {
    const idleTl = gsap.timeline({repeat: -1});

    // const tl = gsap.timeline({ scrollTrigger: {
    //   trigger: sectionTrigger,
    //   markers: true,
    //   start: '80% top',
    //   end: '+=100',
    // }});

    // tl.to(titleRef.current, {autoAlpha: 0, duration: 0.4})
    // tl.to(arrowRef.current, {rotate: 225, duration: 0.4}, ">");

    // idleTl.to(arrowRef.current, {y: 10, duration: 0.6})
    // idleTl.to(arrowRef.current, {y: 0, duration: 0.6})
    // console.log(sectionTrigger)

    if(sectionTrigger) {
      gsap.to(downTextRef.current, {
        scrollTrigger: {
          trigger: sectionTrigger,
          markers: true,
          scrub: true,
          start: '70% top',
          end: '+=100',
          // onLeave: () => {console.log('oii')}
        }, 
        autoAlpha: 0
      },)
    }

    
    const scrollTl = gsap.timeline({
      scrollTrigger: {

      }}
    );

    
  }, [sectionTrigger]);

  return {
    downTextRef,
    buttonRef,
    upTextRef,
    arrowRef,
    setIsActive,
    setIsScrolled,
    setSectionTrigger
  };
};

export default ScrollButtonAnimation;
