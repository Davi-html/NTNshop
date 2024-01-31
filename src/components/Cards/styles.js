import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;

    .div-pai {
        background-color: white;
        display: flex;


        @media(max-width: 548px){
            flex-direction: column-reverse;
            gap: 10px;

            .img img{
                width: 100%;
            }
            .content-card {
                padding-bottom: 30px;
            }
        }
    }

    .content-card{
        display: flex;
        flex-direction: column;
        
        justify-content: center;
        gap: 10px;

        padding-left: 32px;
        max-width: 300px;

        a {
            display: flex;
            width: 128px;
            height: 36px;
            justify-content: center;
            align-items: center;
            flex-shrink: 0;
            border-radius: 2px;
            background: #3483FA;
            text-decoration: none;
            color: white;
        }

        p{
            color: #4B4B4B;
            font-size: 10px;
            font-weight: 600;
            line-height: 10px;
            letter-spacing: 4px;
        }
        h1{
            color: #4B4B4B;
            font-size: 22px;
            font-weight: 600;
            line-height: 24.2px;
            text-transform: uppercase;
        }
    }
`