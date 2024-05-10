import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${({ theme }) => theme.fonts.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
code {
  font-family: ${({ theme }) => theme.fonts.code};
}
body {
  background-image: url(https://d2k1ftgv7pobq7.cloudfront.net/images/backgrounds/gradients/crystal.svg);
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
}

html, body {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#root {
  height: 100%;
}

`;
export default GlobalStyle;
