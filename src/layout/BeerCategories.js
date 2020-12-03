import React, {useEffect, useState} from 'react';
import axios from 'axios';

function BeerCategories(props) {

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() =>{
        axios.get('https://sandbox-api.brewerydb.com/v2/menu/categories?key=c5e2eaede9eb319adbaf015d9683a2cb')
            .then(res => setCategoryList(res.data.data))
    })

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