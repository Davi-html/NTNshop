import styled from "styled-components"

export const Container = styled.div`
.sobre-nos {
        display: grid;
        grid-template-columns: 1fr;
        background: rgba(0,0,0,.1);
        padding: 40px;
        gap: 25px;

        @media (min-width: 626px){
            grid-template-columns: 1fr 1fr;
        }

        .sobre-nos-info {

            h2 {
                margin-bottom: 26px;
            }

            p {
                font-size: 14px;
            }
        }

        .link-sobre-nos{
            display: flex;
            flex-direction: column;
            gap: 20px;

            a {
                flex: 1;
                text-decoration: none;
                color: #222222;
            }
        }
    }

    footer {
        background-color: black;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;

        h3 {
            margin-top: 30px;
        }

        .social-link{
            svg {
                font-size: 20px;
                cursor: pointer;
            }

            a {
                
                color: white;
            }

            display: flex;
            gap: 30px;
        }

        img {
            width: 100px;
            height: 50px;
        }

        .copy {
            p{
                font-size: 12px;
            }

            padding-bottom: 10px;
        }
    }
`