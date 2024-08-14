import { FC } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";

const Skills: FC = () => {
  const { titleRef, listRef, subtitleRef } = useAnimation();

  return (
    <S.Skills id="skills">
      <S.Title>{C.title}</S.Title>
      <S.Content>
        <S.SkillsLists>
          {C.skills.map((item, index) => (
            <S.SkillCategory key={index}>
              <S.ListTitle ref={titleRef}>{item.title}</S.ListTitle>
              <S.List ref={listRef}>
              {item.items.map((skill, index) => (
                <S.ListItem key={index}>{skill}</S.ListItem>
              ))}
              </S.List>
            </S.SkillCategory>
          ))}
        </S.SkillsLists>
      </S.Content>
    </S.Skills>
  );
};

export default Skills;
