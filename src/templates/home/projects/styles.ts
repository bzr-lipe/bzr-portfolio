import styled from "styled-components";

export const Projects = styled.section`
  height: fit-content;
  position: relative;
  padding-top: 7rem;
  width: 100%;

  @media (max-width: 414px) {
    height: fit-content;
    padding-top: 3.7rem;
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

  @media (max-width: 414px) {
    gap: 3rem;
    height: 3.7rem;
  }
`;

export const StripeText = styled.span`
  font-size: 6rem;
  font-weight: 700;
  text-transform: uppercase;
  white-space: nowrap;
  color: ${({ theme }) => theme.blueYankees};

  @media (max-width: 414px) {
    font-size: 3rem;
  }
`;

export const SelectedProjects = styled.div`

`;

export const SelectedProject = styled.div<{ $bgGradient: string }>`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  background: ${({ $bgGradient }) => $bgGradient};

  @media (max-width: 414px) {
    height: fit-content;
  }
`;

export const SelectedProjectWrapper = styled.div<{ $isOdd: boolean }>`
  display: flex;
  flex-direction: ${({ $isOdd }) => $isOdd ? 'row' : 'row-reverse'};;
  justify-content: space-between;
  padding: 5rem 10rem;
  width: 100%;

  @media (max-width: 414px) {
    padding: 5rem 2rem;
    justify-content: center;
  }
`;

export const SelectedMobileContainer = styled.div`
  color: ${({ theme }) => theme.white};
  max-width: 35rem;
`;

export const MobileTitle = styled.p`
  display: none;
  font-size: 4rem;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 1rem;

  @media (max-width: 414px) {
    display: block;
  }
`;

export const SelectedMobileImage = styled.img`
  border-radius: 2rem;
  width: 100%;
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.3);
`;

export const SelectedMobileSkills = styled.div`
  display: flex;
  gap: 1rem;
  padding: 2rem 0;

  @media (max-width: 414px) {
    padding: 1rem 0;
  }
`;

export const SelectedMobileSkill = styled.div`
  font-size: 1.4rem;
  border: 0.1rem solid ${({ theme }) => theme.white};
  padding: 0.5rem 1rem;
  border-radius: 3rem;
  text-transform: uppercase;
`;

export const SelectedMobileDescription = styled.p`
  font-size: 1.6rem;

  @media (max-width: 414px) {
    font-weight: 300;
    margin-top: 1.5rem;
  }
`;

export const SelectedProjectMainContainer = styled.div`
  max-width: 125rem;

  @media (max-width: 414px) {
    display: none;
  }
`;

export const SelectedProjectHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;

  @media (max-width: 414px) {
    display: none;
  }
`;

export const SelectedTitle = styled.p`
  color: ${({ theme }) => theme.white};
  font-size: 6.4rem;
  text-transform: uppercase;
`;

export const SelectedBtn = styled.a<{ $bgColor: string, $textColor: string }>`
  background-color: ${({ theme, $bgColor }) => theme[$bgColor]};
  color: ${({ theme, $textColor }) => theme[$textColor]};
  padding: 1.5rem 3rem;
  height: 5.7rem;
  border-radius: 5.6rem;
  font-size: 2.2rem;
  text-transform: uppercase;
`;

// export const MainImageContainer = styled.div`
//   width: 100%;

//   canvas {
//     top: 50%;
//   }
// `

export const MainImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  max-width: 100%;
  background-color: transparent !important;

  transition: all ease 0.5s;

  canvas {
    position: absolute;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
    background-color: transparent !important;
  }
`

export const SelectedProjectImage= styled.img`
  border-radius: 2rem;
  width: 100%;
  visibility: hidden;
  opacity: 0;
  /* perspective: 100rem; */

  @media (max-width: 414px) {
    display: none;
  }
`;

export const MoreProjects = styled.div`

`;

export const MoreProjectsTitle = styled.p`

`;

export const MoreProjectsSubtitle = styled.p`

`;


export const MoreProjectsContainer= styled.div`

`; 
