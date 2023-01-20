import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        background-color: #181818;
    }
    input::placeholder{
        font-weight: 400;
        font-size: 16px;
    }
    ::-webkit-scrollbar{
        width: 8px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: #A3A3A3;
        border-radius: 25px;
    }
    ::-webkit-scrollbar-track{
        background-color: #181818;
    }
`

export default GlobalStyle;