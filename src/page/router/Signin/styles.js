import styled from "styled-components";

export const Container = styled.div`

    a {
        text-decoration: none;
        color: black;
    }

    .container {
        margin-top: 24px;
    }

    .routes {
        display: flex;
        gap: 10px;
        font-size: 14px;
        justify-content: center;
        margin-bottom: 34px;

        p {
            cursor: pointer;
        }
    }

    h1 {
        text-align: center;
        margin-bottom: 20px;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 734px;
        margin: 0 auto;
        gap: 10px;
        font-size: 12px;

        #p-esqueceu-senha{
            font-weight: bold;
            text-align: end;    
            margin-bottom: 24px;
        }
    
        input {
            padding: 12px;
            font-size: 14px;
            border: 1px solid rgba(0,0,0,0.3);
            transition: all 0.4s ease;
            border-radius: 10px;
            outline: none;

            &:hover {
                border: 1px solid black;
            }
        }

        .criar-conta, .esqueceu-senha {
            font-weight: bold;
            text-decoration: none;
            color: black;
        }

        .p-criar-conta {
            margin: 14px 0 90px 0;
            text-align: center;
            font-size: 16px;
        }
        
    }
`