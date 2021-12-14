import { createGlobalStyle } from "styled-components";

// Add this to the root section to draw borders around all elements
// * {border: 1px solid red};

const GlobalStyle = createGlobalStyle`

  /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS */
  html {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Only using * omits pseudo elements so specifically include these  */
  * , *:before, *:after {
    box-sizing: inherit;
        margin: 0;
    padding: 0;
  }

  html, body {
    font-family: 'Raleway'
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway'
  }

`;

export default GlobalStyle;
