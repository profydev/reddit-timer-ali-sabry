import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle(() => `
  ${normalize}
  
  @import url('https://fonts.googleapis.com/css2?family=Bitter:wght@300&family=Montserrat:wght@300&display=swap');

  body {
    color: red;
    font-family: Bitter, serif;
    font-family: Montserrat, sans-serif;
  }
`);

export default GlobalStyle;
