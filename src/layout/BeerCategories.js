import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {properties} from "../properties";

function BeerCategories(props) {

    const [categoryList, setCategoryList] = useState([]);
    const key = properties.key;
    const anotherKey = properties.anotherKey;

    useEffect(() =>{
        axios.get(`https://sandbox-api.brewerydb.com/v2/menu/categories?key=${key}`)
            .then(res => setCategoryList(res.data.data))
    }, [])

    return (
        <>
            {categoryList.map((category, index) => {
                if(index < 14){
                    // api is with two "test" names and i would like to print only the beer categories
                    return <div key={index}>{category.name}</div>
                }

            })}
        </>


    );
}

export default BeerCategories;