import React, {useContext} from 'react';
import  {BeerContext} from "../components/BeerContext";

function BeerList() {

    const value = useContext(BeerContext);

    return (
        <>
        <h1>The owner of this page is {value}</h1>
        </>
    );
}

export default BeerList;