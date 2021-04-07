import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box
  } 
   
html{
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: darkgrey;
    }
}
body{
    font-family: 'Montserrat', sans-serif;
    width: 100%;
}
 h2{
     font-size: 3rem;
     font-family: 'abril fatface',cursive;
     font-weight: lighter;
     color:  #fe7676;
 }
 h3{
     font-size: 1.3rem;
     color: #333;
     padding: 1.2rem;
     width: 100%;
 }
 p{
     font-size: 1.2rem;
     line-height: 200%;
     color: #696969;
 }a{
     text-decoration: none;
     color: #333;
 }
`;

export default GlobalStyle;
