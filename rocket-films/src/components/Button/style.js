import styled from "styled-components"


export const Container = styled.button`
    width: 100%;
    height: 48px;
    background-color: ${({theme})=>theme.COLORS.FUSHIA};
    color: ${({theme})=>theme.COLORS.BACKGROUND_900};

    border: none;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    padding: 0 30px;
    

    
`