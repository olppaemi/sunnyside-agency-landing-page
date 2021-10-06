import styled, { css } from "styled-components";
import { media } from "../../styles/media";
import { rem } from "../../styles/utils";

export const Header = styled.header`
  width: 100%;
  height: ${rem(800)};
  background: center / cover no-repeat url(/images/desktop/image-header.jpg);
  padding-top: ${rem(34)};

  ${media.lessThan("md")`
  padding-top: ${rem(32)};
  `}
`;

export const NavBar = styled.div`
  width: 100%;
  height: ${rem(56)};
  padding-left: ${rem(40)};
  padding-right: ${rem(48)};
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.lessThan("md")`
    padding: 0 6%;
  `}
`;

export const Nav = styled.nav`
  height: 100%;
  position: relative;

  ${media.lessThan("md")`
    position: absolute;
    top: 0; 
    left: 6%;
    right: 6%;
    transform: translateY(${rem(106)});
    width: 87.73%;
    height: ${rem(329)};
    background-color: ${({ theme }) => theme.palette.white};

    &::before {
      display: block;
      content: "";      
      border: ${rem(24)} solid;
      border-color: transparent white transparent transparent;
      position: absolute;
      top: -${rem(24)};
      right: 0;      
    }
  `}
`;

export const NavLinks = styled.ul`
  height: 100%;
  display: flex;

  & > * + * {
    margin-left: ${rem(47)};
  }

  ${media.lessThan("md")`
    padding: ${rem(39)} 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    & > * + * {
      margin-left: 0;
    }
  `}
`;

export const NavItem = styled.li<{ $accent?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-size: ${rem(18)};
    color: ${({ theme }) => theme.palette.white};
    ${media.lessThan("md")`
      font-size: ${rem(20)};
      color: ${({ theme }) => theme.palette.dark_grayish_blue};
    `}
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

      ${media.lessThan("md")`
        width: ${rem(140)};
        height: ${rem(56)};
        background-color: ${theme.palette.yellow};
      `}
    `}
`;
