import styled from "styled-components";

export const ToggleButton = styled.button<{ $isLight: boolean }>`
  background-color: ${({ theme }) => theme.navBackgroundColor};
  border-radius: 5rem;
  width: 5.4rem;
  height: 3.5rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  border: 0.3rem solid ${({ theme }) => theme.navTextColor};
  box-shadow: 0 0.2rem 2rem -0.5rem ${({ theme }) => theme.navBackgroundColor};
  z-index: 1;

  @media (max-width: 414px) {
    border-width: 0.2rem;
    width: 5.3rem;
    height: 3.4rem;
    border-color: ${({ theme }) => theme.textColor};
    box-shadow: 0 0 1rem ${({ $isLight }) => $isLight ? '-0.1rem' : '-0.2rem'} ${({ theme, $isLight }) => $isLight ? theme.navBorderColor : theme.navBackgroundColor};
  }
`;

export const Switch = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.navTextColor};
  border-radius: 50%;

  @media (max-width: 414px) {
    background-color: ${({ theme }) => theme.textColor};
  }
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
`;

export const MoonIcon = styled.img`
  position: absolute;
  width: 90%;
  left: 5%;
  top: 5%;

  @media (max-width: 414px) {
    content: url('svgs/moon-dark.svg');
    width: 85%;
    left: 7.5%;
    top: 7.5%;;
  }
`;

export const SunIcon = styled.img`
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  opacity: 0;
  visibility: hidden;

  @media (max-width: 414px) {
    content: url('svgs/sun-light.svg');
  }
`;
