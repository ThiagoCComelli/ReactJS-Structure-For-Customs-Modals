import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import { ClickAwayListener } from '@material-ui/core';

import '../../styles/Newsletter.css'

const Newsletter = ({setNotifications}) => {
    var animationsEnds = 0

    const closePopup = () => {
        document.getElementsByClassName('mainNewsletter')[0].style.animation = "toTop .5s"
    }

    return (
        <>
        <div className="backgroundFade">
            <ClickAwayListener onClickAway={() => {closePopup()}}>
                <div onAnimationEnd={(e) => {
                    animationsEnds++
                    if(animationsEnds === 2){
                        setNotifications(null)
                    }
                }} className="mainNewsletter">
                    <div className="newsletterBack">
                        <CloseIcon onClick={() => {closePopup()}} style={{fontSize: 30,margin:25,cursor:"pointer"}}/>
                    </div>
                    <div className="newsletterFront">
                        <div className="newsletterText">
                            <h2>Subscribe to our<br/>newsletter</h2>
                        </div>
                        <div className="newsletterInput">
                            <input placeholder="Write your email..." type="text"></input>
                            <button onClick={() => {closePopup()}}>Submit</button>
                        </div>
                    </div>
                </div>
            </ClickAwayListener>
        </div>
        </>
    )
}

export default Newsletter;
