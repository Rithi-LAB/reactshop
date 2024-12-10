import React from 'react';
import './openComponent.css';
import Categories from './categories.js';

const OpenComponent = () => {
    function start_shop(){
        <Categories/>
    }

    return (
        <>
        <div className = "container">
    <div className = "title"><b>
    Home ELEGANCE_____ starts here...
    </b></div>
    <div className = "box">
    High On Sale!!!
    </div> </div>
    <div className = "background-container">
         we bring you an extensive selection of stylish, durable, and affordable furniture for every room of your home. From modern living room sofas to elegant bedroom sets, functional office desks to cozy outdoor lounge chairs, our website offers a wide range of options to suit your personal taste and lifestyle
    </div>
    
    <div className = "start-button">
    <button onClick = {start_shop}>
    START SHOPPING
    </button> </div>
     
    </>
 );
}

export default OpenComponent;




























