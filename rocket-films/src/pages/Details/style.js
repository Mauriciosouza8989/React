import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
    color: ${({theme})=> theme.COLORS.WHITE};
`

export const Detail = styled.div`
    height: 100vh;
    overflow-y: auto;
    margin: 40px 123px 123px;
    overflow-y: auto;
    padding-bottom: 120px;

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

    >h1{
        display: flex;
        align-items: center;
        gap: 19px;
        font-size: 36px;
        font-weight: 600;
        margin-bottom: 24px;
    }

    >div{
        display: flex;
        align-items: center;
        gap: 10PX;
        margin-bottom: 40px;

        >img{
            width: 20px;
            height: 20px;
            border-radius: 50%;
        }
        >div{
            display: flex;
            align-items: center;
            gap: 8px;
            margin-left: 8px;
            span{
                font-size: 14px;
            }
        }
    }
    >p{
        margin: 48px 50px 120px 0;
        display: flex;
        flex-wrap: wrap;
        text-align: justify;
    }

`