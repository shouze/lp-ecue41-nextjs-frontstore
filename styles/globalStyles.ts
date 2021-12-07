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
    font-family: 'Arial'
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
    height:40px;
    color:white;
    display:flex;
    justify-content:start;
    padding-left:20px;
  }
  
  .hjQdtU{
    color:white;
    font-size:14px;
    cursor:pointer;
  }
  .ProductGrid__Grid-sc-ammdyg-0{
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    gap:50px; 
    background-color: #eee;
    padding: 50px;
  }
  .ProductCard__Card-sc-drk3uj-0 {
    width: 400px;
    background-color:#fff;
    border-radius:5px
  }
  .ProductCard__Card-sc-drk3uj-0 img{
    border-radius:5px;
  }
  .ProductCardInfo__SpanContainer-sc-wtiaza-1{
    font-family: "Arial";
    padding:10px;
  }
`;

export default GlobalStyle;
