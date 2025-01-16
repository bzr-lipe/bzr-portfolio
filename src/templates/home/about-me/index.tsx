import { FC } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";

const AboutMe: FC = () => {
  // const { cardRef, sectionRef, listRef } = useAnimation();

  return (
    <S.AboutMe id="about-me" >
      <S.Card>
        <S.CardPicture src={'./imgs/about-me/picture.png'} />
        <S.CardTitle>Felipe B.</S.CardTitle>
      </S.Card>
    </S.AboutMe>
  );
};

export default AboutMe;
