import styled from "styled-components"

export const Container = styled.textarea`
    width: 100%;
    height: 200px;
    padding: 16px;
    border: none;
    border-radius: 8px;
    margin: 20px 0;

    background-color: ${({theme})=>theme.COLORS.BACKGROUND_700};
    color: ${({theme})=>theme.COLORS.WHITE};
    font-size: 17px;
`