import styled from "styled-components";

export const Container = styled.div`
    *{
        user-select: none;
        -webkit-user-drag: none;
    }
    height: auto;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
        margin: 80px 0 30px;
    }

    .container {
        display: grid;
        grid-template-columns: 0.5fr 1fr;
        justify-content: center;
        gap: 20px;
        
        height: auto;
        width: 90%;

        @media (max-width: 1273px){
            grid-template-columns:  1fr;
            justify-content: center;
            align-items: center;

            .oferta-do-dia1 {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                h3{
                    width: 100%;
                    text-align: start;
                }
            }
        }
    }

    .content-img{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .oferta-do-dia1, .oferta-do-dia2{
        background-color: white;
        border: 1px solid black;
        border-radius: 16px;

        padding: 16px;

    }


    .oferta-do-dia2{
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 16px;

        overflow-x: auto;        
    }

    .content {
        margin: 19px 55px;
    }

    .preco-off{
        color: gray;
        text-decoration: line-through;
    }

    .div-preco{
        display: flex;
        align-items: center;
        
        gap: 8px;
        
        .preco{
            font-size: 16px;
        }
        .porcentagem-preco{
            color: #00A650;
            font-size: 18px;
        }
    }

    .juros span {
        color: #00A650;
    }

    .content-info {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .juros {
            font-size: 14px;
        }
    }

    .arrow {
        fill: black;
    }

    .arrow--disabled {
        fill: #fff;
    }

`