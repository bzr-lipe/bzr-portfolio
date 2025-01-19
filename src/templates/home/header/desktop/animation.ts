import { useRef, useEffect } from "react";
import gsap from "gsap";
import { useWindowSize } from "rooks";


const HeaderAnimation = () => {
  const titleRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLHeadingElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const firstCaretRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const linesRef = useRef<HTMLDivElement>(null);
  const scrollButtonRef = useRef<HTMLDivElement>(null);
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();

  useEffect(() => {
    if(marqueeRef.current) {
      const rows = gsap.utils.selector(marqueeRef.current)('div');
      const marqueeTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: 0.5,
          start: `top+=${innerHeight} bottom`,
          endTrigger: document.getElementById('skills'),
          end: 'top+=50% bottom'
        }
      });

      rows.forEach((row, index) => {
        if(index % 2 !== 0) {
          marqueeTl.add(gsap.to(row, {
            xPercent: -20
          }), 0)
          return;
        }
        marqueeTl.add(gsap.to(row, {
          xPercent: 20
        }), 0)
      })
    }

    const textTl = gsap.timeline({duration: 0.4, delay: 1});
    const scrollTl = gsap.timeline();

    if(sectionRef.current) {
      scrollTl.add(() => {
        gsap.to(cardRef.current, {
          borderRadius: '5rem',
          scrollTrigger: {
            trigger: sectionRef.current,
            scrub: 0.5,
            start: `bottom bottom`,
            preventOverlaps: true,
            end: '+=10'
          },
        })
      }, 0)
      .add(() => {
        gsap.to(cardRef.current, {
          scale: 0.8,
          yPercent: 30,
          scrollTrigger: {
            trigger: cardRef.current,
            scrub: 0.5,
            start: `bottom+=6 bottom`,
            preventOverlaps: true,
            end: '+=30%'
          }
        })
      })
    }

    const caretTl = gsap.timeline({totalDuration: 0.2, repeat: 2, paused: false})
    const letters = gsap.utils.selector(titleRef.current)('.letter');

    caretTl.set(firstCaretRef.current, {autoAlpha: 1})
    caretTl.to(firstCaretRef.current, {autoAlpha: 0})


    letters.forEach((current, index) => {
      const letter = gsap.utils.selector(current)(`.letter-${index}`);
      const caret = gsap.utils.selector(current)(`.caret-${index}`);

      textTl.set(caret[0], {autoAlpha: 1, x: "105%"})
      textTl.set(letter[0], {autoAlpha: 1}, ">")

      if(index === letters.length - 1) {
        const idleTl = gsap.timeline({repeat: -1, paused: false})

        idleTl.set(caret[0], {autoAlpha: 1,  x: 15})
        idleTl.set(caret[0], {autoAlpha: 0}, ">")
      } else {
        textTl.to(caret[0], {autoAlpha: 0}, ">")
      }
    })
    
    textTl.to(subtitleRef.current, { autoAlpha: 1, y: 0, duration: 0.5, delay: 1})

    if (linesRef.current) {
      const lines = gsap.utils.toArray(linesRef.current.children);

      gsap.to(lines, {height: '250rem', stagger: 0.1});
    }


    textTl.to(scrollButtonRef.current, { autoAlpha: 1, duration: 0.3 })

  }, []);

  return {
    sectionRef,
    cardRef,
    titleRef,
    marqueeRef,
    firstCaretRef,
    subtitleRef,
    linesRef,
    scrollButtonRef
  };
};

export default HeaderAnimation;
