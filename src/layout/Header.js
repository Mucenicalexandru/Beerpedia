import React, {useState} from 'react';
import {Link} from "react-router-dom";
import styled from "styled-components";
import Search from "../components/Search";


const Button = styled.button`
margin: 5px;
`


function Header(props) {



    return (
        <div>
            <header>
                <div>
                    <Button type="button" className="btn btn-outline-primary"><Link to="/"> Home </Link></Button>
                    <Button type="button" className="btn btn-outline-primary"><Link to="/beers"> Link to see the beers </Link></Button>
                    <Button type="button" className="btn btn-outline-primary"><Link to="/beerOfTheDay">Beer of the day</Link></Button>
                    <Search/>
                </div>
            </header>
        </div>
    );
}

export default Header;