import Link from "next/link";
import { useEffect, useState } from "react";
import { Center } from "../Center";
import ArrowDown from "../icons/ArrowDown";
import { Hamburger } from "../icons/Hamburger";
import { Logo } from "../icons/Logo";
import * as S from "./styles";

export const Header = () => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const showHamburger = () => {
    if (window.innerWidth <= 768) {
      setMenu(true);
    } else {
      setMenu(false);
    }
  };

  const toggleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    showHamburger();
    window.addEventListener("resize", showHamburger);
  }, []);

  return (
    <S.Header>
      <Center>
        <S.NavBar>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>

          <S.Nav $showMenu={showMenu}>
            <S.NavMenu>
              <S.NavItem>
                <Link href="/">
                  <a onClick={hideMenu}>About</a>
                </Link>
              </S.NavItem>
              <S.NavItem>
                <Link href="/">
                  <a onClick={hideMenu}>Services</a>
                </Link>
              </S.NavItem>
              <S.NavItem>
                <Link href="/">
                  <a onClick={hideMenu}>Projects</a>
                </Link>
              </S.NavItem>
              <S.NavItem $accent>
                <Link href="/">
                  <a onClick={hideMenu}>Contact</a>
                </Link>
              </S.NavItem>
            </S.NavMenu>
          </S.Nav>

          {menu && (
            <S.HamburgerIcon onClick={toggleShowMenu}>
              <Hamburger />
            </S.HamburgerIcon>
          )}
        </S.NavBar>

        <S.Title>WE ARE CREATIVES</S.Title>
        <S.ArrowIcon>
          <ArrowDown />
        </S.ArrowIcon>
      </Center>
    </S.Header>
  );
};
