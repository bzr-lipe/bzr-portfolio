'use client'
import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";

const SkillsAnimation = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const tlCoverRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);
  const title2Ref = useRef<HTMLDivElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(!titleRef.current || !sectionRef.current || !cardRef.current || !subtitleRef.current || !descriptionRef.current || !statsRef.current || !title2Ref.current || !experiencesRef.current || !marqueeRef.current) return;

    const sectionTopPadding = parseFloat(window.getComputedStyle(sectionRef.current).paddingTop);
    const marqueeHeight = marqueeRef.current.getBoundingClientRect().height;

    //marquee tween
    gsap.to(marqueeRef.current, {
      x: -700,
      scrollTrigger: {
        trigger: sectionRef.current,
        scrub: 1,
      }
    })

    //page1Items
    const titleWords = gsap.utils.toArray(titleRef.current.children);
    const descriptionLines = gsap.utils.toArray(descriptionRef.current.children);
    const statElements = gsap.utils.toArray<HTMLDivElement>(statsRef.current.children);

    const titlesTimeline = gsap.timeline()
    .to(titleWords, {y: 0, autoAlpha: 1, stagger: 0.3})
    .to(subtitleRef.current, {autoAlpha: 1, duration: 0.2})
    .to(descriptionLines, {y: 0, autoAlpha: 1, stagger: 0.1});
  
    const cardTween = gsap.to(cardRef.current, {autoAlpha: 1, duration: 0.5});

    const statsTween = gsap.to(statElements, {
      autoAlpha: 1,
      stagger: 0.5,
      ease: "power2.out",
      onComplete: () => {
        statElements.forEach((statElement) => {
          const statNumberElement = statElement.querySelector('.stat-number');

          if(statNumberElement) {
            statNumberElement.textContent = "+00";

            const targetValue = parseInt(statElement.dataset.value || "0", 10);
            const counter = { value: 0 };
  
            gsap.to(counter, {
              value: targetValue,
              duration: 1,
              onUpdate: () => {
                statNumberElement.textContent = counter.value < 10
                  ? `+0${Math.floor(counter.value)}`
                  : `+${Math.floor(counter.value)}`;
              },
            });
          }
        });
      },
    });

    const section1Tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top+=30%",
      }
    })
    .add(cardTween)
    .add(titlesTimeline)
    .add(statsTween, '-=0.5');

    gsap.to(cardRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: cardRef.current,
        endTrigger: page2Ref.current,
        start: `top+=${marqueeHeight} top`,
        end: `top top+=${sectionTopPadding}`
      }
    })

    const title2Tl = gsap.timeline();
    const title2Lines = gsap.utils.toArray<HTMLElement>(title2Ref.current?.querySelectorAll('.title-2-line'));

    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top+=30%",
      }
    });

    title2Lines.forEach((line, index) => {
      const lineTl = gsap.timeline();
      const letters = Array.from(
        line.querySelectorAll<HTMLSpanElement>('.title-2-letter')
      );

      lineTl.to(letters, {
        y: 0,
        autoAlpha: 1,
        ease: "elastic.out(1, 0.4)",
        stagger: {
          each: 0.3,
        },
      });

      // Add line timeline to title timeline with offset
      if (index === 0) {
        title2Tl.add(lineTl);
      } else {
        title2Tl.add(lineTl, '-=20%');
      }
    });

    const experiencesTl = gsap.timeline({

    });

    const experiences = Array.from(
      experiencesRef.current.querySelectorAll<HTMLDivElement>('.experience')
    );

    experiences.forEach((exp, index) => {
      const expTl = gsap.timeline();
      const tlCoverTl = gsap.timeline();
      
      const title = exp.querySelector<HTMLHeadingElement>('.experience-title');
      const company = exp.querySelector<HTMLParagraphElement>('.experience-subtitle');
      const skills = Array.from(
        exp.querySelectorAll<HTMLSpanElement>('.experience-skills .skill')
      );
      const description = exp.querySelector<HTMLParagraphElement>('.experience-description');
      const dates = exp.querySelector<HTMLParagraphElement>('.experience-dates');

      gsap.set([title, company, ...skills, description, dates], { autoAlpha: 0, y: 20 });

      expTl
        .to(title, { autoAlpha: 1, y: 0, duration: 0.4 })
        .to(company, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.2")
        .to(skills, {
          autoAlpha: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.3
        }, "-=0.1")
        .to(description, { autoAlpha: 1, y: 0, duration: 0.4 }, "-=0.2")
        .to(dates, { autoAlpha: 1, y: 0, duration: 0.3 }, "-=0.3");

        tlCoverTl.to(tlCoverRef.current, { yPercent: -100, duration: 0.5 })

      experiencesTl.add(tlCoverTl)
      experiencesTl.add(expTl, index * 0.5);
    });

    console.log(sectionRef.current)
    const page2Tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top+=20% top",
      }
    })

    page2Tl.add(title2Tl)
    .add(experiencesTl, '-=20%')

    // .add(page1Off)
    // .add(titleTl, '>')
    // .add(experiencesTl, "-=0.5");
    
  }, [titleRef])

  return {
    sectionRef,
    titleRef,
    descriptionRef,
    subtitleRef,
    marqueeRef,
    cardRef,
    statsRef,
    page2Ref,
    title2Ref,
    experiencesRef,
    tlCoverRef
  };
};

export default SkillsAnimation;
