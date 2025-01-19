import { FC } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";


const AboutMe: FC = () => {
  const { sectionRef, titleRef, subtitleRef, descriptionRef, marqueeRef, cardRef, statsRef } = useAnimation();

  return (
    <S.AboutMe id="about-me" ref={sectionRef}>
      <S.TopStripe ref={marqueeRef}>
        <S.StripeText>About Me</S.StripeText>
        <S.StripeText>About Me</S.StripeText>
        <S.StripeText>About Me</S.StripeText>
        <S.StripeText>About Me</S.StripeText>
        <S.StripeText>About Me</S.StripeText>
        <S.StripeText>About Me</S.StripeText>
        <S.StripeText>About Me</S.StripeText>
      </S.TopStripe>
      <S.Wrapper>
        <S.Content>
          <S.Card ref={cardRef}>
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
            <S.Title ref={titleRef}>
              {C.title.map((word, index) => (
                <S.TitleWord key={index}>
                  {word}
                </S.TitleWord>
              ))}
            </S.Title>
            <S.Subtitle ref={subtitleRef}>{C.subtitle}</S.Subtitle>
            <S.SocialMediasMobile>
              {C.socialMedia.map((item, index) => (
                <S.SocialMedia href={item.href} key={index}>
                  <S.SocialMediaIcon src={item.iconSrc} alt={item.alt} />
                </S.SocialMedia>
              ))}
            </S.SocialMediasMobile>
            {/* <S.Description>{C.description}</S.Description> */}
            <S.Description ref={descriptionRef}>
              {C.description2.map((line, index) => (
                <S.DescriptionLine>{line}</S.DescriptionLine>
              ))}
            </S.Description>
            <S.Stats ref={statsRef}>
              {C.stats.map((item, index) => (
                <S.Stat key={index} data-value={item.value}>
                  <S.StatNumber className="stat-number">+00</S.StatNumber>
                  <S.StatSubtitle>{item.subtitle}</S.StatSubtitle>
                </S.Stat>
              ))}
            </S.Stats>
          </S.Informations>
        </S.Content>
      </S.Wrapper>
    </S.AboutMe>
  );
};

export default AboutMe;
