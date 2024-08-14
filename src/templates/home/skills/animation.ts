import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const SkillsAnimation = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);


  useEffect(() => {
    gsap.to(gsap.utils.selector(listRef.current)('li'), { autoAlpha: 1, y: 0, duration: 0.2, stagger: 0.2, delay: 3})

  }, []);

  return {
    titleRef,
    listRef,
    subtitleRef
  };
};

export default SkillsAnimation;
