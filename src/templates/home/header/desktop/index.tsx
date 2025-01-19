'use client'
import { FC, useEffect, useRef, useState } from "react";
import C from "../const";
import * as S from "./styles";
import useAnimation from "./animation";

const HeaderDesktop: FC = () => {
  const { sectionRef, cardRef, titleRef, firstCaretRef, subtitleRef, marqueeRef, linesRef, scrollButtonRef } = useAnimation();
  const [ beforeSection, setBeforeSection ] = useState<HTMLElement | null>();
  const [ afterSection, setAfterSection ] = useState<HTMLElement | null>();

  useEffect(() => {
    setBeforeSection(document.getElementById('skills'))
    setAfterSection(document.getElementById('header'));
    }, [])

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
      <S.TextWrapper>
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
      </S.TextWrapper>
      <S.ScrollWrapper ref={scrollButtonRef}>
        <S.ScrollButton beforeSection={beforeSection} afterSection={afterSection} />
      </S.ScrollWrapper>
      </S.CardContainer>
    </S.Header>
  );
};

export default HeaderDesktop;
