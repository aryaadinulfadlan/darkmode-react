import React from 'react'
import styled from 'styled-components';

const CardImage = styled.img`
    margin-bottom: 1rem;
`
const ChannelImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-bottom: 1rem;
`
const Title = styled.h3`
    margin-bottom: 0.5rem;
`
const Desc = styled.span`
    font-style: italic;
    display: block;
`
const Button = styled.a`
    background-color: ${({theme}) => theme.button.backgroundColor};
    color: ${({theme}) => theme.button.textColor};
    padding: 0.2rem 1.2rem; 
    font-weight: 600;
    border-radius: 5px;
    display: block;
    width: fit-content;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
`
const Item = styled.li``

const Card = ({item, channel}) => {
    return (
        <Item>
            <CardImage src={item.image} alt={item.title}/>
            <ChannelImage src={item.image} alt={item.title}/>
            <Button href={`https://www.youtube.com/watch?v=${item.id}`} target='_blank' rel="noreferrer">
                Visit    
            </Button>
            <Title>{item.title}</Title>
            <Desc>{channel}</Desc>
            <Desc>{item.views} &bull; {item.published}</Desc>
        </Item>
    )
}

export default Card

