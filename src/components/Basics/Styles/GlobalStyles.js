import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    html {
        font-size: 10px;
    }

    body, button, span {
        font-size: 1.6rem;
    }

    html, * {
        font-family: 'Montserrat', sans-serif;
    }
    .coddy {
        font-family: 'Source Code Pro', monospace;
    }

    body {
        background-color: #454546;
    }
`
export default GlobalStyles
