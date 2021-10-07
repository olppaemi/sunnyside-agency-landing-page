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
  width: ${rem(297)};
  height: ${rem(206)};
`;

export const Logo = styled.div`
  text-align: center;

  svg {
    /* transform: scale(${170 / 124}); */
    path {
      fill: ${({ theme }) => theme.palette.dark_cyan};
    }
  }
`;
