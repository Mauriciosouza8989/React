import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    height: 100%;
    background-color: transparent;
    padding: 50px 123px 200px;
    overflow-y: auto;

    >div{
        >h2{
            font-size:32px;
            font-weight: 400;
        }
    }

    >div:first-child{
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
`