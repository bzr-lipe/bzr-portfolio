'use client'
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import Draggable from 'gsap/dist/Draggable';


const SkillsAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const windowRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const tlCoverRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);

  const handleCloseWindow = (index: number) => {
    if(!containerRef.current) return;

    const windows = gsap.utils.toArray<HTMLDivElement>(containerRef.current.children);
    const target = windows[index];

    gsap.set(target, {autoAlpha: 0})
  }
  

  const handleOpenWindow = (index: number) => {
    console.log('ok')
    if(!containerRef.current) return;

    const windows = gsap.utils.toArray<HTMLDivElement>(containerRef.current.children);
    const target = windows[index];

    console.log(target)
    gsap.set(target, {autoAlpha: 1})
  }
  
  useEffect(() => {
    if(!sectionRef.current || !containerRef.current ) return;

    const windows = gsap.utils.toArray<HTMLDivElement>(containerRef.current.children);
  
    windows.forEach((item, index) => {
      Draggable.create(item, {
        bounds: containerRef.current,
        inertia: true,
        cursor: 'auto'
      });
    })
  }, [])

  return {
    sectionRef,
    windowRef,
    containerRef,
    handleCloseWindow,
    handleOpenWindow
  };
};

export default SkillsAnimation;
