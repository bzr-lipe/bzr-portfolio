import { useRef, useEffect, useState } from "react";
import gsap from "gsap";


const NavbarMobileAnimation = () => {
  const navRef = useRef<HTMLElement>(null);
  const menuMobileRef = useRef<HTMLDivElement>(null);
  const buttonBackgroundRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const menuBackgroundRef = useRef<HTMLDivElement>(null);
  const [ isActive, setIsActive ] = useState<boolean>(false);
  const [ previousIsActive, setPreviousIsActive ] = useState<boolean>(isActive);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const openTl = gsap.timeline({paused: true})
  const btnOpenTl = gsap.timeline({paused: true})
  const closeTl = gsap.timeline({paused: true})
  const btnCloseTl = gsap.timeline({paused: true})

  useEffect(() => {
    if(navRef) {
      gsap.to(navRef.current, {
        translateY: 0,
        duration: 0.3,
        autoAlpha: 1,
        delay: 0.2
      })
    }
  }, [])

  const toggleMenu = () => {
    if(isActive === previousIsActive) {
      setIsActive(!isActive);
      return;
    }
  };

  useEffect(() => {
    const listItems = gsap.utils.selector(listRef.current)('.list-item');
    const rows = gsap.utils.selector(menuButtonRef.current)('div');

    btnOpenTl
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


    openTl
    .to(buttonBackgroundRef.current, {
      duration: 0.35,
      clipPath: "circle(150% at 20% 50%)"
    })
    .to(menuBackgroundRef.current, {
      duration: 0.35,
      clipPath: "circle(150% at 40px -50px)"
    }, ">-60%")
    .to(listItems, {
      autoAlpha: 1,
      stagger: {
        amount: 0.2
      }
    }, "<25%")
    .eventCallback('onComplete', function () {setPreviousIsActive(isActive)});
    
    btnCloseTl
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

    closeTl
    .to(listItems, {
      autoAlpha: 0,
      stagger: {
        amount: 0.1,
        from: 'end'
      }
    })
    .to(menuBackgroundRef.current, {
      duration: 0.2,
      clipPath: "circle(0% at 40px -50px)"
    }, ">-50%")
    .to(buttonBackgroundRef.current, {
      duration: 0.1,
      clipPath: "circle(0% at 50% 10%)"
    }, ">-40%")
    .eventCallback('onComplete', function () {setPreviousIsActive(isActive)});

    if(isActive !== previousIsActive) {
      if(!previousIsActive){
        btnOpenTl.play();
        openTl.play();
      }else{
        closeTl.play();
        btnCloseTl.play();
      }
    }
  }, [isActive])

  return {
    navRef,
    menuMobileRef,
    buttonBackgroundRef,
    menuBackgroundRef,
    listRef,
    menuButtonRef,
    isActive,
    toggleMenu
  };
};

export default NavbarMobileAnimation;
