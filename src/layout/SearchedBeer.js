import React, {useContext} from 'react';


function SearchedBeer(props) {

    const searchedWord = props.match.params.beer;

    return (
            <div>
                The name is : {searchedWord}
            </div>
    );
}

export default SearchedBeer;