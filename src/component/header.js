import React, { Component } from 'react';
import {Link} from 'react-router-dom' ;

const Header =()=>{
    return(
        <header>
            <div className="flexbox-container">
            <Link to="/"  className="logo">
             <img  src="./images/logo.png" />
            </Link>
            <nav>
                <Link to="/team">Teams</Link>
            </nav>
            </div>
        </header>
        )
}

export default Header;