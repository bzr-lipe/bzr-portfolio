import styled from "styled-components";

export const AboutMe = styled.div`
  height: fit-content;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  padding-top: 20rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.blueYankees};

  @media (max-width: 414px) {
    height: fit-content;
    padding: 4rem 0;
  }
`;

export const TopStripe = styled.div`
  position: absolute;
  width: fit-content;
  top: 0;
  left: 0%;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  flex-wrap: nowrap;
  height: 7rem;
  gap: 6rem;
`;

export const StripeText = styled.span`
  font-size: 6rem;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${({ theme }) => theme.blueYankees};
`;

export const Wrapper = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-top: 7rem;
  padding: 0 0 27rem 35rem;

  @media (max-width: 414px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const CardColumn = styled.div`
  height: fit-content;
  display: flex;
`;

export const InfosColumn = styled.div`
  height: fit-content;
  position: relative;
  width: 100%;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  width: fit-content;
  position: relative;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  width: 34rem;
  height: 50rem;
  padding: 3rem 5rem;
  font-weight: 300;
  border-radius: 2rem;
  background-image: url('./svgs/about-me/topography.svg');
  opacity: 0;
  visibility: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -10rem;
    left: -10rem;
    width: 20rem;
    z-index: 2;
    height: 20rem;
    border-radius: 50%;
    border: 0.7rem dashed ${({ theme }) => theme.purpleMedium};
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80%;
    background: rgb(255,255,255);
    z-index: 0;
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 100%);
  }

  @media (max-width: 414px) {
    display: none;
  }
`;

export const CardPicture = styled.img`
  width: 24rem;
  z-index: 1;
  border-radius: 1rem;

  @media (max-width: 414px) {
    width: 23rem;
  }
`;

export const CardDescription = styled.p`
  margin-top: 3rem;
  font-size: 2rem;
  text-align: center;
  z-index: 1;
  color: ${({ theme }) => theme.blackHalfFull};
  font-weight: 400;

  @media (max-width: 414px) {
    font-size: 1.5rem;
    margin-top: 2rem;
  }
`;

export const SocialMedias = styled.div`
  display: flex;
  width: 80%;
  margin-top: 2rem;
  z-index: 1;
  justify-content: space-between;

  @media (max-width: 414px) {
    justify-content: center;
    gap: 1rem;
  }
`;

export const SocialMediasMobile = styled(SocialMedias)`
  display: none;
  width: 100%;
  justify-content: flex-start;
  margin-left: 0.5rem;
  margin-top: 1rem;

  @media (max-width: 414px) {
    display: flex;
  }
`;

export const SocialMedia = styled.a`
  width: 4rem;
  height: 4rem;

  @media (max-width: 414px) {
    width: 3rem;
    height: 3rem;
  }
`;

export const SocialMediaIcon = styled.img`
  width: 100%;
  height: 100%;
`;

export const Informations = styled.div`
  margin-left: 5rem;
  margin-bottom: 10rem;
  z-index: 3;
  display: flex;
  flex-direction: column;

  @media (max-width: 414px) {
    margin-left: 0;
    width: 90%;
  }
`;

export const Title = styled.div`
  overflow: hidden;
  z-index: 2;

  @media (max-width: 414px) {
    margin-top: 2rem;
  }
`;

export const TitleWord = styled.span`
  font-size: 10rem;
  line-height: 9rem;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  display: block;
  transform: translateY(100%);
  opacity: 0;
  visibility: hidden;

  &:last-child {
    color: ${({ theme }) => theme.purpleMedium};
  }

  @media (max-width: 414px) {
    font-size: 6rem;
    line-height: 5rem;
  }
`;

export const Subtitle = styled.span`
  font-size: 2rem;
  line-height: 3rem;
  margin-left: 0.5rem;
  font-weight: 300;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  display: block;
  opacity: 0;
  visibility: hidden;
  z-index: 2;

  @media (max-width: 414px) {
    font-size: 1.7rem;
  }
`;

export const Description = styled.div`
  font-size: 1.9rem;
  line-height: 2.7rem;
  margin-left: 0.5rem;
  margin-top: 5rem;
  font-weight: 300;
  color: ${({ theme }) => theme.white};
  display: block;
  z-index: 2;
  max-width: 50rem;

  span {
    text-transform: uppercase;
    font-size: 1.2rem;
    margin-right: 1.6rem;
    color: ${({ theme }) => theme.purpleMedium};
  }

  @media (max-width: 414px) {
    font-size: 1.6rem;
    line-height: 2.3rem;
    margin-top: 5rem;

    span {
      font-size: 1.2rem;
      margin-right: 1.1rem;
    }
  }
`;

export const DescriptionLine = styled.div`
  font-size: 1.9rem;
  line-height: 2.7rem;
  font-weight: 300;
  color: ${({ theme }) => theme.white};
  display: block;
  transform: translateY(100%);
  opacity: 0;
  visibility: hidden;

  span {
    text-transform: uppercase;
    font-size: 1.2rem;
    /* margin-right: 1.6rem; */
    color: ${({ theme }) => theme.purpleMedium};
  }

  @media (max-width: 414px) {
    font-size: 1.6rem;
    line-height: 2.3rem;
    /* margin-top: 5rem; */

    span {
      font-size: 1.2rem;
      margin-right: 1.1rem;
    }
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 4rem;
  z-index: 2;
`;

export const Stat = styled.div`
  margin-left: 0.5rem;
  margin-top: 4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  display: block;
  width: 12rem;
  max-width: 50rem;
  opacity: 0;
  visibility: hidden;

  span {
    text-transform: uppercase;
    font-size: 1.5rem;
    margin-top: 1rem;
    display: block;
    font-weight: 400;
    color: ${({ theme }) => theme.purpleMedium};
  }

  @media (max-width: 414px) {
    font-size: 5rem;
    margin-top: 3rem;
  }
`;

export const StatNumber = styled.div`
  font-size: 6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.white};
  display: block;

  @media (max-width: 414px) {
    font-size: 5rem;
    margin-top: 3rem;
  }
`;

export const StatSubtitle = styled.span`
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-top: 1rem;
  display: block;
  font-weight: 400;
  color: ${({ theme }) => theme.purpleMedium};
`;

//////////////////////

export const ContentPage2 = styled.div`
  margin-left: 5rem;
  /* position: absolute; */
  top: 0;
  left: 0;
  width: fit-content;
`;

export const TitleContainer = styled.div`

`;

export const TitleLine = styled.p`
  font-size: 4.8rem;
  line-height: 4.5rem;
  display: flex;
  font-weight: 700;
  text-transform: uppercase;
  color: ${({ theme }) => theme.white};
  gap: 1.3rem;
  overflow: hidden;
`;

export const Title2Letter = styled.span`
  transform: translateY(100%);
  white-space: nowrap;

  span {
    font-size: 2.4rem;
    line-height: 2rem;
    color: ${({ theme }) => theme.purpleMedium};
  }
`;

export const Experiences = styled.div`
  width: 70rem;
  margin-top: 3rem;
  padding-left: 7rem;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  overflow: hidden;
`;

export const TimelineCover = styled.div`
  width: 2rem;
  position: absolute;
  height: 100%;
  background-color: ${({ theme }) => theme.blueYankees};
  left: 2rem;
  top: 3rem;
  z-index: 1;
`;

export const Experience = styled.div`
  color: ${({ theme }) => theme.white};
  position: relative;

  &:first-child {
    &::after {
      content: '';
      width: 0.1rem;
      top: 51%;
      left: -4.35rem;
      height: 130rem;
      z-index: 0;
      position: absolute;
      background-color: ${({ theme }) => theme.white};
    }

    &::before {
      background-color: ${({ theme }) => theme.purpleMedium};
    }
  }

  &::before {
    content: '';
    width: 1.5rem;
    height: 1.5rem;
    top: 50%;
    left: -5rem;
    position: absolute;
    background-color: ${({ theme }) => theme.white};
    border-radius: 50%;
    z-index: 1;
  }
`;

export const ExperienceTitle = styled.p`
  font-size: 3.2rem;
  font-weight: 300;
`;

export const ExperienceCompany = styled.p`
  font-size: 2.8rem;
  color: ${({ theme }) => theme.purpleMedium};
  font-weight: 600;
`;

export const ExperienceSkills = styled.div`
  display: flex;
  margin-top: 1rem;
  gap: 1rem;
`;

export const ExperienceSkill = styled.div`
  font-size: 1.1rem;
  border: 0.1rem solid ${({ theme }) => theme.white};
  padding: 0.5rem 1rem;
  border-radius: 3rem;
`;

export const ExperienceDescription = styled.p`
  font-size: 1.6rem;
  font-weight: 300;
  margin-top: 2rem;
`;

export const ExperienceDates = styled.p`
  font-size: 1.8rem;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.purpleMedium};
`;