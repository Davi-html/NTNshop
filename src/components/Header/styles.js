import styled from "styled-components";

export const Container = styled.header`
    .header-promocao{
        background-color: #DF1507;
        color: white;

        height: 28px;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .header {
        background-color: black;

        height: auto;
        padding: 15px 0;

        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .icons-header{
        display: flex;
        gap: 55px;
    }

    .user, .carrinho{
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    
        svg {
            font-size: 33px;
        }
        
    }

    .div-nav-header{
        background: black;
        height: 51px;
        
        nav {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px;

            height: 100%;
        }

        a{
            color: white;
            text-decoration: none;
        }

        hr{
            border-top: 1px solid rgba(255, 255, 255, 0.20);
        }
    }

`