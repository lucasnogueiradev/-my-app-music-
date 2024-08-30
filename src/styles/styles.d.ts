// src/styles/theme.d.ts
import "styled-components/native";

declare module "styled-components/native" {
  export interface DefaultTheme {
    title?: string;
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      font: string;
      white: string;
      black: string;
      gray: string;
      success: string;
      info: string;
      warning: string;
      button: string;
    };
    fonts?: {
      regular: string;
      bold: string;
      heading: string;
    };
    fontSizes?: {
      small: number;
      medium: number;
      large: number;
      extraLarge: number;
    };
  }
}
