import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useThemeContext } from "@/contexts/theme";

const ToggleButtonAnimation = () => {
  const switchRef = useRef<HTMLDivElement>(null);
  const moonRef = useRef<HTMLImageElement>(null);
  const sunRef = useRef<HTMLImageElement>(null);
  const { isLight } = useThemeContext();

  useEffect(() => {
    const lightModeTl = gsap.timeline({paused: true});
    const darkModeTl = gsap.timeline({paused: true});

    lightModeTl.to(moonRef.current, {autoAlpha: 0})
    .to(switchRef.current, {xPercent: 65}, "<")
    .to(sunRef.current, {autoAlpha: 1}, "-=75%")

    darkModeTl.to(sunRef.current, {autoAlpha: 0})
    .to(switchRef.current, {xPercent: 0}, "<")
    .to(moonRef.current, {autoAlpha: 1}, "-=75%")
    
    if(isLight) {
      lightModeTl.play();
    } else {
      darkModeTl.play();
    }
  }, [isLight])

  return {
    switchRef,
    moonRef,
    sunRef,
  };
};

export default ToggleButtonAnimation;
