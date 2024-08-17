import { FC, forwardRef, useEffect } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";
import { type ScrollButtonProps} from "./props";
import { scrollTo } from "@/utils/scroll-to";

const ScrollButton: FC<ScrollButtonProps> = ({ beforeSection, afterSection }) => {
  const { downTextRef, upTextRef, arrowRef, buttonRef, isScrolled } = useAnimation();

  const scrollToTarget = () => {
    if (afterSection && beforeSection) {
      scrollTo(isScrolled ? afterSection : beforeSection);
    }
  };

  return (
    <S.ScrollButton onClick={() => scrollToTarget()} ref={buttonRef}>
      <S.Text ref={downTextRef}>{C.scrollDownText}</S.Text>
      <S.Arrow ref={arrowRef} />
      <S.ScrollUpText ref={upTextRef}>{C.scrollUpText}</S.ScrollUpText>
    </S.ScrollButton>
  );
};

ScrollButton.displayName = 'ScrollButton';

export default ScrollButton;
