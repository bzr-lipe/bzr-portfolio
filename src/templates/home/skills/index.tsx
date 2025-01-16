import { FC } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";

const Skills: FC = () => {
  const { cardRef, sectionRef, listRef } = useAnimation();

  return (
    <S.Skills id="skills" ref={sectionRef} >
      <S.Content ref={cardRef}>
        <S.SkillsLists ref={listRef}>
          {C.skills.map((item, index) => {
            const words: string[] = item.title.split(' ');
            const firstColumnLength = Math.round(item.items.length / 2);
  
            return (
              <S.SkillCategory key={index} className={'categoryContainer'} $multipleWords={words.length > 1}>
                <S.ListTitle className={'titleContainer'} $multipleWords={words.length > 1}>
                  {words.map((word, index) => (
                    <S.TitleWord key={index}>{word}</S.TitleWord>
                  ))}
                </S.ListTitle>
                <S.List className={'listContainer'}>
                  <S.ListColumn>
                    {item.items.slice(0, firstColumnLength).map((skill, index) => (
                      <S.ListItemWrapper key={index}>
                        <S.ListItem key={index}>{skill}</S.ListItem>
                      </S.ListItemWrapper>
                    ))}
                  </S.ListColumn>
                  <S.ListColumn>
                    {item.items.slice(firstColumnLength).map((skill, index) => (
                      <S.ListItemWrapper key={index}>
                        <S.ListItem key={index}>{skill}</S.ListItem>
                      </S.ListItemWrapper>
                    ))}
                  </S.ListColumn>
                </S.List>
                <S.BorderCover className={'border'} />
              </S.SkillCategory>
            )
          })}
        </S.SkillsLists>
      </S.Content>
    </S.Skills>
  );
};

export default Skills;
