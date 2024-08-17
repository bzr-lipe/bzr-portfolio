import { FC, useEffect, useRef, useState } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";

const Header: FC = () => {
  const { titleRef, firstCaretRef, subtitleRef } = useAnimation();
  const [ beforeSection, setBeforeSection ] = useState<HTMLElement | null>();
  const [ afterSection, setAfterSection ] = useState<HTMLElement | null>();

  useEffect(() => {
    setBeforeSection(document.getElementById('skills'))
    setAfterSection(document.getElementById('header'));
    }, [])

  return (
    <S.Header id="header">
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
      <S.ScrollWrapper >
        <S.ScrollButton beforeSection={beforeSection} afterSection={afterSection} />
      </S.ScrollWrapper>
    </S.Header>
  );
};

export default Header;
