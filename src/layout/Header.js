import React from 'react';
import {Link} from "react-router-dom";

function Header(props) {
    return (
        <div>
            <header>
                <Link to="/"> Home </Link>
                <Link to="/beers"> Link to see the beers </Link>
            </header>
        </div>
    );
}

export default Header;