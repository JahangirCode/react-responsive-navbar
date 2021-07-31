import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

:root {
    --primary: #EEBF00;
    --secondary: #232B38;
    --ternary: #6C6C6C;
    --danger: #FE4545;
    --pure: #FEFEFE;
    --light: #F0F0F0;
    --haven: #FFFFFF;
    --footer: #2D333F;
    --btn-color: #FAFF00
}

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
}

body {
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


`;

export default GlobalStyle;
