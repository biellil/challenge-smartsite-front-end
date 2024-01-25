import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
:root {
    --dark-grey: #333333;
    --light-grey: #808080;
    --yellow: #FFB612;
    --red: #dc0a17;
    --green: #2FC022;
}
body {
    font-family: 'Gotham', sans-serif;
}
* 
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    border: none;
    
 
  
  }
  @font-face {
    font-family: 'Gotham';
    src: url('./assets/fonts/gotham-black.woff2') format('woff2');
    font-weight: 900; /* Black weight */
    font-style: normal;
}

@font-face {
    font-family: 'Gotham';
    src: url('./assets/fonts/gotham-bold.woff2') format('woff2');
    font-weight: bold; /* Bold weight */
    font-style: normal;
}

@font-face {
    font-family: 'Gotham';
    src: url('./assets/fonts/gotham-book.woff2') format('woff2');
    font-weight: normal; /* Book weight */
    font-style: normal;
}

@font-face {
    font-family: 'Gotham';
    src: url('./assets/fonts/gotham-light.woff2') format('woff2');
    font-weight: 300; /* Light weight */
    font-style: normal;
}
html{
    font-size: 100%;
}
@media (max-width: 600px) {
    html {
        font-size: 50%;
    }
}

`
