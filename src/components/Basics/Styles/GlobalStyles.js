import { createGlobalStyle } from "styled-components"

export const variables = {
  seashell: "#FFF5EE",
  lightseagreen: "#20B2AA",
}

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 10px;
    }

    body, button, span {
        font-size: 1.6rem;
    }

    html, * {
        font-family: 'Montserrat', sans-serif;
    }
    
    body {
        max-height: 100vh;
        overflow: hidden;
    }
`
