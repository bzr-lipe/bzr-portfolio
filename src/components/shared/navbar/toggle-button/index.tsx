import { FC } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";
import { useThemeContext } from "@/contexts/theme";

const ToggleButton: FC = () => {
  const { switchRef, moonRef, sunRef } = useAnimation();
  const { switchTheme, isLight } = useThemeContext();

  const changeTheme = () => {
    switchTheme();
  };

  return (
    <S.ToggleButton onClick={changeTheme} $isLight={isLight}>
      <S.Switch ref={switchRef}>
        <S.IconWrapper>
          <S.MoonIcon src={C.moonIconSrc} ref={moonRef} />
          <S.SunIcon src={C.sunIconSrc} ref={sunRef}/>
        </S.IconWrapper>
      </S.Switch>
    </S.ToggleButton>
  );
};

export default ToggleButton;
