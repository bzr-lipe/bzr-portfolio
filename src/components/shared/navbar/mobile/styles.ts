import styled from "styled-components";

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
  overflow: visible;

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
  overflow-y: visible;
`;

export const ButtonWrapper = styled.div`
  position: relative;
  overflow-y: visible;
`;

export const BurgerIcon = styled.button`
  display: flex;
  width: 100%;
  height: fit-content;
  align-items: center;
  position: relative;
  flex-direction: column;
  justify-content: center;
  z-index: 1;
  gap: 0.7rem;
  width: 3rem;
  z-index: 2;

`;

export const Row = styled.div<{ $isActive: boolean }>`
  width: 100%;
  height: 0.3rem;
  border-radius: 8rem;
  background-color: ${({ theme, $isActive }) => $isActive ? theme.menuMobileActiveTextColor : theme.textColor};`
  ;


export const MenuMobile = styled.div`
  position: absolute;
  height: 60vh;
  width: calc(100% - 3rem);
  top: 5rem;
  right: 1.5rem;
  border-radius: 0 4rem 4rem 4rem;
  z-index: 1;
  padding: 2rem 2rem;
  overflow-y: visible;
`;

export const MenuBackground = styled.div`
  background-color: ${({ theme }) => theme.menuMobileBackgroundColor};
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  border-radius: 0 4rem 4rem 4rem;
  z-index: -1;
  /* clip-path: circle(100% at 40px -50px);; */

  clip-path: circle(0% at 40px -50px);;
  /* clip-path: circle(150% at 40px -50px); */
`;

export const ButtonBackground = styled.div`
  position: absolute;
  top: -6rem;
  left: 0;
  width: 8rem;
  height: 6rem;
  border-radius: 2rem 2rem 0 0;
  background-color: ${({ theme }) => theme.menuMobileBackgroundColor};
  z-index: 2;
  clip-path: circle(0% at 50% 0);
  clip-rule: evenodd;
  /* clip-path: circle(100% at 50% 0); */
`;


export const CornerMenu = styled.svg`
  position: absolute;
  bottom: 0;
  right: -2.9rem;
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
  z-index: 2;
`;

export const ListItem = styled.a`
  color: ${({ theme }) => theme.menuMobileActiveTextColor};
  font-size: 3.5rem;
  font-weight: 300;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  border-bottom: 0.1rem solid ${({ theme }) => theme.menuMobileActiveTextColor};
  padding: 2rem 0;
`;
