import { FC, useEffect, useState } from "react";
import C from "./const";
import * as S from "./styles";
import useAnimation from "./animation";

const Intro: FC = () => {
  const [time, setTime] = useState<string>(() =>
    new Date().toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
  )
  const [date, setDate] = useState<string>('');
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const { sectionRef, containerRef, windowRef, handleCloseWindow, handleOpenWindow} = useAnimation();

  const SubMenuItem = ({
    item,
    index,
    isOpen,
    onClick,
  }: {
    item: { title: string; windows?: Boolean; links?: Boolean, items: { title: string; href: string }[] };
    index: number;
    isOpen: boolean;
    onClick: (index: number) => void;
  }) => {
    return (
      <S.MenuItem $isOpen={isOpen} onClick={() => onClick(index)}>
        {item.title}
        <S.SubMenu $isOpen={isOpen}>
          {item.items.map((subItem, idx) => {
            return (
              item.windows ? (
                <S.SubMenuOption key={idx} onClick={() => handleOpenWindow(idx)}>{subItem.title}</S.SubMenuOption>
              ) : (
                <S.SubMenuOptionAnchor key={idx} href={subItem.href} target={item.links ? '_blank' : '_self'}>{subItem.title}</S.SubMenuOptionAnchor>
              )
            )
          })}
        </S.SubMenu>
      </S.MenuItem>
    );
  };


  useEffect(() => {
    const now = new Date();

    const formattedDate = new Intl.DateTimeFormat('en-GB', {
      weekday: 'short',
      day: '2-digit',
      month: 'short',
    }).format(now);

    setDate(formattedDate.replace(',', ''))

    const interval = setInterval(() => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval); // Clean up
  }, []);

  return (
    <S.Intro id="intro" ref={sectionRef}>
      <S.TopBar>
        <S.LeftColumn>
          <S.Logo src={C.logoSrc} />
          <S.MenuList>
            <S.TitleBar>{C.titleBar}</S.TitleBar>
            {C.list.map((item, index) => (
                <SubMenuItem
                key={index}
                item={{ title: item.title, items: item.options, windows: item.windows, links: item.links }}
                index={index}
                isOpen={openSubMenuIndex === index}
                onClick={(i) =>
                  setOpenSubMenuIndex((prev) => (prev === i ? null : i))
                }
              />
            ))}
          </S.MenuList>
        </S.LeftColumn>
        <S.RightColumn>
          <S.Date>{date}</S.Date>
          <S.Hours>{time}</S.Hours>
        </S.RightColumn>
      </S.TopBar>
      <S.ContentContainer ref={containerRef}>
        {C.windows.map((item, index) => (
          <S.TextWindow ref={windowRef} key={index}>
            <S.WindowTop>
              <S.CloseBtn onClick={() => handleCloseWindow(index)} />
              <S.WindowTitle>{item.title}<span> - (Read Only)</span></S.WindowTitle>
            </S.WindowTop>
            <S.WindowContent>
             {item.content}
            </S.WindowContent>
          </S.TextWindow>
        ))}
      </S.ContentContainer>
    </S.Intro>
  );
};

export default Intro;
