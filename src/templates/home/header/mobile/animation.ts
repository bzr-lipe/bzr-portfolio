import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useWindowSize } from "rooks";


const HeaderAnimation = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const firstCaretRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const textTl = gsap.timeline({duration: 0.4, delay: 1});

    const caretTl = gsap.timeline({totalDuration: 0.2, repeat: 2, paused: false})

    caretTl.set(firstCaretRef.current, {autoAlpha: 1})
    caretTl.to(firstCaretRef.current, {autoAlpha: 0})

    const letters = gsap.utils.selector(titleRef.current)('.letter');

    letters.forEach((current, index) => {
      const letter = gsap.utils.selector(current)(`.letter-${index}`);
      const caret = gsap.utils.selector(current)(`.caret-${index}`);
      textTl.set(caret[0], {autoAlpha: 1, x: "105%"})
      textTl.set(letter[0], {autoAlpha: 1}, ">")

      if(index === letters.length - 1) {
        const idleTl = gsap.timeline({repeat: -1, paused: false})

        idleTl.set(caret[0], {autoAlpha: 1,  x: 15})
        idleTl.set(caret[0], {autoAlpha: 0}, ">")
        // textTl.to(caret[0], {scale: 2}, ">")
      } else {
        textTl.to(caret[0], {autoAlpha: 0}, ">")
      }
    })
    
    textTl.to(subtitleRef.current, { autoAlpha: 1, y: 0, duration: 0.5, delay: 1})
  }, []);

  return {
    titleRef,
    marqueeRef,
    firstCaretRef,
    subtitleRef
  };
};

export default HeaderAnimation;
