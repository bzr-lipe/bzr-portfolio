import styled from "styled-components";
import BurgerIcon from "@/components/atoms/burger-icon";

export const NavbarMobile = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  top: 2rem;
  align-items: center;
  position: fixed;
  cursor: none;
  box-sizing: border-box;
  z-index: 1;
  transform: translateY(-8rem);
  opacity: 0;
  visibility: hidden;

  @media (min-width: 415px) {
    display: none
  }
`;


export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0 3rem 0 4rem;
  align-items: center;
  position: relative;
`;

export const ButtonWrapper = styled.div``;

export const BurgerMenu = styled(BurgerIcon)<{ $isActive: boolean }>`
  width: 3rem;
  z-index: 2;

  div {
    background-color: ${({ theme, $isActive }) => $isActive ? theme.menuMobileActiveTextColor : theme.textColor};
  }
`;

export const MenuMobile = styled.div<{ $isActive: boolean }>`
  --before-clip: circle(0% at 50% 0);

  background-color: ${({ theme }) => theme.menuMobileBackgroundColor};
  position: absolute;
  height: 60vh;
  width: calc(100% - 3rem);
  top: 5rem;
  right: 1.5rem;
  border-radius: 0 4rem 4rem 4rem;
  z-index: 1;
  padding: 2rem 2rem;
  clip-path: circle(0% at 40px -50px);

  &:before {
    content: '';
    transition: background-color 0.3s ease-in, color 0.3s ease-in;
    display: block;
    position: absolute;
    background-color: ${({ theme }) => theme.menuMobileBackgroundColor};
    top: -6.5rem;
    left: 0;
    width: 8rem;
    height: 8rem;
    border-radius: 2rem 2rem 0 0;
    z-index: -1;
    clip-path: var(--before-clip);
  }
`;

export const CornerMenu = styled.svg`
  position: absolute;
  top: -2.8rem;
  left: 7.8rem;
  transform: rotate(-90deg);
  width: 3rem;
  height: 3rem;

  rect, path {
    fill: ${({ theme }) => theme.menuMobileBackgroundColor};
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.a`
  color: ${({ theme }) => theme.menuMobileActiveTextColor};
  font-size: 3.5rem;
  font-weight: 300;
  width: 100%;
  border-bottom: 0.1rem solid ${({ theme }) => theme.menuMobileActiveTextColor};
  padding: 2rem 0;
`;
