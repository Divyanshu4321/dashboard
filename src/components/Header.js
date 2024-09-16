import React from 'react';
import './header.css'
import Logo from './Logo';
import SearchBar from './SearchBar';
import Nav from './Nav';
import Sidebar from './Sidebar';
const Header = () => {
    return (
        <header id='header' className='header fixed-top d-flex align-items-center'>
            {/* Logo */}
            <Logo/>
            
            {/* Search bar */}
            <SearchBar/>

            {/* Nav */}
            <Nav/>

            <Sidebar/>

        </header>
    );
}

export default Header;
