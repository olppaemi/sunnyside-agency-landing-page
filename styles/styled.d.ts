import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fonts: {
      basic: string;
      accent: string;
    };
    palette: {
      red: string;
      yellow: string;
      dark_cyan: string;
      dark_blue: string;
      dark_moderate_cyan: string;
      very_dark_desaturated_blue: string;
      very_dark_grayish_blue: string;
      dark_grayish_blue: string;
      grayish_blue: string;
      white: string;
    };
  }
}
