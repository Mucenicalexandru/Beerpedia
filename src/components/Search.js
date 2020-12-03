import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import SearchedBeer from "../layout/SearchedBeer";

const SearchStyle = styled.nav`
float: right;
`

function Search(props) {

    const [search, setSearch] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    }


    return (
        <>
            <SearchStyle className="navbar navbar-light bg-light">
                <form className="form-inline" action={SearchedBeer}>
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={search} name="search" onChange={(e) => setSearch(e.target.value)} />
                    <button className="btn btn-outline-primary" type="submit" onClick={handleSubmit}>
                        <Link to={`/result/${search}`}>Search</Link>
                    </button>
                </form>
            </SearchStyle>
            </>
    );
}

export default Search;