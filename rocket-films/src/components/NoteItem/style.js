import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    color: ${({theme})=> theme.COLORS.GRAY_300};
    border: ${({theme, isnew})=> isnew? `2px dashed ${theme.COLORS.GRAY_300}`: 'none'};
    background-color: ${({theme, isnew})=> isnew ? "transparent": theme.COLORS.BACKGROUND_700};
    max-height: 56px; 
    width: auto;
    border-radius: 8px;
    
    
    >button{
        border: none;
        background: none;
        margin: 16px;

        >svg{
            font-size: 20px;
            color: ${({theme})=> theme.COLORS.FUSHIA}

        }
    }
    
    >input{
        height: 56px;
        width:180px;
        padding-left: 15px;
        background-color:transparent;
        color: ${({theme})=> theme.COLORS.WHITE};
        border: none;
        letter-spacing: 2px;

        &::placeholder{
            color: ${({theme})=> theme.COLORS.GRAY_300};
        }

    }
`