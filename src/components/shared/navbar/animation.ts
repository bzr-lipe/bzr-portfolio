import { useRef, useEffect } from "react";
import gsap from "gsap";

const NavbarAnimation = () => {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if(navRef.current) {
      gsap.to(navRef.current, {x: 0, duration: 1})
    }
  }, [navRef])

  return {
    navRef
  };
};

export default NavbarAnimation;
