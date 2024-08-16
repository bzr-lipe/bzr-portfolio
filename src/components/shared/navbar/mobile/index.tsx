import { FC } from "react";
import C from "../const";
import * as S from "./styles";
import useAnimation from "./animation";
import ToggleButton from "../toggle-button";

const NavbarMobile: FC = () => {
  const { navRef, menuMobileRef, toggleMenu, isActive } = useAnimation();

  return (
    <S.NavbarMobile ref={navRef} >
      <S.Content>
        <S.ButtonWrapper onClick={() => toggleMenu()}>
          <S.BurgerMenu $isActive={isActive}/>
        </S.ButtonWrapper>
        <ToggleButton />
          <S.MenuMobile ref={menuMobileRef} $isActive={isActive}>
            <S.MenuList>
              {C.links.map((item, index) => (
                <S.ListItem key={index}>{item.title}</S.ListItem>
              ))}
            </S.MenuList>
            <S.CornerMenu viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_310_2)">
                <path d="M30 0H0V30C0 1.431 13.431 0 30 0Z"></path>
              </g>
              <defs>
                <clipPath id="clip0_310_2">
                  <rect width="30" height="30"></rect>
                </clipPath>
              </defs>
            </S.CornerMenu>
          </S.MenuMobile>
      </S.Content>
    </S.NavbarMobile>
  );
};

export default NavbarMobile;
