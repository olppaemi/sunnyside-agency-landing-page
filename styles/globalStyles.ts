import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import { rem } from "./utils";

const globalStyle = css`
  ${reset}
  *, 
  *::before, 
  *::after {
    box-sizing: border-box;
  }
  body {
    font-family: ${({ theme }) => theme.fonts.basic};
    font-weight: 600;
  }

  a {
    font-size: ${rem(18)};
    text-decoration: none;
    outline: none;
  }

  a:hover,
  a:active {
    text-decoration: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

export default GlobalStyle;
