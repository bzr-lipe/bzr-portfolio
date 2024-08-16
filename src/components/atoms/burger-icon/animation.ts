import { useRef, useEffect, useState } from "react";
import gsap from "gsap";


const BurgerIconAnimation = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [ isActive, setIsActive ] = useState<boolean>(false);

  const openTl = gsap.timeline({ paused: true });
  const closeTl = gsap.timeline({ paused: true });

  const toggleButton = () => {
    const rows = gsap.utils.selector(buttonRef.current)('div');

    openTl
    .to(rows[1], {
      autoAlpha: 0
    })
    .to(rows[0], {
      rotation: 45,
      translateY: '1rem'
    }, "<")
    .to(rows[2], {
      rotation: -45,
      translateY: '-1rem',
    }, "<")
    .eventCallback('onComplete', function () {setIsActive(true)});
    
    closeTl
    .to(rows[1], {
      autoAlpha: 1
    })
    .to(rows[0], {
      rotation: 0,
      translateY: 0
    }, "<")
    .to(rows[2], {
      rotation: 0,
      translateY: 0
    }, "<")
    .eventCallback('onComplete', function () {setIsActive(false)});

    if(!isActive){
      openTl.play();
      return;
    }

    closeTl.play();
  }

  return {
    buttonRef,
    isActive,
    toggleButton
  };
};

export default BurgerIconAnimation;
