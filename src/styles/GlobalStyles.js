import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html {
    font-family: Courier;
    font-size: 16px;
    font-weight: 400;
  }

  body {
    margin: 0;

    h1 {
      font-size: 1.5rem;
      font-weight: 500;
    }

    h2 {
      font-size: 1.125rem;
      font-weight: 500;
    }

    h3 {
      font-size: 1rem;
      font-weight: 500;
    }

    a {
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;
    }

    strong {
      font-weight: 500;
    }
  }
`

export default GlobalStyles