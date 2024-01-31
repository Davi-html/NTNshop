import styled from "styled-components";

export const Container = styled.div`
    height: 100dvh;
    width: 100%;

    .informative-banners {
        height: auto;
        background-color: #D0D0D0;

        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        
        gap: 15px;
        padding: 20px;

        font-family: 'Open Sans', sans-serif;

        @media(min-width: 734px){
            grid-template-columns: 1fr 1fr 1fr 1fr;
        }
    }

    .banner {
        padding: 70px;
        display: flex;
        justify-content: center;

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

    .div-cards{
        display: grid;
        gap: 40px;
    }

    @media(max-width:1183px){
        .banner {
            flex-direction: column;
            align-items: center;
            gap: 16px;
        }
    }

    @media( min-width:1183px){
        .div-cards{
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr 1fr;
        }
    }

    @media(max-width: 972px){

        .img-banner {
            width: 100%;
        }

        .header {
            input {
                width: 300px;
            }
        }
    }
    
    @media(max-width: 404px){
        .header{
            input {
                width: 200px;
            }
        }
    }

    @media (max-width: 568px){
        .banner {
            padding: 30px 15px;

            .content-banner {
                padding: 15px;
                font-size: 10px;
                width: 100%;
            }
        }
    }

`