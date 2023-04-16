import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 116px;
    padding: 0 123px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: transparent;
    border-bottom: 1px solid ${({theme})=> theme.COLORS.GRAY_300};

    >h1{
        font-size:24px;
        color: ${({theme})=> theme.COLORS.FUSHIA};
        font-weight: bold;
    }
`
export const Profile = styled.div`
    display: flex;
    align-items: center;
    gap: 9px;
    cursor: pointer;

    >div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        
        >a{
            text-decoration: none;
            font-size: 14px;
            color: ${({theme})=> theme.COLORS.GRAY_300};
            >p{
            font-size: 14px;
            font-weight: bold;
            color: ${({theme})=> theme.COLORS.WHITE};
        }
        }
    }
    >a{
        img{
            width: 64px;
            height: 64px;
            border: none;
            border-radius: 50%;
        }
    }
`
export const Search = styled.div`
    width: 600px;
`

