import { useRef, useEffect, useState, useLayoutEffect } from "react";
import { useTheme } from 'styled-components'
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Flip from "gsap/dist/Flip";
import { useWindowSize } from "rooks";
import { scrollTo } from "@/utils/scroll-to";


const SkillsAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const { innerWidth, innerHeight, outerHeight, outerWidth } = useWindowSize();
  
  const mainTimeline = gsap.timeline({
    paused: true,
    onComplete: () => {
      if (cardRef.current) {
        const state = Flip.getState(cardRef.current);
        cardRef.current.classList.remove('fullscreen');
        cardRef.current.classList.add('animated');
        Flip.from(state, {
          duration: 1,
          scale: true,
          ease: "power1.inOut",
          onStart: () => {
            // if(innerHeight) {
            //   gsap.to(window, {
            //     scrollTo: {
            //       y: innerHeight
            //     },
            //     delay: 1
            //   });
            // }
          },
          onComplete: () => {
            document.body.style.overflow= 'auto';
          }
        });
      }
    }
  })

  // const categoryTl = gsap.timeline({ 
  //   paused: true,
  //   onComplete: () => {
  //     if (cardRef.current) {
  //       console.log('terminei')
  //       const state = Flip.getState(cardRef.current);
  //       cardRef.current.classList.remove('fullscreen');
  //       cardRef.current.classList.add('animated');
  //       Flip.from(state, {
  //         duration: 1,
  //         scale: true,
  //         ease: "power1.inOut",
  //         onComplete: () => {
  //           document.body.style.overflow= 'auto';
  //         }
  //       });
  //     }
  //   }
  //  });

  useEffect(() => {
    if(cardRef.current && sectionRef.current) {
      ScrollTrigger.create({
        trigger: cardRef.current,
        preventOverlaps: true,
        markers: {startColor: 'blue', endColor: 'white'},
        start: 'top+=20% bottom',
        end: '+=30%',
        once: true,
        onEnter: () => {
          document.body.style.overflow= 'hidden';
          const state = Flip.getState(cardRef.current)
          if (cardRef.current) {
            cardRef.current.classList.add('fullscreen');
            Flip.from(state, {
              duration: 1,
              scale: true,
              ease: "power1.inOut",
              onComplete: () => {
                gsap.to(cardRef.current, { borderRadius: 0, duration: 0.4 });
                mainTimeline.play();
                if(innerHeight) {
                  gsap.to(window, {
                    scrollTo: {
                      y: innerHeight
                    },
                    delay: 2
                  });
                }
              }
            });
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    if(listRef.current && cardRef.current) {
      const categories = gsap.utils.selector(listRef.current)('.categoryContainer');

      categories.forEach((category, index) => {
        const title = gsap.utils.selector(category)('.titleContainer')
        const words = gsap.utils.selector(title)('p')
        const border = gsap.utils.selector(category)('.border')
        console.log(border)
        let widthNum = 40;
        const categoryTl = gsap.timeline({ 
          // paused: true,
          onComplete: () => {
            if (cardRef.current) {
              const state = Flip.getState(cardRef.current);
              cardRef.current.classList.remove('fullscreen');
              cardRef.current.classList.add('animated');
              Flip.from(state, {
                duration: 1,
                scale: true,
                ease: "power1.inOut",
                onComplete: () => {
                  document.body.style.overflow ='auto';
                }
              });
            }
          }
         });

        words.forEach((item) => {
          console.log(item.getBoundingClientRect().width)
          widthNum += item.getBoundingClientRect().width
        })

        categoryTl.set(title, { width: widthNum });

        categoryTl.to(words, {y: 0, duration: 0.5, stagger: 0.4}, ">")

        categoryTl.to(title, { left: '3rem' }, ">+=0.3")

        if(words.length > 1) {
          words[0].appendChild( document.createTextNode(`\u00A0`) );
          gsap.set(words[1], {x: words[0].getBoundingClientRect().width})
          categoryTl.to(words[1], { y: words[0].getBoundingClientRect().height, ease: 'back.out', delay: 0.5, duration: 0.4})
          categoryTl.to(words[1], { x: 0, duration: 0.4 })
        }

        categoryTl.to(border, {x: 0, duration: 0.3}, ">")

        const listColumn = gsap.utils.selector(category)('.listContainer ul')

        listColumn.forEach((column) => {
          categoryTl.to(gsap.utils.selector(column)('li'), {y: 0, stagger: {amount: 0.3}}, ">")
        })

        const hoverTl = gsap.timeline({paused: true})

        if(words.length > 1) {
          hoverTl.to(words[1], { x: words[0].getBoundingClientRect().width + 15})
          hoverTl.to(words[1], { y: '6rem' })
          hoverTl.to(words[0], { y: '6rem' }, "<")
        }

        hoverTl.to(border, {xPercent: 120, duration: 0.1})

        mainTimeline.add(categoryTl, index * 3);

        // category.addEventListener("mouseenter", () => { !categoryTl.isActive() && hoverTl.play()});
        // category.addEventListener("mouseleave", () => { !categoryTl.isActive() && hoverTl.reverse()});
      }
    )}
  }, [listRef]);

  return {
    sectionRef,
    cardRef,
    titleRef,
    listRef,
    subtitleRef,
    categoryRef
  };
};

export default SkillsAnimation;
