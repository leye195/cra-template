import { DefaultTheme } from "styled-components";

export type Theme = {
  textColor: "#000000";
  bgColor: "#ffffff";
  rem: (num: number) => string;
} & DefaultTheme;

const rem = (num: number): string => `${(num / 16).toFixed(4)}rem`;

const theme: Theme = {
  textColor: "#000000",
  bgColor: "#ffffff",
  rem,
};

export default theme;
