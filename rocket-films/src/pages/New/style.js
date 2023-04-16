import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const Form = styled.form`
    max-width: 100%;
    margin: 40px 123px;


    >div{
        display: flex;
        gap: 40px;
        justify-content: space-between;
    }

    >a{
        text-decoration: none;
        color: ${({theme})=>theme.COLORS.FUSHIA};
        display: flex;
        align-items: center;
        gap: 5px;
        svg{
            font-size: 18px;
        }
    }

    >h1{
        font-size: 36px;
        font-weight: 700;
        margin: 24px 0 50px;
    }

    >.buttons{
        >button{
            font-size: 17px;
            letter-spacing: 1px;
            font-family: 'Roboto Slab', serif;
            font-weight: 500;
        }
        >button:nth-child(1){
            background-color: ${({theme})=> theme.COLORS.BACKGROUND_999};
            color: ${({theme})=> theme.COLORS.FUSHIA};
        }

    }
`
export const Section = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    >p{
        font-size: 20px;
        font-weight: 400;
        color: ${({theme})=>theme.COLORS.GRAY};
    }
    >div{
        width: 100%;
        height: auto;
        background-color: #0D0C0F;
        border-radius: 8px;
        display: flex;
        align-items: center;
        padding:16px;
        gap:24px;
        flex-wrap: wrap;
    }
`
