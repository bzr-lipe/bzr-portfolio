'use client'
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";

const SkillsAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!titleRef.current || !sectionRef.current || !cardRef.current || !subtitleRef.current || !descriptionRef.current || !statsRef.current ) return;

    gsap.to(marqueeRef.current, {
      x: -700,
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1
      }
    })

    const titleWords = gsap.utils.toArray(titleRef.current.children);
    const descriptionLines = gsap.utils.toArray(descriptionRef.current.children);


    const titlesTimeline = gsap.timeline({})
    .to(titleWords, {y: 0, autoAlpha: 1, stagger: 0.5, duration: 0.7})
    .to(subtitleRef.current, {autoAlpha: 1, duration: 0.4})
    .to(descriptionLines, {y: 0, autoAlpha: 1, stagger: 0.1, duration: 0.4})
  
    const cardTween = gsap.to(cardRef.current, {autoAlpha: 1, duration: 1, delay: 0.5});

    const statElements = gsap.utils.toArray<HTMLDivElement>(statsRef.current.children);

    const statsTween = gsap.to(statElements, {
      autoAlpha: 1,
      stagger: 0.5,
      duration: 0.5,
      ease: "power2.out",
      onComplete: () => {
        statElements.forEach((statElement) => {
          const statNumberElement = statElement.querySelector('.stat-number');

          if(statNumberElement) {
            statNumberElement.textContent = "+00";

            const targetValue = parseInt(statElement.dataset.value || "0", 10);
            const counter = { value: 0 };
  
            gsap.to(counter, {
              value: targetValue,
              duration: 1,
              onUpdate: () => {
                statNumberElement.textContent = counter.value < 10
                  ? `+0${Math.floor(counter.value)}`
                  : `+${Math.floor(counter.value)}`;
              },
            });
          }
        });
      },
    });
  
    const mainTimeline = gsap.timeline({
      paused: true,
      repeat: 0,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top-=10% top',
      }
    })
    .add(cardTween).add(titlesTimeline).add(statsTween)


  }, [titleRef])

  return {
    sectionRef,
    titleRef,
    descriptionRef,
    subtitleRef,
    marqueeRef,
    cardRef,
    statsRef
  };
};

export default SkillsAnimation;
