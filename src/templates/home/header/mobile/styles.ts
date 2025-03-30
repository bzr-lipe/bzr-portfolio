import _ScrollButton from "@/components/atoms/scroll-button";
import styled from "styled-components";

export const Header = styled.header`
  height: 100vh;
  display: flex;
  align-items: flex-start;
  width: 100%;
  z-index: 1;
  justify-content: flex-start;
  overflow-y: visible;
  position: relative;
  background-color: ${({ theme }) => theme.white};
  display: none;

  @media (max-width: 414px) {
    display: block;
  }
`;

export const CardContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  z-index: 2;
  width: 100%;
  position: relative;
  background-color: ${({ theme }) => theme.blueYankees};
`;

export const TextWrapper = styled.div`
  padding-left: 2.5rem;
`;

export const Title = styled.div`
  display: flex;
  position: relative;
`;

export const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 300;
  padding: 0.5rem 0 0 0.3rem;
  visibility: hidden;
  opacity: 0;
  transform: translateY(1rem);
  color: ${({ theme }) => theme.white};
`;

export const LetterWrapper = styled.div< { className: string }>`
  display: flex;
  align-items: flex-end;
`;

export const Caret = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 0.1rem;
  height: 6rem;
  opacity: 0;
  padding-bottom: 0;
  visibility: hidden;
`;

export const Letter = styled.span`
  font-size: 6rem;
  color: ${({ theme }) => theme.white};
  opacity: 0;
  visibility: hidden;
`;

export const ScrollWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 6rem;
`;

export const ScrollButton = styled(_ScrollButton)``;
