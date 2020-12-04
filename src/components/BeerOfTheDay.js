import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from "styled-components";
import {properties} from "../properties";


const Title = styled.h1`
text-align: center;
margin-top: 50px;
`
const Description = styled.p`
margin: 50px;
`

function BeerOfTheDay(props) {

    const [beerOfTheDay, setBeerOfTheDay] = useState({});


    useEffect(() => {
        axios.get(`https://sandbox-api.brewerydb.com/v2/beer/random?key=${properties.key}`)
            .then(res => {
                setBeerOfTheDay(res.data.data);
            })
    }, []);


    return (
        <>
            <Title>{beerOfTheDay.name}</Title>
            {/*<Description>{beerOfTheDay.style.description}</Description>*/}
            {/*<h2>{beerOfTheDay.id}</h2>*/}
        </>
    );
}

export default BeerOfTheDay;