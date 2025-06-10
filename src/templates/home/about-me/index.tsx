import { FC } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";


const AboutMe: FC = () => {
  const { sectionRef, titleRef, subtitleRef, descriptionRef, marqueeRef, cardRef, statsRef, page2Ref, title2Ref, experiencesRef, tlCoverRef } = useAnimation();

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
          <S.CardColumn>
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
          </S.CardColumn>
          <S.InfosColumn>
            <S.Informations>
              <S.Title ref={titleRef}>
                {C.page1.title.map((word, index) => (
                  <S.TitleWord key={index}>
                    {word}
                  </S.TitleWord>
                ))}
              </S.Title>
              <S.Subtitle ref={subtitleRef}>{C.page1.subtitle}</S.Subtitle>
              <S.SocialMediasMobile>
                {C.socialMedia.map((item, index) => (
                  <S.SocialMedia href={item.href} key={index}>
                    <S.SocialMediaIcon src={item.iconSrc} alt={item.alt} />
                  </S.SocialMedia>
                ))}
              </S.SocialMediasMobile>
              <S.Description ref={descriptionRef}>
                {C.page1.description2.map((line, index) => (
                  <S.DescriptionLine key={index}>{line}</S.DescriptionLine>
                ))}
              </S.Description>
              <S.DescriptionMobile>
                {C.page1.description2.map((line, index) => (
                  line
                ))}
              </S.DescriptionMobile>
              <S.Stats ref={statsRef}>
                {C.page1.stats.map((item, index) => (
                  <S.Stat key={index} data-value={item.value}>
                    <S.StatNumber className="stat-number">+00</S.StatNumber>
                    <S.StatSubtitle>{item.subtitle}</S.StatSubtitle>
                  </S.Stat>
                ))}
              </S.Stats>
            </S.Informations>
            <S.ContentPage2 ref={page2Ref}>
              <S.Title2Container ref={title2Ref}>
                {C.page2.title.map((line, index) => (
                  <S.Title2Line key={index} className="title-2-line">
                    {line.map((item, index) => (
                      <S.Title2Letter key={index} className="title-2-letter">{item}</S.Title2Letter>
                    ))}
                  </S.Title2Line>
                ))}
              </S.Title2Container>
              <S.Title2Mobile>Experiences</S.Title2Mobile>
              <S.Experiences ref={experiencesRef}>
                {C.page2.experiences.map((experience, index) => (
                  <S.Experience key={index} className="experience">
                    <S.ExperienceTitle className="experience-title">{experience.position}</S.ExperienceTitle>
                    <S.ExperienceCompany className="experience-subtitle">{experience.company}</S.ExperienceCompany>
                    <S.ExperienceSkills className="experience-skills">
                      {experience.skills.map((skill,  index) => (
                        <S.ExperienceSkill className="skill" key={index}>{skill}</S.ExperienceSkill>
                      ))}
                    </S.ExperienceSkills>
                    <S.ExperienceDescription className="experience-description">
                      {experience.description}
                    </S.ExperienceDescription>
                    <S.ExperienceDates className="experience-dates">
                      {experience.dates}
                    </S.ExperienceDates>
                  </S.Experience>
                ))}
                <S.TimelineCover ref={tlCoverRef} />
              </S.Experiences>
            </S.ContentPage2>
          </S.InfosColumn>
        </S.Content>
      </S.Wrapper>
    </S.AboutMe>
  );
};

export default AboutMe;
