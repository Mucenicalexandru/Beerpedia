import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import axios from 'axios';
import {properties} from "../properties";
import {Link} from "react-router-dom";
import MoreInfo from "../components/MoreInfo";

function Breweries(props) {

    const [breweryList, setBreweryList] = useState([]);

    useEffect(() => {
        axios.get(`https://sandbox-api.brewerydb.com/v2/breweries?key=${properties.key}`)
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
                for (let key in brewery.images){
                    if(key==="medium"){
                        return <div style={{display: "inline"}}>
                            <BreweriesCard className="card">
                                <CardHeader className="card-header"><Image src={brewery.images[key]} alt="image"/><a href={brewery.website}>{brewery.name}</a><span style={{fontSize: "15px", float: "right"}}><a href={`/brewery/${brewery.id}/info`}>More info</a></span></CardHeader>
                                <div className="card-body">
                                    <h3 className="card-text">Established : {brewery.established}</h3>
                                    <p className="card-text">{brewery.description}</p>
                                    <Link to={`/brewery/${brewery.id}/beers`}>See beers produced by {brewery.name}</Link>
                                </div>
                            </BreweriesCard>
                        </div>
                    }
                }

            })};

        </>
    );
}

const TextBlock = styled.div`
  color: #0a0a4c;
  margin: 100px;
  padding: 20px;
  background-color: #fff4e3;
  border: #c6c1c1 solid 1px;
`

const BreweriesCard = styled.div`
margin-left: 200px;
margin-bottom: 100px;
background-color: #d0e8e8;
border-radius: 10px;
width: 75%;
`

const Image = styled.img`
margin-right: 20px;
width: 25%;
`

const CardHeader = styled.h5`
background-color: #c2e5e5;;
`

export default Breweries;