import React from 'react';

import '../styles/Home.css'

const Home = ({addPopup}) => {

    return (
        <>
        <div className="mainHome">
            <img alt="" src={`${process.env.PUBLIC_URL}/images/background.jpg`}/>
            <div className="homeContents">
                <h1>Your <span id="here">@</span>Brand, we make your <span>!</span>Logo</h1>
                <p>Let works together. Top 1ª site for brand maker.</p>
                <div onClick={() => {
                        addPopup({type:"newsletter"})
                    }} className="buttonEffect">
                    <h3>Get Started</h3>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
