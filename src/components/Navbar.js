import React from 'react';
import './Navbar.css';
import SearchIcon from '@material-ui/icons/Search';

export default function Navbar(){
    return (
        <div className="container nav-container flex">
            <div className="nav-logo">
                <h1>TradeBook</h1>
            </div>
            <div className="search-bar flex">
                <SearchIcon className="search-icon"/>
                <input type="text" placeholder="Search TradeBook"/>
            </div>
        </div>
    )
}