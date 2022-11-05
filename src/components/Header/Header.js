import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
    return (
        <div className='header'>
            <NavLink className={({isActive})=> isActive ? 'active': undefined} to='/home'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/resturant'>Resturant</NavLink>
            <NavLink to='/post'>Post</NavLink>

        </div>
    );
};

export default Header;