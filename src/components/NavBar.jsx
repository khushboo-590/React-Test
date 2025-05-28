import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    const getClass = (path) =>
        `font-bold justify-center text-center text-xl transition duration-300 ${isActive(path) ? 'text-red-400' : 'text-gray-600'
        }`;

    return (
        <nav className="flex items-center gap-10 mx-auto max-w-[1140px] pt-5">
            <NavLink to="/home" className={getClass('/home')}>
                Home
            </NavLink>

            <NavLink to="/about" className={getClass('/about')}>
                About
            </NavLink>

            <NavLink to="/contact" className={getClass('/contact')}>
                Contact
            </NavLink>
        </nav>
    );
};

export default NavBar;
