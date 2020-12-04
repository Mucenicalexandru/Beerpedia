import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {properties} from "../properties";

function BeersByBrewery(props) {

    const beerId = props.match.params.breweryId;
    const [listOfBeers, setListOfBeers] = useState([]);

    useEffect(() => {
        axios.get(`https://sandbox-api.brewerydb.com/v2/brewery/${beerId}/beers?key=${properties.key}`)
            .then(res => {
                setListOfBeers(res.data.data);
            })
    }, [beerId])



    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Alcohol</th>
                </tr>
                </thead>

                <tbody>
                {listOfBeers.map((beer, index) => {
                    return <tr>
                                <th scope="row">{index}</th>
                                <td>{beer.name}</td>
                                <td>{beer.abv}%</td>
                            </tr>
                })}
                </tbody>
            </table>
        </>

    );
}

export default BeersByBrewery;