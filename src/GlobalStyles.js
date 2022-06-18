import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background-color: ${({theme}) => theme.body.backgroundColor};
        color: ${({theme}) => theme.body.textColor};
        font-family: 'Poppins', sans-serif;
        transition: 1s;
    }
    ul {
        list-style: none;
    }
    a {
        text-decoration: none;
        color: unset;
    }
    img {
        max-width: 100%;
        height: auto;
    }
`

export default GlobalStyles