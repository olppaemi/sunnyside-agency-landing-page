import Link from "next/link";
import { Facebook } from "../icons/Facebook";
import { Instagram } from "../icons/Instagram";
import { Logo } from "../icons/Logo";
import { Pinterest } from "../icons/Pinterest";
import { Twitter } from "../icons/Twitter";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Footer>
      <S.Container>
        <S.Logo>
          <Logo />
        </S.Logo>
        <S.Nav>
          <S.NavList>
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
          </S.NavList>
        </S.Nav>
        <S.SNSContainer>
          <S.SNSGroup>
            <Facebook />
            <Instagram />
            <Twitter />
            <Pinterest />
          </S.SNSGroup>
        </S.SNSContainer>
      </S.Container>
    </S.Footer>
  );
};
