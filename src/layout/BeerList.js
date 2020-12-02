import React, {useContext} from 'react';
import  {BeerContext} from "../components/BeerContext";
import styled from "styled-components";

const BeerCard = styled.div`
margin: 15px;
border-color: grey;
border-radius: 20px;
`

const BeerDescription = styled.div`
text-align: left;
`

const Image = styled.img`
    margin: 15px;
    float: left;
    width: 20%;
    height: 20%;
`

function BeerList() {

    const beerData = useContext(BeerContext);
    let dict = {};


    return (
        <>
            {beerData.map((beer, index) => {
                for (let key in beer.labels){
                    if(key==="large"){
                        return <BeerCard className="card text-center">
                            <BeerDescription className="card-body">
                                <Image src={beer.labels[key]} alt="beer picture"/>                                <h5 className="card-title">{beer.name}</h5>
                                <p className="card-text">{beer.description}</p>
                            </BeerDescription>
                        </BeerCard>

                    }
                }

            })}

        </>
    );
}

export default BeerList;