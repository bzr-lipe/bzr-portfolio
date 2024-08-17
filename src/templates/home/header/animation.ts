import { useRef, useEffect } from "react";
import gsap from "gsap";


const HeaderAnimation = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const firstCaretRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);


  useEffect(() => {
    const tl = gsap.timeline({duration: 0.4, delay: 1});

    const mainTl = gsap.timeline();
    mainTl.add(tl)
    mainTl.add

    const caretTl = gsap.timeline({totalDuration: 0.2, repeat: 2, paused: false})

    caretTl.set(firstCaretRef.current, {autoAlpha: 1})
    caretTl.to(firstCaretRef.current, {autoAlpha: 0})

    const letters = gsap.utils.selector(titleRef.current)('.letter');

    letters.forEach((current, index) => {
      const letter = gsap.utils.selector(current)(`.letter-${index}`);
      const caret = gsap.utils.selector(current)(`.caret-${index}`);
      tl.set(caret[0], {autoAlpha: 1, x: "105%"})
      tl.set(letter[0], {autoAlpha: 1}, ">")

      if(index === letters.length - 1) {
        const idleTl = gsap.timeline({repeat: -1, paused: false})
        mainTl.add(idleTl)

        idleTl.set(caret[0], {autoAlpha: 1,  x: 15})
        idleTl.to(caret[0], {autoAlpha: 0})
      } else {
        tl.to(caret[0], {autoAlpha: 0}, ">")
      }
    })
    
    tl.to(subtitleRef.current, { autoAlpha: 1, y: 0, duration: 0.5, delay: 2})
  }, [titleRef]);

  return {
    titleRef,
    firstCaretRef,
    subtitleRef
  };
};

export default HeaderAnimation;
