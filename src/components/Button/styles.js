import styled from "styled-components";

export const Container = styled.div`
    background-color: black;
    color: white;
    padding: 13px;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
    cursor: pointer;
    border: none;
    border-radius: 40px;
    text-align: center;

    &:hover {
        background-color: #393939;
        transition: all 0.4s ease;
    }
`