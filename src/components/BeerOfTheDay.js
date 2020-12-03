import React, {useEffect, useState} from 'react';
import axios from 'axios';

function BeerOfTheDay(props) {

    const [beerOfTheDay, setBeerOfTheDay] = useState({});


    useEffect(() => {
        axios.get(`https://sandbox-api.brewerydb.com/v2/beer/random?key=c5e2eaede9eb319adbaf015d9683a2cb`)
            .then(res => {
                setBeerOfTheDay(res.data.data);
            })
    }, []);

    return (
        <>
            <h1>{beerOfTheDay.name}</h1>
            <h1>{beerOfTheDay.description}</h1>
            <h2>{beerOfTheDay.success}</h2>
        </>
    );
}

export default BeerOfTheDay;