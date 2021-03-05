import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100vh;
    font-family: Arial, Helvetica, sans-serif;
  }
  button, input, optgroup, select, textarea, p {
    font-family: inherit;
    font-size: 1rem;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    margin: 0;
  }
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  } 
`
