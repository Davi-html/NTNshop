import styled from "styled-components";

export const Container = styled.div`
    height: 100dvh;
    width: 100%;

    .informative-banners {
        height: 209px;
        background-color: #D0D0D0;

        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
        
        gap: 15px;
        padding: 20px;

        font-family: 'Open Sans', sans-serif;
    }
`