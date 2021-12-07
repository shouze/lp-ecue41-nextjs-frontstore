import { createGlobalStyle } from "styled-components";

// Add this to the root section to draw borders around all elements
// * {border: 1px solid red};

const GlobalStyle = createGlobalStyle`

  /* Using this inherit reset method means you can use content-box or padding-box without a universal selector overriding your CSS */
  html {
    box-sizing: border-box;
  }

  /* Only using * omits pseudo elements so specifically include these  */
  * , *:before, *:after {
    box-sizing: inherit;
  }

  html, body {
    font-family: 'Raleway'
  }
  body{
    margin:0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway'
  }

  .iJHKsF{
    margin:0px;
    display:flex;
    height:60px;
  }
  .iJHKsF img{
    width:150px;
    display:block;
    object-fit: contain;
  }

  .eXwzUs{
    background-color:#232f3e;
  }
  
`;

export default GlobalStyle;
