import styled from "styled-components";

export const AboutMe = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.violetTropical};
  justify-content: center;

  &.fullscreen {
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.white};
  width: fit-content;
  position: relative;
  font-size: 10rem;
  justify-content: center;
  padding: 3rem;
  font-weight: 300;

`;

export const CardPicture = styled.img`
  width: 34rem;
  border-radius: 1rem;

  @media (max-width: 414px) {
    padding: 0;
  }
`;

export const CardTitle = styled.span`
  font-size: 3.8rem;
  font-weight: 600s;
`;