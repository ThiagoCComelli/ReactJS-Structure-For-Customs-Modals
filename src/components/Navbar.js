import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {NavbarIcons} from '../Utils/NavbarItems'
import { ClickAwayListener } from '@material-ui/core';

import '../styles/Navbar.css'

const Navbar = () => {
    const handleCollapse = (force=false) => {
        const document_ = document.getElementsByClassName('menuExpander')[0].classList
        if(force){
            document_.toggle('active')
        }else{
            document_.remove('active')
        }
    }

    return (
        <>
        <ClickAwayListener onClickAway={() => {
            handleCollapse()
        }}>
        <div className="mainNavbar">
            <div className="mainNavbarContents">
                <h2>Lo<span>g</span>o</h2>
                <div className="navbarButtons">
                    <ul>
                    {NavbarIcons.map((item) => {
                        return (
                            <li key={item.name}>
                                <span>{item.name}</span>
                            </li>                        )
                    })}
                    </ul>
                    <MenuIcon onClick={() => {
                        handleCollapse(true)
                    }} className="navbarExpandButton" style={{display:"none",fontSize: 30}}/>
                </div>
            </div>
            <div className="menuExpander">
                <ul>
                    {NavbarIcons.map((item,idx) => {
                        return (
                            <li key={item.name}>
                                <span>{item.name}</span>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
        </ClickAwayListener>
        </>
    )
}

export default Navbar
