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

  @media (max-width: 414px) {
    height: 95vh;
  }
`;

export const BackgroundMarquee = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 1;
  flex-direction: column;
  justify-content: space-between;
  height: 130%;
`;

export const MarqueeRow = styled.div<{ $isOdd: boolean }>`
  display: flex;
  gap: 6rem;
  width: fit-content;
  transform: ${({ $isOdd }) => $isOdd  ? 'translateX(0)' : 'translateX(-20%)'};
`;

export const MarqueeText = styled.p`
  font-size: 12rem;
  font-weight: 500;
  white-space: nowrap;
  color: ${({ theme }) => theme.indigoRainbow};

  @media (max-width: 414px) {
    font-size: 7rem;
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

  @media (max-width: 414px) {
    height: 95vh;
  }

  &:hover {

  }
`;

export const TextWrapper = styled.div`
  padding-left: 6rem;

  @media (max-width: 414px) {
    padding-left: 3.8rem;
  }
`;

export const Title = styled.div`
  display: flex;
  position: relative;
`;

export const Subtitle = styled.h2`
  font-size: 4rem;
  font-weight: 300;
  padding: 1rem 0 0 0.3rem;
  visibility: hidden;
  opacity: 0;
  transform: translateY(1rem);
  color: ${({ theme }) => theme.white};

  @media (max-width: 414px) {
    font-size: 1.8rem;
  }
`;

export const LetterWrapper = styled.div< { className: string }>`
  display: flex;
  align-items: flex-end;
`;

export const Caret = styled.div`
  background-color: ${({ theme }) => theme.white};
  width: 0.3rem;
  height: 90%;
  opacity: 0;
  padding-bottom: 1rem;
  visibility: hidden;

  @media (max-width: 414px) {
    width: 0.2rem;
  }
`;

export const Letter = styled.span`
  font-size: 12rem;
  color: ${({ theme }) => theme.white};
  opacity: 0;
  visibility: hidden;

  @media (max-width: 414px) {
    font-size: 5rem;
  }
`;

export const ScrollWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: 8rem;

  @media (max-width: 414px) {
    bottom: 0rem;
  }
`;

export const ScrollButton = styled(_ScrollButton)``;
