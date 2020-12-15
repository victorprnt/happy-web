import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    position: relative;
    display: flex;
`;

export const Sidebar = styled.aside`
    width: 440px;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
        font-size: 40px;
        line-height: 42px;
        font-weight: 800;

        margin-top: 64px;
    }

    p {
        line-height: 28px;
        margin-top: 24px;
    }

    footer {
        display: flex;
        flex-direction: column;

        line-height: 24px;

        strong { font-weight: 800; }
    }

    .leaflet-container {
        z-index: 5;
    }

`;



export const LinkAdd = styled(Link)`
    display: flex;
    justify-content: center;
    
    align-items: center;
    position: absolute;
    
    right: 40px;
    bottom: 40px;

    z-index: 10;

    width: 64px;
    height: 64px;
    border-radius: 20px;

    background: #15c3d6;

    transition: background-color 0.2s;

    &:hover {
        background: #17d6eb;
    }
`;