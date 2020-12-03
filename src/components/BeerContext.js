import React, {useEffect, useState, createContext, useContext} from 'react';
import axios from 'axios';
import styled from "styled-components";

const ButtonStyle = styled.a`
  cursor: pointer;
`
const CurrentPage = styled.a`
background-color: #007bff;
color: #FFF;
animation: cubic-bezier();
`

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
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><ButtonStyle className="page-link" onClick={() => {
                        setCurrentPage(currentPage - 1)
                        setPageNumber(pageNumber-1)
                    }}>Previous</ButtonStyle></li>

                    <li className="page-item">
                        <a className="page-link" href="#">
                            {pageNumber-1}
                        </a>
                    </li>

                    <li className="page-item">
                        <CurrentPage className="page-link" href="#">
                            {pageNumber}
                        </CurrentPage>
                    </li>

                    <li className="page-item">
                        <a className="page-link" href="#">
                            {pageNumber+1}
                        </a>
                    </li>

                    <li className="page-item"><ButtonStyle className="page-link" onClick={() => {
                        setCurrentPage(currentPage + 1)
                        setPageNumber(pageNumber + 1)
                    }}>Next</ButtonStyle></li>
                </ul>
            </nav>
        </>
    );
}
