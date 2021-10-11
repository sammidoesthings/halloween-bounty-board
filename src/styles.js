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
    border: red solid 3px;
    width: 26vh;
    height: 15vh;
`;

const BountyCard = styled.div` 
    border: solid green 3px;
    height: 10rem;
    width: 100%;
    display: flex;
`;

const BountyPhoto = styled.img`
    border: red solid 3px;
    height: 10rem;
`;



export { Photo, Card, BountyCard, BountyPhoto };