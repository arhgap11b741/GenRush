import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mediaQuery: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
    colors: {
      gray: {
        900: string;
        800: string;
        700: string;
        600: string;
        500: string;
        400: string;
        200: string;
        100: string;
        50: string;
      };
      blue: {
        primary: string;
        hover: string;
        focus: string;
      };
      red: string;
      white: string;
      black: string;
    };
  }
}
