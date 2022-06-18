import React from 'react'
import styled from 'styled-components'
import Card from './Card'

const SectionVideo = styled.h2`
    margin-bottom: 1rem;
`
const ListItem = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
`
const Garis = styled.div`
    margin-bottom: 2rem;
    height: 2px;
    width: 100%;
    background-color: ${({theme}) => theme.body.textColor};
`

const CardList = ({video}) => {
    return (
        <div>
            <SectionVideo>{video.section}</SectionVideo>
            <ListItem>
                {
                    video.items.map((item, idx) => <Card item={item} channel={video.channel} key={idx} />)
                }
            </ListItem>
            <Garis/>
        </div>
    )
}

export default CardList
