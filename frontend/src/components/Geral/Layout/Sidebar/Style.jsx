import styled from "styled-components";
import { btnReset, Variables } from "../../../Geral/Styles/Variables";

const size = {
    mobile: "320px",
    tablet: "768px",
}

export const SSIdebar = styled.div`
    width: ${Variables.sidebarWidth};
    background: ${({ theme }) => theme.bg};
    height: 100vh;
    padding: ${Variables.lgSpacing};

    position: relative;

    @media (max-width: ${size.tablet})
    {
        display: none
    }
`;

export const SLogo = styled.div`
    width: 52px;

    img{
        max-width: 140px;
        height: auto;
    }
    cursor: pointer;

    margin-bottom: ${Variables.lgSpacing};
`;

export const SSearch = styled.div`
    background: ${({ theme }) => theme.bgAlpha};
    border: 1px solid ${({ theme }) => theme.bg3};
    border-radius: ${Variables.borderRadius};
    input {
        padding: 0 ${Variables.smSpacing};
        font-family: inherit;
        letter-spacing: inherit;
        font-size: 16px;
        width: 100%;
        outline: none;
        border: none;
        color: inherit;
        background: transparent;
    }
    display: flex;
`;

export const SSearchIcon = styled.button`
    ${btnReset};
    padding: calc(${Variables.mdSpacing} - 2px) ${Variables.mdSpacing};
    display: flex;
    cursor: pointer;

    svg{ 
        font-size: 20px;
    }
`;

export const SDivider = styled.div`
    height: 1px;
    width: 100%;
    background: ${({ theme }) => theme.bg3};
    margin: ${Variables.lgSpacing} 0;
`;

export const SLinkContainer = styled.div`
    background: transparent;
    border-radius: ${Variables.borderRadius};
    margin: 8px 0;

    :hover{
        box-shadow: inset 0 0 0 1px ${({ theme }) => theme.bg3};
    }

    a{
        color: ${({ theme }) => theme.text};
        text-decoration: none;
    }
`;

export const SLink = styled.div`
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    padding: calc(${Variables.smSpacing} - 2px ) 0;
    cursor: pointer;
`;


export const SLinkIcon = styled.div`
    padding: ${Variables.smSpacing} ${Variables.mdSpacing};
    display: flex;
    
    svg{
        font-size: 20px;
    }
`;

export const SLinkLabel = styled.span`
    display: block;
    flex: 1;
    margin-left: ${Variables.smSpacing};
`;

export const SLinkNotification = styled.div`
    font-size: 14px;
    padding: calc(${Variables.smSpacing} / 2) ${Variables.smSpacing};
    border-radius: calc(${Variables.borderRadius} / 2);
    background: ${({ theme }) => theme.primary};
    color: white;

    margin-right: ${Variables.mdSpacing};
`;

export const STheme = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
`;

export const SThemeLabel = styled.span`
    display: block;
    flex: 1;
`;

export const SThemeToggler = styled.button`
    ${btnReset};
    margin: 0 auto;
    cursor: pointer;
    width: 36px;
    height: 20px;
    border-radius: 10px;
    background: ${({ theme, isActive }) => (!isActive ? theme.bg3 : theme.primary)};

    position: relative;
`;

export const SToggleThumb = styled.div`
    height: 18px;
    width: 18px;
    position: absolute;
    top: 1px;
    bottom: 1px;
    transition: .2s ease right;
    right: calc(100% - 18px - 1px);
    border-radius: 50%;
    background: ${({ theme }) => theme.bg}
`;

export const SCard = styled.div`
    background: ${({ theme }) => theme.bg};
    box-shadow: 11px 9px 16px 0px ${({ theme }) => theme.box_shadow};
    border-radius: 6px;
`;

