import { FC, useEffect, useRef, useState } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";

const Header: FC = () => {
  const { sectionRef, titleRef, firstCaretRef, subtitleRef, isScrolled, isActive} = useAnimation();
  let target: HTMLElement | null;
  const [ targetSection, setTargetSection ] = useState<HTMLElement | null>()

  useEffect(() => {
    setTargetSection(document.getElementById('skills'));
  }, [])

  useEffect(() => {
    if (isScrolled) {
      setTargetSection(document.getElementById('header'));
      return;
    }
    setTargetSection(document.getElementById('skills'));
  }, [isScrolled])

  return (
    <S.Header id="header" ref={sectionRef}>
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
      <S.ScrollWrapper>
        <S.ScrollButton targetSection={targetSection} triggerSection={sectionRef.current} isScrolled={isScrolled} isActive={isActive}/>
      </S.ScrollWrapper>
    </S.Header>
  );
};

export default Header;
