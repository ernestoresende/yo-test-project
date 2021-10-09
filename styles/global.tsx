import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import * as Theme from '@styles/theme';

const StyledGlobalStyles = createGlobalStyle`
  /* CSS Reset */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    font-family: Barlow, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif;
    border: 0;
    font-size: 100%;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  button {
    background: none;
    border: 0;
    padding: 0;
  }
  img {
    display: block;
    height: auto;
    max-width: 100%;
  }
  svg {
    fill: currentColor;
  }
  .small,
  small {
    font-size: .8em;
  }
  b, strong {
    font-weight: 600;
  }
  i, em {
    font-style: italic;
  }
  input[type="search"] {
    -webkit-appearance: textfield;
  }
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  /* Theme tokens injected as globally available CSS properties */
  html {
    --colors-orange1: ${(props) => props.theme.colors.orange1};
    --colors-orange2: ${(props) => props.theme.colors.orange2};
    --colors-orange3: ${(props) => props.theme.colors.orange3};
    --colors-orange4: ${(props) => props.theme.colors.orange4};
    --colors-orange5: ${(props) => props.theme.colors.orange5};

    --colors-teal1: ${(props) => props.theme.colors.teal1};
    --colors-teal2: ${(props) => props.theme.colors.teal2};
    --colors-teal3: ${(props) => props.theme.colors.teal3};
    --colors-teal4: ${(props) => props.theme.colors.teal4};
    --colors-teal5: ${(props) => props.theme.colors.teal5};

    --colors-blue1: ${(props) => props.theme.colors.blue1};
    --colors-blue2: ${(props) => props.theme.colors.blue2};
    --colors-blue3: ${(props) => props.theme.colors.blue3};
    --colors-blue4: ${(props) => props.theme.colors.blue4};
    --colors-blue5: ${(props) => props.theme.colors.blue5};

    --colors-yellow1: ${(props) => props.theme.colors.yellow1};
    --colors-yellow2: ${(props) => props.theme.colors.yellow2};
    --colors-yellow3: ${(props) => props.theme.colors.yellow3};
    --colors-yellow4: ${(props) => props.theme.colors.yellow4};
    --colors-yellow5: ${(props) => props.theme.colors.yellow5};

    --colors-blueGray1: ${(props) => props.theme.colors.blueGray1};
    --colors-blueGray2: ${(props) => props.theme.colors.blueGray2};
    --colors-blueGray3: ${(props) => props.theme.colors.blueGray3};
    --colors-blueGray4: ${(props) => props.theme.colors.blueGray4};
    --colors-blueGray5: ${(props) => props.theme.colors.blueGray5};
    --colors-blueGray6: ${(props) => props.theme.colors.blueGray6};

    --colors-violet1: ${(props) => props.theme.colors.violet1};
    --colors-violet2: ${(props) => props.theme.colors.violet2};
    --colors-violet3: ${(props) => props.theme.colors.violet3};
    --colors-violet4: ${(props) => props.theme.colors.violet4};
    --colors-violet5: ${(props) => props.theme.colors.violet5};
    --colors-violet6: ${(props) => props.theme.colors.violet6};

    --colors-gray1: ${(props) => props.theme.colors.gray1};
    --colors-gray2: ${(props) => props.theme.colors.gray2};
    --colors-gray3: ${(props) => props.theme.colors.gray3};
    --colors-gray4: ${(props) => props.theme.colors.gray4};
    --colors-gray5: ${(props) => props.theme.colors.gray5};
    --colors-gray6: ${(props) => props.theme.colors.gray6};

    --shadow1: ${(props) => props.theme.shadows.shadow1};
    --shadow2: ${(props) => props.theme.shadows.shadow2};
    --shadow3: ${(props) => props.theme.shadows.shadow3};
    --shadow4: ${(props) => props.theme.shadows.shadow4};

    --spacing-nano: 8px;
    --spacing-xxxs: 16px;
    --spacing-xxs: 24px;
    --spacing-xs: 32px;
    --spacing-sm: 40px;
    --spacing-md: 48px;
    --spacing-lg: 56px;
    --spacing-xl: 64px;
    --spacing-xxl: 80px;
    --spacing-xxxl: 120px;
    --spacing-huge: 160px;
    --spacing-giant: 200px;

    --fontSize-xxxs: 12px;
    --fontSize-xxs: 14px;
    --fontSize-xs: 16px;
    --fontSize-sm: 20px;
    --fontSize-md: 24px;
    --fontSize-lg: 32px;
    --fontSize-xl: 40px;
    --fontSize-xxl: 48px;
    --fontSize-xxxl: 64px;
    --fontSize-display: 80px;
    --fontSize-giant: 96px;

    --lineHeight-default: 100%;
    --lineHeight-xs: 115%;
    --lineHeight-sm: 120%;
    --lineHeight-md: 133%;
    --lineHeight-lg: 150%;
    --lineHeight-xl: 170%;
    --lineHeight-xxl: 200%;


    -moz-osx-font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
  }
`;

const GlobalStyle = ({ children }) => {
  const lightTheme = Theme.lightTheme;

  /* In the event of a dark mode theme, we can use `useContext` to keep track of the current theme preference and
  switch the variable that is going to be provided to the `theme` prop on `<ThemeProvider>`. */

  return (
    <ThemeProvider theme={lightTheme}>
      <StyledGlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default GlobalStyle;
