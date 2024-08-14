'use client'
import { FC, useEffect, useRef } from "react";
import gsap from "gsap";
import * as S from "./styles";
import Header from "./header";
import Skills from "./skills";
import Navbar from "@/components/shared/navbar";

const HomeTemplate: FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

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
        backgroundColor: '#9575DE',
        duration: 0.3,
        ease: "power3",
      });
      console.log('aaaa')
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: 'transparent',
        duration: 0.3,
        ease: "power3",
      });
    };

    document.querySelectorAll("a, button").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });
  }, []);

  return (
    <S.Home>
      <Navbar />
      <Header />
      <Skills />
      <S.Cursor ref={cursorRef} />
    </S.Home>
  );
};

export default HomeTemplate;
