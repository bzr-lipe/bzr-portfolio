'use client'
import { FC, lazy, useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from 'styled-components'
import * as S from "./styles";
import Header from "./header";
import Skills from "./skills";
import Navbar from "@/components/shared/navbar";
import AboutMe from "./about-me";
import Projects from "./projects";
import Contact from "./contact";
import Intro from "./Intro";

const SomeComponent = lazy(() => import('./header'));

const HomeTemplate: FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    const xTo = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.3,
      ease: "power3",
    });
    const yTo = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.3,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    });

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        scale: 0.7,
        backgroundColor: theme.purpleMedium,
        duration: 0.1,
        ease: "power1",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: 'transparent',
        duration: 0.1,
        ease: "power1",
      });
    };

    document.querySelectorAll("a, button, nav").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    const introSection = document.getElementById('intro');

    introSection?.addEventListener('mouseenter', () => {
      gsap.set(cursorRef.current, {autoAlpha: 0})
    })
    introSection?.addEventListener('mouseleave', () => {
      gsap.set(cursorRef.current, {autoAlpha: 1})
    })
  }, [theme.purpleMedium]);

  return (
    <main>
      <S.Home>
        <Navbar />
        <Header />
        <Intro />
        {/* <Skills /> */}
        <AboutMe />
        <Projects />
        <Contact />
        {/* <S.FantasySection /> */}
        <S.Cursor ref={cursorRef} />
      </S.Home>
    </main>
  );
};

export default HomeTemplate;
