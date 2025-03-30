import styled from "styled-components";

export const Skills = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  &.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
  }

  @media (max-width: 414px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.indigoRainbow};
  width: 95%;
  height: 95%;
  z-index: 2;
  border-radius: 5rem;
  position: relative;
  padding: 3rem;
  color: ${({ theme }) => theme.white};

  &.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &.animated {
    width: 100%;
    height: 100%;
    border-radius: 0rem;
  }


  @media (max-width: 414px) {
    padding: 2rem;
  }
`;

export const SkillsLists = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  font-size: 10rem;
  justify-content: center;
  padding: 3rem;
  font-weight: 300;
  color: ${({ theme }) => theme.white};

  @media (max-width: 414px) {
    padding: 0;
  }
`;

export const SkillCategory = styled.div<{ $multipleWords: boolean }>`
  padding: 3rem 0;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  height: ${({ $multipleWords }) => $multipleWords ? '35rem' : '27rem'};

  &:first-child {
    padding-top: 0;
  }
`;

export const BorderCover = styled.div`
  width: 100%;
  position: absolute;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.white};
  bottom: 0;
  left: 0;
  transform: translateX(100%);
`

export const ListTitle = styled.div<{ $multipleWords: boolean }>`
  display: flex;
  gap: 3rem;
  width: auto;
  position:absolute;
  height: ${({ $multipleWords }) => $multipleWords ? '26rem' : '13rem'};
`;

export const TitleWord = styled.p`
  font-size: 10rem;
  font-weight: 500;
  line-height: 12rem;
  position: absolute;
  width: fit-content;
  transform: translateY(35rem);

  @media (max-width: 414px) {
    font-size: 4rem;
    line-height: 4.5rem;
  }
`;

export const List = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  right: 3rem;
  gap: 4rem;

  @media (max-width: 414px) {
    left: 1rem;
    bottom: 3rem;
    gap: 1rem;
  }
`;

export const ListColumn = styled.ul`
`;

export const ListItemWrapper = styled.div`
  overflow-y: hidden;
`;

export const ListItem = styled.li`
  /* visibility: hidden;
  opacity: 0; */
  font-size: 4rem;
  line-height: 5.5rem;
  transform: translateY(100%);


  @media (max-width: 414px) {
    font-size: 2rem;
    line-height: 3rem;
  }
`;
