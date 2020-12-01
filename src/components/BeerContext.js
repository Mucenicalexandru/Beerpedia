import React, {useEffect, useState, createContext} from 'react';
import axios from 'axios';


export const BeerContext = createContext(undefined);

export const BeerProvider = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [beerData, setBeerData] = useState([])
    const key = 'c5e2eaede9eb319adbaf015d9683a2cb'

    useEffect(() =>{
        axios.get(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers?key=${key}&p=${currentPage}`)
            .then(res => {
                setBeerData(res.data.data)
            })
    }, [currentPage])



    return (
        <BeerContext.Provider value={"Mucenic Alexandru"}>
            {props.children}
            {/*<h1>BEER LIST : </h1>*/}
            {/*{beerData.map(beer => {*/}
            {/*    return <h1>{beer.name}</h1>*/}
            {/*})}*/}
        </BeerContext.Provider>
    );


}
