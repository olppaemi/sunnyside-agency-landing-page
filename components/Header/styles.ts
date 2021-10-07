import styled, { css } from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Header = styled.header`
  width: 100%;
  height: ${rem(800)};
  background: center / cover no-repeat url(/images/desktop/image-header.jpg);
  padding-top: ${rem(34)};

  .menu {
    cursor: pointer;
  }

  @media (max-width: ${media.md}) {
    height: ${rem(538)};
    padding-top: ${rem(32)};
    background: center / cover no-repeat url(/images/mobile/image-header.jpg);
  }
`;

export const NavBar = styled.div`
  width: 100%;
  height: ${rem(56)};
  padding-left: ${rem(40)};
  padding-right: ${rem(48)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${media.md}) {
    padding: 0 6%;
  }
`;

type NavProps = {
  $showMenu: boolean;
};

export const Nav = styled.nav<NavProps>`
  height: 100%;
  position: relative;

  @media (max-width: ${media.md}) {
    position: absolute;
    top: 0;
    left: 6%;
    right: 6%;
    transform: translateY(${rem(106)});
    width: 87.73%;
    height: ${rem(329)};
    background-color: ${({ theme }) => theme.palette.white};
    opacity: ${({ $showMenu }) => ($showMenu ? "1" : "0")};

    &::before {
      display: block;
      content: "";
      border: ${rem(24)} solid;
      border-color: transparent white transparent transparent;
      position: absolute;
      top: -${rem(24)};
      right: 0;
    }
  }
`;

export const NavMenu = styled.ul`
  height: 100%;
  display: flex;

  & > * + * {
    margin-left: ${rem(47)};
  }

  @media (max-width: ${media.md}) {
    padding: ${rem(39)} 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & > * + * {
      margin-left: 0;
    }
  }
`;

export const NavItem = styled.li<{ $accent?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: ${rem(18)};
    color: ${({ theme }) => theme.palette.white};

    @media (max-width: ${media.md}) {
      font-size: ${rem(20)};
      color: ${({ theme }) => theme.palette.dark_grayish_blue};
    }
  }

  ${({ $accent, theme }) =>
    $accent &&
    css`
      width: ${rem(140)};
      background-color: ${theme.palette.white};
      border-radius: ${rem(28)};
      font-family: ${({ theme }) => theme.fonts.accent};
      font-size: ${rem(15)};
      font-weight: 700;
      text-transform: uppercase;
      a {
        color: ${theme.palette.very_dark_desaturated_blue};
      }

      @media (max-width: ${media.md}) {
        width: ${rem(140)};
        height: ${rem(56)};
        background-color: ${theme.palette.yellow};
      }
    `}
`;
