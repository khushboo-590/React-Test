import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    const location = useLocation();

    return (
        <nav className="flex items-center gap-10   mx-auto   max-w-[1140px]  pt-5">
            <Link
                to="/home"
                className={`font-bold justify-center text-center text-xl ${location.pathname === '/home' ? 'text-red-400 ' : 'text-gray-600'}`}
            >
                Home
            </Link>

            <Link
                to="/about"
                className={`font-bold justify-center text-center text-xl ${location.pathname === '/about' ? 'text-red-400 ' : 'text-gray-600'}`}
            >
                About
            </Link>

            <Link
                to="/contact"
                className={`font-bold  justify-center text-center  text-xl ${location.pathname === '/contact' ? 'text-red-400 ' : 'text-gray-600'}`}
            >
                Contact
            </Link>

          
        </nav>
    );
};

export default NavBar;
