import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {properties} from "../properties";

function Facebook(props) {

    const breweryId = props.breweryId;
    const [socialAccount, setSocialAccount] = useState([]);


    return (
        <>
            <p><a href="">Facebook</a> | <a href="">Twitter</a> | <a href="">Untappd</a></p>
            <p>{breweryId}</p>
        </>
    );
}

export default Facebook;