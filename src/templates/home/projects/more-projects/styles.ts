import styled from "styled-components";

export const MoreProjects = styled.div`
  height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.white};
`;

export const Wrapper = styled.div`
  padding: 10rem 15rem;

  @media (max-width: 414px) {
    padding: 5rem 2rem;
  }
`;

export const Title = styled.p`
  font-size: 6.4rem;
  text-transform: uppercase;
  font-weight: 600;

  @media (max-width: 414px) {
    font-size: 4rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.6rem;
  margin-top: 2rem;
  width: 60rem;

  @media (max-width: 414px) {
    width: 100%;
  }
`;


export const ProjectsContainer= styled.div`
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  gap: 5rem;

  @media (max-width: 414px) {
    gap: 3rem;
    margin-top: 3rem;
  }
`;

export const Project = styled.div<{ $isOdd: boolean }>`
  background: ${({ $isOdd }) => $isOdd ? 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(102,102,102,1) 100%)' : 'linear-gradient(0deg, #A4A4A4 0%, #F0F0F0 100%)'};
  width: 50rem;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: 414px) {
    width: 100%;
    height: 20rem;
  }
`;

export const ProjectLogo = styled.img`
  width: 80%;

  @media (max-width: 414px) {
    width: 70%;
  }
`;

export const ProjectHover = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.blackHalf};
  position: absolute;
  top: 0;
  left: 0;
  text-transform: uppercase;
  font-size: 1.8rem;
  font-weight: 500;
  padding: 4rem 3rem 1rem;
`;

export const HoverWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const HoverTitle = styled.div`
  background-color: ${({ theme }) => theme.indigoRainbow};
  color: ${({ theme }) => theme.white};
  padding: 0.8rem 1rem;
  width: fit-content;
  margin-bottom: 1.5rem;
`;

export const HoverText = styled.div`
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.iris};
  padding: 0.8rem 1rem;
  width: fit-content;
`;

export const HoverKnowMore = styled(HoverText)`
`

export const ModalContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  display: flex;
  visibility: hidden;
  opacity: 0;
`;

export const Modal = styled.div<{ $bgColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};
  position: absolute;
  width: 90%;
  height: 90%;
  justify-content: space-between;
  display: flex;
  
  border-radius: 2rem;

  @media (max-width: 414px) {
    z-index: 4;
    width: 95%;
    height: 95%;
  }
`;

export const ModalWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 6rem 10rem;
  position: relative;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 414px) {
    padding: 1rem 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const ModalCloseContainer = styled.div`
  background-color: ${({ theme }) => theme.white};
  position: absolute;
  width: 12rem;
  height: 11rem;
  right: -0.1rem;  // Extend slightly beyond the edge
  top: -0.1rem;
  justify-content: center;
  align-items: center;
  display: flex;

  @media (max-width: 414px) {
    width: 6rem;
    height: 6rem;
  }
`;

export const CornerSvg = styled.div`
  width: 3rem;
  height: 3rem;
  position: absolute;

  svg {
    width: 3rem;
    height: 3rem;
  }

  @media (max-width: 414px) { 
    width: 2rem;
    height: 2rem;

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;

export const CornerRight = styled(CornerSvg)`
  bottom: -2.9rem;
  right: 0;
  transform: rotate(180deg);

  @media (max-width: 414px) { 
    bottom: -1.95rem;
  }
`;

export const CornerTopLeft = styled(CornerSvg)`
  transform: rotate(180deg);
  top: 0;
  left: -2.9rem;

  @media (max-width: 414px) { 
    left: -1.95rem;
  }
`;

export const CornerBottomLeft = styled(CornerSvg)`
  bottom: -0.1rem;
  left: -0.1rem;

  @media (max-width: 414px) { 
    left: -0.1rem;
  }
`;

export const ModalCloseButton = styled.button<{ $bgColor: string }>`
  background-color: ${({ $bgColor }) => $bgColor};
  justify-content: center;
  width: 8rem;
  height: 8rem;
  display: flex;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0rem 1rem rgba(0, 0, 0, 0.5);

  &::before,
  &::after {
    width: 0.3rem;
    height: 3.5rem;
    border-radius: 0.5rem;
    background-color: ${({ theme }) => theme.white};
    content: '';
    position: absolute;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media (max-width: 414px) {
    width: 4rem;
    height: 4rem;

    &::before,
    &::after {
      width: 0.2rem;
      height: 2rem;
    }
  }
`;

export const ModalContent= styled.div`
  width: 110rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media (max-width: 414px) {
    width: 100%;
    height: fit-content;
  }
`;

export const ModalTitle = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 5.5rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 1rem;

  @media (max-width: 414px) {
    font-size: 3.5rem;
  }
`;

export const ModalSkills = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;

  @media (max-width: 414px) {
    padding: 1rem 0;
  }
`;

export const ModalSkill = styled.div`
  font-size: 1.7rem;
  color: ${({ theme }) => theme.white};
  border: 0.1rem solid ${({ theme }) => theme.white};
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  text-transform: uppercase;

  @media (max-width: 414px) {
    font-size: 1.3rem;
  }
`;

export const ModalDescription = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.white};

  @media (max-width: 414px) {
    font-size: 1.2rem;
  }
`;

export const ModalMainImage = styled.img`
  width: 100%;
  margin-top: auto;
  border-radius: 2rem;

  @media (max-width: 414px) {
    display: none;
  }
`;

export const ModalMobileImage = styled.img`
  width: 35rem;
  border-radius: 2rem;

  @media (max-width: 414px) {
    width: 90%;
    display: none;
  }
`;

export const ResponsiveMobileImage = styled(ModalMobileImage)`
  width: 80%;
  display: none;

  @media (max-width: 414px) {
    display: block;
  }
`
