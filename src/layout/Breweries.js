import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from 'axios';
import {properties} from "../properties";

const TextBlock = styled.div`
  color: #0a0a4c;
  margin: 100px;
  padding: 20px;
  background-color: #fff4e3;
  border: #c6c1c1 solid 1px;
`

function Breweries(props) {

    const [breweryList, setBreweryList] = useState([]);
    const key = properties.key;
    const anotherKey = properties.anotherKey;

    useEffect(() => {
        axios.get(`https://sandbox-api.brewerydb.com/v2/breweries?key=${key}`)
            .then(res => {
                setBreweryList(res.data.data);
            })
    }, [])


    return (
        <>
        <TextBlock>A brewery or brewing company is a business that makes and sells beer. The place at which beer is commercially made is either called a brewery or a beerhouse, where distinct sets of brewing equipment are called plant. The commercial brewing of beer has taken place since at least 2500 BC; in ancient Mesopotamia, brewers derived social sanction and divine protection from the goddess Ninkasi. Brewing was initially a cottage industry, with production taking place at home; by the ninth century monasteries and farms would produce beer on a larger scale, selling the excess; and by the eleventh and twelfth centuries larger, dedicated breweries with eight to ten workers were being built.
            The diversity of size in breweries is matched by the diversity of processes, degrees of automation, and kinds of beer produced in breweries. A brewery is typically divided into distinct sections, with each section reserved for one part of the brewing process.
        </TextBlock>

            {breweryList.map((brewery) => {
                return <div className="card">
                            <h5 className="card-header">{brewery.name}</h5>
                            <div className="card-body">
                                <h5 className="card-title">{brewery.website}</h5>
                                <p className="card-text">{brewery.description}</p>
                                <p className="card-text">Established : {brewery.established}</p>
                            </div>
                    </div>
            })};

        </>
    );
}

export default Breweries;