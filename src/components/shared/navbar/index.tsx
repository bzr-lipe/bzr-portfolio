import { FC } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";
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
      </S.Navbar>
      <NavbarMobile />
    </>
  );

};

export default Navbar;
