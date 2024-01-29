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

    .banner {
        padding: 70px;
        display: flex;
        
        .content-banner{
            display: flex;
            flex-direction: column;
            padding: 63px;
            border: 1px solid black;
            
            p{
                font-family: 'Roboto';
                font-size: 12px;
                font-style: normal;
                font-weight: 600;
                line-height: 12px;
                letter-spacing: 4px;
            }

            a{
                display: flex;
                align-items: center;
                gap: 16px;

                margin-top: 21px;

                color: #0038FF;
                text-decoration: none;
            }
        }
    }

    .img-banner{
        height: auto;
        width: 706px;
    }
`