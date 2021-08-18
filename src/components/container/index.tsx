import React from "react";
import styled from "styled-components";

interface ContainerProps{
    children: React.ReactNode;
}

const ContainerStyle = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 64px;
`

const Container = ({children}: ContainerProps) => {
    return(
        <ContainerStyle>{children}</ContainerStyle>
    )
}

export default Container;