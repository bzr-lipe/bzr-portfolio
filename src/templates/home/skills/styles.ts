import ScrollDownButton from "@/components/atoms/scroll-button";
import styled from "styled-components";

export const Skills = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
`;

export const Title = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  font-size: 10rem;
  justify-content: right;
  padding: 3rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  font-size: 10rem;
  justify-content: right;
  padding: 3rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;

export const Subtitle = styled.h2`
  font-size: 4rem;
  font-weight: 300;
  margin-top: 1rem;
  visibility: hidden;
  opacity: 0;
  transform: translateY(1rem);
  color: ${({ theme }) => theme.textColor};
`;

export const SkillsLists = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  font-size: 10rem;
  justify-content: right;
  padding: 3rem;
  font-weight: 300;
  color: ${({ theme }) => theme.textColor};
`;

export const SkillCategory = styled.div`
`;

export const ListTitle = styled.p`
  font-size: 6rem;
`;

export const List = styled.ul`
`;

export const ListItem = styled.li`
  visibility: hidden;
  opacity: 0;
  font-size: 5rem;
  transform: translateY(1rem);
`;

export const Cursor = styled.div`
  background-color: ${({ theme }) => theme.textColor};
  width: 0.3rem;
  opacity: 0;
  visibility: 0;
`;


export const ScrollWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 5rem;
`;

export const ScrollDown = styled(ScrollDownButton)`

`;
