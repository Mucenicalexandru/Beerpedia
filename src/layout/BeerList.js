import React, {useContext} from 'react';
import  {BeerContext} from "../components/BeerContext";
import styled from "styled-components";


const BeerCard = styled.div`
margin: 10px;
border-color: #007BFF;
border-radius: 20px;
`

const BeerDescription = styled.div`
text-align: left;
`

const Image = styled.img`
    margin: 10px;
    float: left;
    width: 20%;
    height: 20%;
`

const BeerName = styled.div`
font-size: x-large;
text-align: left;
`

const Description = styled.div`
color: #20205c;
width: 50%;
padding: 30px;
`
const Details = styled.div`
color: #1a1a82;
font-weight: bolder;
`


function BeerList() {

    const beerData = useContext(BeerContext);

    return (
        <>
            {beerData.map((beer, index) => {
                for (let key in beer.labels){
                    if(key==="large"){
                        return <BeerCard className="card text-center">
                                        <BeerDescription className="card-body">
                                            <div>
                                                <BeerName className="card-title">{beer.name}</BeerName>
                                            </div>
                                            <Image src={beer.labels[key]} alt="beer picture"/>
                                            <div>
                                            <Description className="card-text">{beer.description}</Description>
                                            <Details><p>Alcohol by Volume : {beer.abv} %</p>
                                                <p>Bitterness : {beer.ibu}</p>
                                                <p>Food pairings : {beer.foodPairings}</p>
                                            </Details>

                                            </div>

                                        </BeerDescription>
                                    </BeerCard>

                    }
                }

            })}

        </>
    );
}

export default BeerList;