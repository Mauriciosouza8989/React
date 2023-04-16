import styled from "styled-components"
import BackgroundImage from "../../images/background.png"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
`
export const Form = styled.form`
    width: 40%;
    height: 100vh;
    padding: 130px 134px;
    

    >h1{
        color: ${({theme})=>theme.COLORS.FUSHIA};
        font-size: 48px;
        font-weight: bold;
    }
    >p{
        width: 100%;
        font-size: 12px;
        font-weight: 400;
        display: flex;
        flex-wrap: nowrap;
    }

    >h2{
        font-size: 24px;
        font-weight: 400;
        margin: 48px 0;

        span{
            font-weight: 700;
            color: ${({theme})=>theme.COLORS.FUSHIA};
        }
    }

    >button{
        margin: 24px 0 42px;

    }

    >a{
        text-decoration: none;
        color: ${({theme})=>theme.COLORS.FUSHIA};
        display: flex;
        justify-content: center;
        
    }
    
`
export const Background = styled.div`
    flex: 1;
    background: url(${BackgroundImage}) no-repeat center center;
    background-size: cover;
    
`
