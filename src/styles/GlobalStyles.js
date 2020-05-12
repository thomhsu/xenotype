import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-family: Courier;
    font-size: 16px;
    font-weight: 400;
  }

  body {
    margin: 0;

    h1 {
      font-size: 2.5rem;
      font-weight: 600;
    }

    h2 {
      font-size: 2rem;
      font-weight: 600;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 600;
    }

    h4 {
      font-size: 1rem;
      font-weight: 600;
    }

    p {
      font-size: 1rem;
      font-weight: 400;
    }

    strong {
      font-weight: 500;
    }
  }
`

export default GlobalStyles
