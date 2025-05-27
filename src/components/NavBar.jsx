import { Link, useLocation } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
    const location = useLocation();

    return (
        <nav className="flex items-center gap-6  p-4 shadow  max-w-[1140px] mx-auto mt-4 ">
            <Link
                to="/home"
                className={`font-medium justify-center text-center ${location.pathname === '/home' ? 'text-blue-600 ' : 'text-gray-600'}`}
            >
                Home
            </Link>

            <Link
                to="/about"
                className={`font-medium justify-center text-center ${location.pathname === '/about' ? 'text-blue-600 ' : 'text-gray-600'}`}
            >
                About
            </Link>

            <Link
                to="/contact"
                className={`font-medium  justify-center text-center ${location.pathname === '/contact' ? 'text-blue-600 ' : 'text-gray-600'}`}
            >
                Contact
            </Link>

          
        </nav>
    );
};

export default NavBar;
