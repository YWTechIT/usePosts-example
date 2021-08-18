import styled from "styled-components";
import { Data } from "../../../types";

interface CardProps {
    item: Data;
}

const CardWrapper = styled.article`
    display: flex;
    flex-direction: column;
    width: 768px;
    background-color: #e8c553;
    padding: 32px;
    margin-bottom: 32px;
    min-width: 100px;
`

const IdStyle = styled.section`
    font-size: 14px;
    margin: 12px 0px;
`

const Title = styled.header`
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Body = styled.section`
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`

const Card = ({item}: CardProps) => {
    return(
        <CardWrapper>
            <IdStyle>{item.id}</IdStyle>
            <Title>{item.title} </Title>
            <Body>{item.body}</Body>
        </CardWrapper>
    )
}

export default Card;