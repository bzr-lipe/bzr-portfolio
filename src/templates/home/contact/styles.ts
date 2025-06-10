import styled from "styled-components";

export const Contact = styled.section`
  width: 100%;
  position: relative;
  z-index: 1;

  @media (max-width: 414px) {
    height: fit-content;
    padding: 4rem 0;
  }
`;

export const HeroSection = styled.div`
   width: 100%;
   overflow: hidden;
   height: 100vh;
   z-index: 1;
   display: flex;
  align-items: center;
  justify-content: center;
   background: linear-gradient(0deg, rgba(55,55,55,1) 0%, rgba(18,18,18,1) 100%);
`;


export const HeroContainer = styled.div`
  color: ${({ theme }) => theme.white};
  text-align: center;
`;

export const HeroFirstLine = styled.div`
  font-size: 4.8rem;
  /* text-transform: uppercase; */
`;

export const HeroSecondLine = styled.div`
  font-size: 15rem;
  font-weight: 600;
  text-transform: uppercase;
`;

export const ContactSection = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  padding: 15rem 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  opacity: 0;
  visibility: 0;
`;

export const Title = styled.div`
  font-size: 12.8rem;
  font-weight: 500;
  margin-bottom: 5rem;
`;

export const Btn = styled.div`
  font-size: 2.8rem;
  background-color: ${({ theme }) => theme.indigoRainbow};
  color: ${({ theme }) => theme.white};
  padding: 2rem 3rem;
  border-radius: 1rem;
`;

export const SocialMediasTitle = styled.p`
  font-size: 2.8rem;
  margin-top: 6rem;
`;

export const SocialMediasContainer = styled.div`
  display: flex;
  margin-top: 6rem;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  gap: 5rem;
`;

export const Icon = styled.img`
`;

export const MediaTitle = styled.p`
  font-size: 4rem;
  font-weight: 500;
`;

