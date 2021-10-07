import Link from "next/link";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    showHamburger();
    window.addEventListener("resize", showHamburger);
  }, []);

  return (
    <S.Header>
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
                <a>About</a>
              </Link>
            </S.NavItem>
            <S.NavItem>
              <Link href="/">
                <a>Services</a>
              </Link>
            </S.NavItem>
            <S.NavItem>
              <Link href="/">
                <a>Projects</a>
              </Link>
            </S.NavItem>
            <S.NavItem $accent>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </S.NavItem>
          </S.NavMenu>
        </S.Nav>

        {menu && <Hamburger onClick={toggleShowMenu} className="menu" />}
      </S.NavBar>
    </S.Header>
  );
};
