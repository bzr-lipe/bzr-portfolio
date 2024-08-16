import { FC } from "react";
import * as S from "./styles";
import useAnimation from "./animation";
import { type BurgerIconProps} from "./props";


const BurgerIcon: FC<BurgerIconProps> = ({ className }) => {
  const { toggleButton, buttonRef } = useAnimation();

  return (
    <S.BurgerIcon className={className} onClick={() => toggleButton()} ref={buttonRef}>
      {[1,2,3].map((index) => (
        <S.Row key={index} />
      ))}
    </S.BurgerIcon>
  );
};

export default BurgerIcon;
