import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;

        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }

    body {
        width: 100vw;
        height: 100vh;
    }

    #root {
        width: 100%;
        height: 100%;

        background-color: #F5F7FA;

        display: flex;
        justify-content: center;
        align-items: center;

    }

    h1, h2, ul, li, input, fieldset {
        all: unset
    }
`;
