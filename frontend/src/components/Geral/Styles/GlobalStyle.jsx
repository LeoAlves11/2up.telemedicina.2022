import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body{
        background: ${({ theme }) => theme.bg2};
        color: ${({ theme }) => theme.text};
        letter-spacing: .6px;
    }
`;