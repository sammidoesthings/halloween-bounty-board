import styled from 'styled-components'

const Card = styled.div` 
    border: solid 3px black;
    border-radius: 4px;
    width: 20vh;
    height: 22vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1.5vh;
    padding: 0.5rem;
    background-color: rgb(255, 117, 24, 0.6);
    text-align: center;
    box-shadow: 4px 4px #8d5013
`;

const Photo = styled.img`
    border: black solid 2px;
    width: 20vh;
    height: 15vh;
`;

const BountyCard = styled.div` 
    border: solid black 5px;
    /* background-color: lightgray;
    opacity: 50%; */
    border-radius: 4px;
    height: 15rem;
    width: 100%;
    display: flex;
    line-height: 1.25rem;
    background-color: rgb(255, 117, 24, 0.6);
    box-shadow: 4px 4px #8d5013
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
    text-shadow: 0.5px 0.5px #8d5013;
`;

const Button = styled.button` 
    height: 4rem;
    background-color: rgb(255, 117, 24, 0.6);
    border: 3px black solid;
    border-radius: 4px;
    margin-top: 2rem;
    box-shadow: 4px 4px #8d5013
`;


export { Photo, Card, BountyCard, BountyPhoto, TopBountyTitle, SubTitle, Button };