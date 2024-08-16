import _ScrollButton from "@/components/atoms/scroll-button";
import styled from "styled-components";

export const Header = styled.header`
  height: 100vh;
  display: flex;
  align-items: center;
  width: 100%;
  position: relative;

  @media (max-width: 414px) {
    height: 95vh;
  }
`;

export const TextWrapper = styled.div`
  padding-left: 6rem;

  @media (max-width: 414px) {
    padding-left: 2rem;
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
  color: ${({ theme }) => theme.textColor};

  @media (max-width: 414px) {
    font-size: 1.8rem;
  }
`;

export const LetterWrapper = styled.div< { className: string }>`
  display: flex;
  align-items: flex-end;
`;

export const Caret = styled.div`
  background-color: ${({ theme }) => theme.textColor};
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
  color: ${({ theme }) => theme.textColor};
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
