import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        color: #ffffff;
        background: #ebf2f5;
    }

    /* This is necessary because input, button and textarea don't herit the same font set to body */
    body, input, button, textarea {
        font-family: "Nunito", sans-serif;
        font-weight: 600;
        font-size: 18px;
    }

    button {
        cursor: pointer;
    }
`;