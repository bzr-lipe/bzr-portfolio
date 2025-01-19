'use client'
import { FC } from "react";
import HeaderDesktop from "./desktop";
import HeaderMobile from "./mobile";

const Header: FC = () => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
  )
};

export default Header;
