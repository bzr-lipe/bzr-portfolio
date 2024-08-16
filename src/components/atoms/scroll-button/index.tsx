import { forwardRef, useEffect } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";
import { type ScrollButtonProps} from "./props";
import { scrollTo } from "@/utils/scroll-to";

const ScrollButton = forwardRef<HTMLButtonElement, ScrollButtonProps>(
  ({ targetSection, isScrolled, isActive, triggerSection }, ref ) => {
  const { downTextRef, upTextRef, arrowRef, buttonRef } = useAnimation();

  const scrollToTarget = () => {
    if(targetSection) {
      scrollTo(targetSection);
    }
  };

  return (
    <S.ScrollButton onClick={() => scrollToTarget()} ref={buttonRef}>
      <S.Text ref={downTextRef}>{C.scrollDownText}</S.Text>
      <S.Arrow ref={arrowRef} />
      <S.ScrollUpText ref={upTextRef}>{C.scrollUpText}</S.ScrollUpText>
    </S.ScrollButton>
  );
});

ScrollButton.displayName = 'ScrollButton';

export default ScrollButton;
