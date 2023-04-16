import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: "header" "container";

    >main{
    grid-area:"content";
    overflow-y: scroll;
    padding: 64px 0;
    }
`;

export const Links = styled.ul`
    list-style: none;
    >li{
        margin-top:12px;
        >a{
            color: ${({theme})=> theme.COLORS.WHITE};
        }
        a:hover{
          color: ${({theme})=> theme.COLORS.ORANGE};
        }
    }
`

export const Content = styled.div`
    max-width:550px;
    margin: auto;

    display: flex;
    flex-direction: column;

    button:first-child{
        align-self: end;
    }

    h1{
        padding-top:64px;
        font-size:36px;
        font-weight:500;    
    }

    p{
        font-size:16px;
        margin-top:16px;
        text-align: justify;
    }
`