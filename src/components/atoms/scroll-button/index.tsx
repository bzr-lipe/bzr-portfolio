import { FC, useEffect, useState } from "react";
import C from "./const";
import * as S from "./styles";
import gsap from "gsap";
import useAnimation from "./animation";
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { type ScrollButtonProps} from "./props";
import { scrollTo } from "@/utils/scroll-to";


const ScrollButton: FC<ScrollButtonProps> = ({ targetSection, isScrolled, isActive, triggerSection }) => {
  const { downTextRef, upTextRef, arrowRef, setSectionTrigger, setIsScrolled, setIsActive, buttonRef } = useAnimation();

  const scrollToTarget = () => {
    if(targetSection) {
      scrollTo(targetSection)
    }
  };

  useEffect(() => {
    setIsScrolled(isScrolled)
    setIsActive(isActive)
  }, [isScrolled, isActive])


  useEffect(() => {
    if (triggerSection) {
      setSectionTrigger(triggerSection)
    }
  }, [triggerSection])


  return (
    <S.ScrollButton onClick={() => scrollToTarget()} ref={buttonRef}>
      <S.Text ref={downTextRef}>{C.scrollDownText}</S.Text>
      <S.Arrow ref={arrowRef} />
      <S.ScrollUpText ref={upTextRef}>{C.scrollUpText}</S.ScrollUpText>
    </S.ScrollButton>
  );
};

export default ScrollButton;
