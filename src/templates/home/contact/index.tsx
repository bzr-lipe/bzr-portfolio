import { FC } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";


const Contact: FC = () => {
  const { sectionRef, titleRef, heroSectionRef, contactSectionRef} = useAnimation();

  return (
    <S.Contact id="contact" ref={sectionRef}>
      <S.HeroSection ref={heroSectionRef}>
        <S.HeroContainer>
          <S.HeroFirstLine>{C.heroSection.title}</S.HeroFirstLine>
          <S.HeroSecondLine ref={titleRef}>{C.heroSection.hero}</S.HeroSecondLine>
        </S.HeroContainer>
      </S.HeroSection>
      <S.ContactSection ref={contactSectionRef}>
        <S.Title>{C.title}</S.Title>
        <S.Btn>{C.button.text}</S.Btn>
        <S.SocialMediasTitle>{C.socialMedias.title}</S.SocialMediasTitle>
        <S.SocialMediasContainer>
          {C.socialMedias.medias.map((item, index) => (
            <S.SocialMediaContainer key={index}>
              <S.Icon src={item.logoSrc} />
              {/* <S.MediaTitle>{item.title}</S.MediaTitle> */}
            </S.SocialMediaContainer>
          ))}
        </S.SocialMediasContainer>
      </S.ContactSection>
    </S.Contact>
  );
};

export default Contact;
