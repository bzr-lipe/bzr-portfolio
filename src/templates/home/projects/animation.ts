'use client'
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";

const SkillsAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const selectedTestRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const selectedImageTestRef = useRef<HTMLImageElement>(null);
  const selectedProjectsRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!selectedImageTestRef.current || !selectedProjectsRef.current ) return;

    gsap.to(marqueeRef.current, {
      x: -700,
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
      }
    })

    const selectedProjects =  gsap.utils.toArray<HTMLDivElement>(selectedProjectsRef.current.children);

    const onMouseMove = (event: { clientY: number; clientX: number }) => {
      // const yDeg = gsap.utils.mapRange(0, document.body.clientWidth, -14, 14, event.clientX);
      // const xDeg = gsap.utils.mapRange(0, document.body.clientHeight, -10, 10, event.clientY) * -1;
  
      // selectedProjects.forEach((item: HTMLDivElement) => {
      //   const mainImage = item.querySelector<HTMLImageElement>('.image-main');
      //   const mobileImage = item.querySelector<HTMLImageElement>('.image-mobile');
  
      //   gsap.to(mainImage, 1, {
      //     rotationY: yDeg,
      //     rotationX: xDeg,
      //     ease: 'Power1.easeOut'
      //   });

      //   gsap.to(mobileImage, 1, {
      //     rotationY: yDeg,
      //     rotationX: xDeg,
      //     ease: 'Power1.easeOut'
      //   });
      // })

    };

    selectedProjects.forEach((item: HTMLDivElement) => {
      const mainImage = item.querySelector<HTMLImageElement>('.image-main');
      const mobileImage = item.querySelector<HTMLImageElement>('.image-mobile');

      document.body.addEventListener('mousemove', onMouseMove);
    })
    
  }, [selectedProjectsRef.current])

  return {
    sectionRef,
    marqueeRef,
    selectedProjectsRef,
    selectedTestRef,
    titleRef,
    selectedImageTestRef
  };
};

export default SkillsAnimation;
