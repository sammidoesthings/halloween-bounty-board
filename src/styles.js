import styled from 'styled-components'

const Card = styled.div` 
    border: solid 2px black;
    width: 27vh;
    height: 22vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1.25vh;
    padding: 0.25rem;
`;

const Photo = styled.img`
    /* border: red solid 3px; */
    width: 26vh;
    height: 15vh;
`;

const BountyCard = styled.div` 
    border: solid black 3px;
    height: 15rem;
    width: 100%;
    display: flex;
    line-height: 1.25rem;
`;

const BountyPhoto = styled.img`
    /* border: red solid 3px; */
    height: 15rem;
`;

const TopBountyTitle = styled.h2` 
    font-size: 3rem;
    line-height: 0;
    color: #1a0d00;
    text-shadow: 3px 3px #4d2600;
`;

const SubTitle = styled.p`
    font-size: x-large;
    line-height: 0;
    color: #1a0d00;
    text-shadow: 1px 1px #4d2600;
`;


export { Photo, Card, BountyCard, BountyPhoto, TopBountyTitle, SubTitle };