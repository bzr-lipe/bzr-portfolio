'use client'
import { useRef, useEffect, useState } from "react";
import gsap from "gsap";

const SkillsAnimation = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const selectedImageTestRef = useRef<HTMLImageElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleProjectClick = (index: number) => {
    const project = projectRefs.current[index];
    const modal = project?.querySelector('.modal-container')

    if (!isModalOpen) {
      setIsModalOpen(true);
      gsap.to(modal, {autoAlpha: 1, duration: 0.3});
    }
  };


  const closeModal = (index: number) => {
    const project = projectRefs.current[index];
    const modal = project?.querySelector('.modal-container')
    
    setIsModalOpen(false);
    gsap.to(modal, {autoAlpha: 0, duration: 0.3});
  };

  return {
    projectsRef,
    titleRef,
    closeModal,
    projectRefs,
    handleProjectClick,
    selectedImageTestRef
  };
};

export default SkillsAnimation;
