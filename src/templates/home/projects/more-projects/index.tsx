import { FC, useRef, useState } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";


const MoreProjects: FC = () => {
  const { selectedProjectsRef, handleProjectClick, closeModal, projectRefs, projectsRef, selectedImageTestRef } = useAnimation();

  return (
    <S.MoreProjects>
      <S.Wrapper>
        <S.Title>{C.title}</S.Title>
        <S.Subtitle>{C.subtitle}</S.Subtitle>
        <S.ProjectsContainer ref={projectsRef}>
          {C.projects.map((item, index) => (
            <S.Project 
              $isOdd={index % 2 === 0} 
              key={index} 
              ref={(el: HTMLDivElement | null) => {
                projectRefs.current[index] = el;
              }}
              onClick={() => handleProjectClick(index)}
              className={'project'}>
              <S.ProjectLogo src={item.logoSrc}/>
              {/* <S.ModalContainer className="modal-container">
                <S.Modal $bgColor={item.modal.bgColor}>
                  <S.ModalWrapper>
                    <S.ModalContent>
                      <S.ModalTitle>{item.modal.title}</S.ModalTitle>
                      <S.ModalSkills>
                        {item.skills.map((item, index) => (
                          <S.ModalSkill key={index}>{item}</S.ModalSkill>
                        ))}
                      </S.ModalSkills>
                      <S.ModalDescription>
                        {item.modal.description}
                      </S.ModalDescription>
                      <S.ModalMainImage src={item.modal.images.desktop} />
                    </S.ModalContent>
                    <S.ResponsiveMobileImage src={item.modal.images.mobileResponsive} />
                    <S.ModalMobileImage src={item.modal.images.mobile} />
                    <S.ModalCloseContainer>
                      <S.CornerTopLeft>
                        <svg viewBox="0 0 64 64" fill="#FFF" xmlns="http://www.w3.org/2000/svg" width="100"><path d="M64 62.0606C29.7244 62.0606 1.93939 34.2751 1.93939 0H0V64H64V62.0606Z" fill="#FFF"></path></svg>
                      </S.CornerTopLeft>
                      <S.CornerBottomLeft>
                        <svg viewBox="0 0 64 64" fill="#FFF" xmlns="http://www.w3.org/2000/svg" width="100"><path d="M64 62.0606C29.7244 62.0606 1.93939 34.2751 1.93939 0H0V64H64V62.0606Z" fill={item.modal.bgColor}></path></svg>
                      </S.CornerBottomLeft>
                      <S.CornerRight>
                        <svg viewBox="0 0 64 64" fill="#FFF" xmlns="http://www.w3.org/2000/svg" width="100"><path d="M64 62.0606C29.7244 62.0606 1.93939 34.2751 1.93939 0H0V64H64V62.0606Z" fill="#FFF"></path></svg>
                      </S.CornerRight>
                      <S.ModalCloseButton 
                        $bgColor={item.modal.bgColor}
                        onClick={() => closeModal(index)}
                      />
                    </S.ModalCloseContainer>
                  </S.ModalWrapper>
                </S.Modal>
              </S.ModalContainer> */}
              <S.ProjectHover>
                <S.HoverTitle>{item.title}</S.HoverTitle>
                {item.skills.map((skill, index) => (
                  <S.HoverText key={index}>{skill}</S.HoverText>
                ))}
              </S.ProjectHover>
            </S.Project>
          ))}
        </S.ProjectsContainer>
      </S.Wrapper>
    </S.MoreProjects>
  );
};

export default MoreProjects;
