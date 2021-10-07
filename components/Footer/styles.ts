import styled from "styled-components";
import { rem } from "../../styles/utils";

export const Footer = styled.footer`
  width: 100%;
  height: ${rem(350)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: hsl(168, 44%, 70%);
`;

export const Container = styled.div`
  width: ${rem(300)};
  height: ${rem(206)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Logo = styled.div`
  text-align: center;

  svg {
    path {
      fill: ${({ theme }) => theme.palette.dark_cyan};
    }
  }
`;

export const Nav = styled.nav`
  width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.li`
  a {
    font-size: ${rem(18)};
    color: ${({ theme }) => theme.palette.dark_moderate_cyan};

    &:hover {
      color: ${({ theme }) => theme.palette.white};
    }
  }
`;

export const SNSContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SNSGroup = styled.ul`
  & > * + * {
    margin-left: ${rem(28)};
  }

  svg {
    cursor: pointer;

    &:hover {
      path {
        fill: ${({ theme }) => theme.palette.white};
      }
    }
  }
`;
