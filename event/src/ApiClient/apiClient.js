import React from 'react';
import axios from 'axios';



function Dane(){
    return fetch('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=r0xZ38lkAmbiv0rfdbq9gE2ORGZIsAvL')
    .then(response => {
        const data = response.json();
        console.log(data)
         return data; })
    .catch(error => console.log(error)
    )};


export default Dane;