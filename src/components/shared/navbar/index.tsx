import { FC, useRef } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";
import NavbarMobile from "./mobile";
import gsap from "gsap";


const NavbarIcon: FC<{item: {iconSrc: string, alt: string, href: string}}> = ({item}) => {
  const subtitleRef = useRef(null);
  const onEnter = () => {
    gsap.to(subtitleRef.current, {autoAlpha: 1})
    gsap.to(subtitleRef.current, {yPercent: 200})
  };

  const onLeave = () => {
    gsap.to(subtitleRef.current, {autoAlpha: 0})
    gsap.to(subtitleRef.current, {yPercent: 0})
  };

  const navbarTeste = gsap.timeline({paused: true});

  if(subtitleRef.current){
    navbarTeste.to(subtitleRef.current, {y: 100});
  }

  return (
    <S.Anchor onMouseEnter={() => onEnter()} onMouseLeave={() => onLeave()}>
      <S.Icon src={item.iconSrc} />
      <S.Subtitle ref={subtitleRef}>{item.alt}</S.Subtitle>
    </S.Anchor>
  )
}

const Navbar: FC = () => {
  const { navRef } = useAnimation();

  return (
    <>
    <S.NavbarContainer>
        <S.Navbar ref={navRef}>
          <S.IconsContainer>
            {C.anchors.map((item, index) => (
              <NavbarIcon item={item} key={index}/>
            ))}
          </S.IconsContainer>
        </S.Navbar>
      </S.NavbarContainer>
    </>
  );

};

export default Navbar;
