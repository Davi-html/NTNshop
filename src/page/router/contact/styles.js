import styled from "styled-components";

export const Container = styled.div`

    a {
        text-decoration: none;
        color: black;
    }

    .container {
        margin-top: 24px;
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
    
        input, textarea {
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
        
        .button {
            margin: 24px 0 80px 0;
        }
    }
`