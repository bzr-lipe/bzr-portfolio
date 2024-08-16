import { FC } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";
import ToggleButton from "./toggle-button";
import NavbarMobile from "./mobile";

const Navbar: FC = () => {
  const { navRef } = useAnimation();

  return (
    <>
      <S.Navbar ref={navRef}>
        <S.LinksContainer>
          {C.links.map((item, index) => (
            <S.Link key={index}>{item.title}</S.Link>
          ))}
        </S.LinksContainer>
        <ToggleButton />
      </S.Navbar>
      <NavbarMobile />
    </>
  );

};

export default Navbar;
