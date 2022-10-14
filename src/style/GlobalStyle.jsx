import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding:0;
    margin:0;
    box-sizing:border-box;
    text-decoration:none;
    list-style:none;
}
html{
    font-size:62.5%;

}
a{
    color: #b8b8b8;
    &:hover {
    transition: 0.3s ease;
    color: #0bfef6;
  }
}
`;

export default GlobalStyle;
