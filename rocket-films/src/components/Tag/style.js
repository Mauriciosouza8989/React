import styled from "styled-components"

export const Container = styled.span`
    
    font-size: 14px;
    color: ${({theme})=>theme.COLORS.WHITE };
    background-color: ${({theme})=>theme.COLORS.BACKGROUND_700 };
    border-radius: 8px;
    padding: 5px 10px;
    
    font-family: 'Roboto', sans-serif;
    margin: 10px;
`