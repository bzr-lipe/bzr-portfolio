import { useRef, useEffect, useState } from "react";
import gsap from "gsap";


const NavbarMobileAnimation = () => {
  const navRef = useRef<HTMLElement>(null);
  const menuMobileRef = useRef<HTMLDivElement>(null);
  const [ isActive, setIsActive ] = useState<boolean>(false);
  

  const openTl = gsap.timeline({paused: true})
  const closeTl = gsap.timeline({paused: true})

  useEffect(() => {
    gsap.to(navRef.current, {
      translateY: 0,
      duration: 0.3,
      autoAlpha: 1,
      delay: 0.2
    })
  }, [])

  const toggleMenu = () => {
    if (menuMobileRef.current) {
      openTl.to(menuMobileRef.current, {
        duration: 0.5,
        '--before-clip': "circle(100% at 50% 0)"
      })
      .to(menuMobileRef.current, {
        duration: 0.5,
        clipPath: "circle(150% at 40px -50px)"
      });

      closeTl.to(menuMobileRef.current, {
        duration: 0.5,
        clipPath: "circle(0% at 40px -50px)"
      })
      .to(menuMobileRef.current, {
        duration: 0.5,
        '--before-clip': "circle(0% at 50% 0)"
      })

      if(!isActive) {
        openTl.play();
        setIsActive(true);
        return;
      };

      closeTl.play()
      setIsActive(false);
    }
  };

  return {
    navRef,
    menuMobileRef,
    isActive,
    toggleMenu
  };
};

export default NavbarMobileAnimation;
