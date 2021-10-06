import Link from "next/link";
import { useEffect, useState } from "react";
import { Hamburger } from "../icons/Hamburger";
import { Logo } from "../icons/Logo";
import * as S from "./styles";

export const Header = () => {
  const [hamburger, setHamburger] = useState(false);

  const showHamburger = () => {
    if (window.innerWidth <= 768) {
      setHamburger(true);
    } else {
      setHamburger(false);
    }
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
        <S.Nav>
          <S.NavLinks>
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
          </S.NavLinks>
        </S.Nav>
        {hamburger && <Hamburger />}
      </S.NavBar>
    </S.Header>
  );
};
