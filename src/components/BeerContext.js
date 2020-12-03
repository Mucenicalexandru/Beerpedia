import React, {useEffect, useState, createContext, useContext} from 'react';
import axios from 'axios';


export const BeerContext = createContext(undefined);

export const BeerProvider = (props) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [beerData, setBeerData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const key = 'c5e2eaede9eb319adbaf015d9683a2cb';

    useEffect(() =>{
        axios.get(`https://sandbox-api.brewerydb.com/v2/beers?key=${key}&p=${currentPage}`)
            .then(res => {
                setBeerData(res.data.data)
            })
    }, [currentPage])

    return (
        <>
            <BeerContext.Provider value={beerData}>
                {props.children}
            </BeerContext.Provider>
            <div>
                <button onClick={() => {
                    setCurrentPage(currentPage + 1)
                    setPageNumber(pageNumber + 1)
                    console.log(pageNumber)
                }}>Next</button>
                <button onClick={() => {
                    setCurrentPage(currentPage - 1)
                    setPageNumber(pageNumber-1)
                    console.log(pageNumber)
                }}>Previous</button>
            </div>
        </>
    );
}
