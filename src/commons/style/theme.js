import { ThemeProvider } from "styled-components";

const colors = {
  primary: "#172B4D",
  secondary: "#F1F2F4",
  white: "#FFFFFF",
  black: "#000000",
  neutral: "#091e420f",
  blue: "#4361EE",
  semiTransparent: "rgba(0, 0, 0, 0.5)",
  glass: "#ffffff3d",
  danger: "#AE2E24",
};

const breakpoints = {
  mobile: "480px",
  tablet: "768px",
  desktop: "1025px",
};

const fonts = {
  primary: ["sans-serif,", " Roboto"],
  code: [
    "source-code-pro,",
    " Menlo,",
    " Monaco,",
    " Consolas,",
    " Courier New,",
    " monospace",
  ],
};

const fontSizes = {
  xsmall: "0.25em",
  smaller: "0.5em",
  mdsmall: "0.75em",
  lgsmall: "0.85em",
  small: "1em",
  xmedium: "1.15em",
  smmedium: "1.25em",
  mdmedium: "1.5em",
  medium: "2em",
  large: "3em",
};

const sizes = {
  xsmall: "0.25em",
  smaller: "0.5em",
  mdsmall: "0.75em",
  small: "1em",
  xmedium: "1.15em",
  smmedium: "1.25em",
  mdmedium: "1.5em",
  medium: "2em",
  large: "3em",
};

const fixedSizes = {
  button: "80px",
  tag: "100px",
  card: "272px",
};

const theme = {
  colors,
  breakpoints,
  fonts,
  fontSizes,
  sizes,
  fixedSizes,
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
