import styled from "styled-components";

export const Container = styled.header`
    background-color: black;

    a {
        text-decoration: none;
    }

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

        margin: 0 44px;
    }

    .user, .carrinho{
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        svg {
            font-size: 33px;
        }
       
    }
    @media (max-width: 392px){
        .carrinho{
            font-size: 10px;
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

    .menu, .menuX, .menu-nav {
        display: none;
        z-index: 100;
    }
    
    .menu-nav {
        animation: menuAnimation .500s alternate;

        a {
            text-decoration: none;
            color: white;
            padding: 15px;

            border-top: gray 1px solid;
        }

        #produto-menu {
            display: flex;
            justify-content: space-between;
        }

        .login-menu {
            display: grid;
            align-items: center;
            grid-template-columns: 0.3fr 1fr 1fr;
            color: white;
            margin-top: auto;
            padding: 10px;
            gap: 20px;
            background-color: #141414;
            .user-login-menu{
                font-size: 40px;
            }

            a {
                padding: 0;
                border: none;
                font-size: 14px;
            }
        }

        .list-produtos {
            width: 100%;
            background-color: rgba(255,255,255,.1);

            a {
                padding: 16px;
                width: 100%;
                display: block;
            }

            display: none;
        }
    }

    @keyframes menuAnimation {
        from {
            left: -100%;
        }
        to {
            left: 0;
        }
    }
    @media(max-width: 1099px) {
        .menu-nav {
            display: none;
            position: fixed;
            
            top: 0;
            left: 0;
            
            padding-top: 55px;
            z-index: 100;
            background-color: black;
            height: 100dvh;
            width: 300px;
            flex-direction: column;
        }
        .menu {
            display: flex;
            font-size: 50px;
            margin-left: 20px;
            color: white;
        }
        .menuX{
            color: white;
            font-size: 60px;
            z-index: 1001;
            position: absolute;
            right: 0;
            top: 0;
        }
        .user {
            display:none
        }

        .div-nav-header {
            display: none;
            
        }
    }

    .open {
        display: flex;
    }

    .close{
        display: none;
    }

    .div-input {
        flex: 1;

        input{
            width: 100%;
        }
    }

    .div-input2 {
        flex: 1;
        display: none;
        background-color: black;
        justify-content: center;
        padding-bottom: 15px;

        input{
            width: 95%;
        }
    }

    @media (max-width: 659px){
        .div-input2 {
            display: flex;
        }        
        
        .div-input {
            display: none;
        }

        .div-nav-header{
            margin-top: 10px;
        }

        .header {
            justify-content: space-between;

            .icons-header {
                margin-left: 0;
                margin-right: 20px;
            }
        }
    }

    img {
        margin: 0 10px ;
    }

`