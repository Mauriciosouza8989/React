import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
   
    
`
export const Header = styled.header`
    width: 100%;
    height: 123px;
    padding-left: 123px;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_800};
    display: flex;
    align-items: center;

    >a{
        text-decoration: none;
        color: ${({theme})=> theme.COLORS.FUSHIA};
        display: flex;
        align-items: center;
        gap: 5px;
        svg{
            font-size: 18px;
        }
    }
`

export const Avatar = styled.div`
    width: 186px;
    height: 186px;
    position: relative;
    margin: -124px auto 32px;
    >img{
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }
    >label{
        width: 48px;
        height: 48px;
        cursor: pointer;

        background-color: ${({theme})=>theme.COLORS.FUSHIA};
        border-radius: 50%;

        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 7px;
        right: 7px;
        input{
            display: none;
        }
        svg{
            width: 20px;
            height: 20px;
            color: ${({theme})=>theme.COLORS.BACKGROUND_800};
        }
    }
`

export const Form = styled.form`
    width: 340px;
    margin: 57px auto 0;
    >div:nth-child(4){
        margin-top: 24px;
    }
    
    
`