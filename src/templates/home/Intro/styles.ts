import styled from "styled-components";

export const Intro = styled.section`
  height: 100vh;
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  cursor: auto;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.blueViolet};

  @media (max-width: 414px) {
    height: fit-content;
    padding: 4rem 0;
  }
`;

export const TopBar = styled.div`
  height: fit-content;
  width: 100%;
  top: 0;
  left: 0;
  position: absolute;
  padding: 0 2.5rem;
  height: 6rem;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.17);
`;

export const LeftColumn = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  height: fit-content;
  width: 2rem;
  margin-right: 3rem;
  filter: drop-shadow(0 0.2rem 0.5rem ${({ theme }) => theme.blackSemiTransparent})
`;

export const TitleBar = styled.p`
  font-family: var(--sf-pro);
  font-weight: 600;
  margin-right: 2rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.white};
  text-shadow: 0 0.2rem 0.5rem ${({ theme }) => theme.blackSemiTransparent};
`;

export const MenuList = styled.div`
  display: flex;
  align-items: center;
  gap: -1rem;
`;

export const MenuItem = styled.div<{ $isOpen: boolean }>`
  font-family: var(--sf-pro);
  font-weight: 400;
  position: relative;
  margin: 0 -0.5rem;
  font-size: 2rem;
  white-space: nowrap;
  cursor: pointer;
  color: ${({ theme }) => theme.white};
  background-color: ${({ $isOpen, theme }) => $isOpen ? theme.whiteSemiTransparent : 'transparent'};
  padding: 0.7rem 2rem;
  border-radius: 0.5rem;
  text-shadow: 0 0.2rem 0.5rem ${({ theme }) => theme.blackSemiTransparent};
`;

export const SubMenu = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  gap: 0.1rem;
  border-radius: 0.5rem;
  cursor: auto;
  left: -1rem;
  border: 0.1rem solid ${({ theme }) => theme.grayLight};
  background-color: ${({ theme }) => theme.whiteSemiHalf};
  box-shadow: 0 0.2rem 0.5rem ${({ theme }) => theme.blackSemiTransparent};
  opacity: ${({ $isOpen }) => $isOpen ? 1 : 0};
  visibility: ${({ $isOpen }) => $isOpen ? 'visible' : 'hidden'};
  backdrop-filter: blur(1rem);
  padding: 1rem;
`;

export const SubMenuOption = styled.div`
  border-radius: 0.5rem;
  font-weight: 400;
  cursor: pointer;
  color: ${({ theme }) => theme.black};
  padding: 0.5rem 8rem 0.5rem 2rem;
  font-size: 1.7rem;
  text-shadow: none;

  &:hover {
    background-color: ${({ theme }) => theme.indigoRainbow};
    color: ${({ theme }) => theme.white};
  }
`;

export const SubMenuOptionAnchor = styled.a`
  border-radius: 0.5rem;
  font-weight: 400;
  cursor: pointer;
  color: ${({ theme }) => theme.black};
  padding: 0.5rem 8rem 0.5rem 2rem;
  font-size: 1.7rem;
  text-shadow: none;

  &:hover {
    background-color: ${({ theme }) => theme.indigoRainbow};
    color: ${({ theme }) => theme.white};
  }
`;
export const RightColumn = styled.div`
  display: flex;
  gap: 2rem;
`;

export const Date = styled.p`
  font-family: var(--sf-pro);
  font-weight: 400;
  font-size: 2rem;
  color: ${({ theme }) => theme.white};
  text-shadow: 0 0.2rem 0.5rem ${({ theme }) => theme.blackSemiTransparent};
`;

export const Hours = styled.p`
  font-family: var(--sf-pro);
  font-weight: 400;
  font-size: 2rem;
  color: ${({ theme }) => theme.white};
  text-shadow: 0 0.2rem 0.5rem ${({ theme }) => theme.blackSemiTransparent};
`;

export const ContentContainer = styled.div`
  height: calc(100% - 6rem);
  margin-top: 6rem;
  width: 100%;
`;

export const TextWindow = styled.div`
  width: 50rem;
  height: 30rem;
  border-radius: 1rem;
  overflow: hidden;
  background-color: ${({ theme }) => theme.white};
  box-shadow: 0 0.1rem 1rem ${({ theme }) => theme.blackHalf};
`;

export const WindowTop = styled.div`
  display: flex;
  height: 4rem;
  justify-content: center;
  align-items: center;
  cursor: grab;
  position: relative;
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.blackHalf};
  box-shadow: 0 0.1rem 0.5rem ${({ theme }) => theme.blackSemiTransparent};
  background-color: ${({ theme }) => theme.whiteAntiFlash};
`;

export const WindowTitle = styled.p`
  font-family: var(--sf-pro);
  font-size: 1.7rem;
  font-weight: 500;

  span {
    font-family: var(--sf-pro);
    font-weight: 300;
  }
`;

export const CloseBtn = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1rem;
  top: 1.2rem;
  cursor: pointer;
  left: 1.5rem;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.sunsetOrange};
 
  &::before,
  &::after {
    content: '';
    width: 0.1rem;
    position: absolute;
    height: 0.8rem;
    opacity: 0;
    background-color: ${({ theme }) => theme.mordantRed};
    transition: opacity 0.1s ease-in;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  &:hover {
    &::before,
    &::after {
      opacity: 1;
    }
  }
`;

export const WindowContent = styled.div`
  padding: 1rem 2rem;
  font-family: var(--sf-pro);
  font-size: 2.3rem;
  font-weight: 400;

  span {
    font-family: var(--sf-pro);
    font-weight: 300;
  }
`;
