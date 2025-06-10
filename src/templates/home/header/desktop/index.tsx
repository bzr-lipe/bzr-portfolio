'use client'
import { FC, useEffect, useRef, useState } from "react";
import C from "../const";
import * as S from "./styles";
import * as THREE from 'three';
import useAnimation from "./animation";

const HeaderDesktop: FC = () => {
  const { sectionRef, cardRef, titleRef, firstCaretRef, subtitleRef, marqueeRef, linesRef, scrollButtonRef } = useAnimation();
  const [ beforeSection, setBeforeSection ] = useState<HTMLElement | null>();
  const [ afterSection, setAfterSection ] = useState<HTMLElement | null>();

  useEffect(() => {
    setBeforeSection(document.getElementById('skills'))
    setAfterSection(document.getElementById('header'));
    }, []);

  useEffect(() => {
    const textContainer = document.getElementById('text-container');
    let easeFactor = 0.02;
    let scene, camera, renderer, planeMesh;
    let mousePosition = { x: 0.5, y: 0.5 };
    let targetMousePosition = { x: 0.5, y: 0.5 };
    let mouseStopTimeout;
    let aberrationIntensity = 0.0;
    let lastPosition = { x: 0.5, y: 0.5 };
    let prevPosition = { x: 0.5, y: 0.5 };
    }, []);

  return (
    <S.Header id="header" ref={sectionRef}>
      <S.BackgroundMarquee ref={marqueeRef}>
        {Array(12).fill(true).map((_, i) => {
          return (
            <S.MarqueeRow key={i} $isOdd={i % 2 !== 0}>
            {C.marquee.map((item, index) => (
              <S.MarqueeText key={index}>{item}</S.MarqueeText>
            ))}
            </S.MarqueeRow>
          )
        })}
      </S.BackgroundMarquee>
      <S.CardContainer ref={cardRef}>
      <S.LinesContainer ref={linesRef}>
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
        <S.Line />
      </S.LinesContainer>
      {/* <S.TextWrapper id="text-container">
        <S.Title ref={titleRef}>
          <S.Caret ref={firstCaretRef} />
          {C.title.map((item, index) => (
            <S.LetterWrapper key={index} className={`letter`}>
              <S.Letter className={`letter-${index}`}>{item}</S.Letter>
              <S.Caret className={`caret-${index}`}/>
            </S.LetterWrapper>
          ))}
        </S.Title>
        <S.Subtitle ref={subtitleRef}>{C.subtitle}</S.Subtitle>
      </S.TextWrapper> */}
      <S.Logo src={C.logo} />
      <S.ScrollWrapper ref={scrollButtonRef}>
        <S.ScrollButton beforeSection={beforeSection} afterSection={afterSection} />
      </S.ScrollWrapper>
      </S.CardContainer>
    </S.Header>
  );
};

export default HeaderDesktop;
