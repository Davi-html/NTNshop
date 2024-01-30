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
            gap: 16px;

            height: 100%;

            a, div{
                height: 100%;
                display: flex;
                align-items: center;
            }
        }

        a{
            color: white;
            text-decoration: none;
        }
        
        hr{
            border-top: 1px solid rgba(255, 255, 255, 0.20);
        }
    }

    #produto:hover{
        .hover-produto, .hover-produto:hover{
            display: block;
        }
    }

    #produto .hover-produto{
        position: absolute;
        display: none;

        color: white;
        background-color: black;
        
        top: 168px;
        left: 0;
        z-index: 100;
        
        width: 100%;
        height: 60px;  
        
        .a-hover-produto {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 16px;

            height: 100%;
        }
    } 

    .menu, .menuX {
        display: none;
    }

    @media(max-width: 1099px) {
        .icons-header {
            display: none;
            position: absolute;
            
            top: 0;
            left: 0;
            
            padding-top: 100px;
            z-index: 100;
            background-color: #3e3a39e0;
            height: 100dvh;
            width: 300px;
            flex-direction: column;
        }
        .menu {
            display: flex;
            font-size: 50px;
            margin-right: 10px;
            color: white;
        }
        .menuX{
            color: white;
            font-size: 60px;
        }
    }

    .open {
        display: flex;
    }

    .close{
        display: none;
    }

    
    
`