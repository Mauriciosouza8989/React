import styled from "styled-components"

export const Container = styled.button`
    width: 100%;
    padding: 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    background: ${({theme})=>theme.COLORS.BACKGROUND_800};
    border-radius: 8px;
    margin:25px 0;
    border: none;
    text-align: justify;
    color: ${({theme})=>theme.COLORS.WHITE};

    h2{
        width: 100%;
        color: white;
        font-size: 24px;
        font-weight: bold;
    }
    p{
        font-family: 'Roboto', sans-serif;
    }

    >footer{
        width: 100%;
        display: flex;
        margin-top: 24px;

    }
    svg{
        font-size: 24px;
        color: ${({theme})=>theme.COLORS.FUSHIA};
    }
`