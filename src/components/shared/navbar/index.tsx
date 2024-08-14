import { FC, useEffect, useState } from "react";
import C from "./const";
import * as S from "./styles";
import gsap from "gsap";
import useAnimation from "./animation";
import ScrollToPlugin from 'gsap/dist/ScrollToPlugin';
import { type ScrollButtonProps} from "./props";
import { scrollTo } from "@/utils/scroll-to";


const Navbar: FC = () => {
  const { downTextRef, upTextRef, arrowRef, setSectionTrigger, setIsScrolled, setIsActive, buttonRef } = useAnimation();

  return (
    <S.Navbar>
      <S.LinksContainer>
        {C.links.map((item, index) => (
          <S.Link key={index}>{item.title}</S.Link>
        ))}
      </S.LinksContainer>
    </S.Navbar>
  );
};

export default Navbar;
