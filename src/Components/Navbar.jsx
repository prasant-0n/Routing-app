import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
            <div className="flex items-center">
                <Link to="/" className="text-2xl font-bold">Logo</Link>
            </div>
            <ul className="flex space-x-4">
                <li>
                    <Link to="/services">Services</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/team">Team</Link>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
