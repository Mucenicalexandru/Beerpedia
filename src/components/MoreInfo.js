import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {properties} from "../properties";
import styled from "styled-components";
import './more.css'

const SocialContainer = styled.div`
float: right;
`

const Address = styled.div`
margin: 50px;
`

function MoreInfo(props) {


    const breweryId = props.match.params.breweryId;
    const [infos, setInfo] = useState([]);
    const [locations, setLocations] = useState([]);
    const socialIcons = ["fa fa-facebook", "fa fa-twitter", "fa fa-stumbleupon"]

    useEffect(() => {
        axios.get(`https://sandbox-api.brewerydb.com/v2/brewery/${breweryId}/socialaccounts?key=${properties.key}`)
            .then(res => {
                setInfo(res.data.data)
            })
    }, [breweryId])

    useEffect(() => {
        axios.get(`https://sandbox-api.brewerydb.com/v2/brewery/${breweryId}/locations?key=${properties.key}`)
            .then(res => {
                setLocations(res.data.data)
            })
    }, [breweryId])


    return (
        <>
            <div>
            {infos.map((info, index) => {
                return <SocialContainer>
                            <a href={info.link} id="socialMedia" className={socialIcons[index]}> </a>
                       </SocialContainer>
            })}
            </div>

            <Address>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Street</th>
                        <th scope="col">Locality</th>
                        <th scope="col">Region</th>
                        <th scope="col">Postal Code</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Website</th>
                        <th scope="col">Type</th>
                        <th scope="col">Year Opened</th>
                        <th scope="col">Timezone</th>
                        <th scope="col">Opening Times</th>

                    </tr>
                    </thead>
                    <tbody>
                    {locations.map((location, index) =>{
                    return <tr>
                        <th scope="row">{index}</th>
                        <td>{location.name}</td>
                        <td>{location.streetAddress}</td>
                        <td>{location.locality}</td>
                        <td>{location.region}</td>
                        <td>{location.postalCode}</td>
                        <td>{location.phone}</td>
                        <td><a href={location.website}>{location.website}</a></td>
                        <td>{location.locationTypeDisplay}</td>
                        <td>{location.yearOpened}</td>
                        <td>{location.timezoneId}</td>
                        <td>{location.hoursOfOperationNotes}</td>
                    </tr>})}

                    </tbody>
                </table>
            </Address>



        </>
    );
}

export default MoreInfo;