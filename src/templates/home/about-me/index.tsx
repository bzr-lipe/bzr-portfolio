import { FC } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";

const AboutMe: FC = () => {
  // const { cardRef, sectionRef, listRef } = useAnimation();

  return (
    <S.AboutMe id="about-me" >
      <S.Content>
        <S.Card>
          <S.CardPicture src={'./imgs/about-me/picture.png'} />
          <S.CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel ligula sit amet purus</S.CardDescription>
          <S.SocialMedias>
            {C.socialMedia.map((item, index) => (
              <S.SocialMedia href={item.href} key={index}>
                <S.SocialMediaIcon src={item.iconSrc} alt={item.alt} />
              </S.SocialMedia>
            ))}
          </S.SocialMedias>
        </S.Card>
        <S.Informations>
          <S.Title>
            {C.title.map((word, index) => (
              <S.TitleWord key={index}>
                {word}
              </S.TitleWord>
            ))}
          </S.Title>
          <S.Subtitle>{C.subtitle}</S.Subtitle>
          <S.Description>{C.description}</S.Description>
          <S.Stats>
            {C.stats.map((item, index) => (
              <S.Stat>{item}</S.Stat>
            ))}
          </S.Stats>
        </S.Informations>
      </S.Content>
    </S.AboutMe>
  );
};

export default AboutMe;
