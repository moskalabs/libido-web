import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
 ${reset}
 * {
   box-sizing: border-box;
 }
 body {
   max-width: 1400px;
   background-color: #E4E4E4;
 }
`;

export default GlobalStyle;
