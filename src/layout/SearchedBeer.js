import React, {useContext, useState} from 'react';


function SearchedBeer(props) {

    //searchedWord is taken from path="/result/:beer"
    const searchedWord = props.match.params.beer;

    const [result, setResult] = useState("");



    return (
            <div>
                The searched word is : {searchedWord}
            </div>
    );
}

export default SearchedBeer;