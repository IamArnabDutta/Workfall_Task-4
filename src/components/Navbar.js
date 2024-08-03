import React, { useState } from 'react';
import logo from '../assets/logo2.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for the hamburger menu

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <button
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                            aria-expanded="false"
                            onClick={toggleMenu}
                        >
                            {menuOpen ? <FaTimes className="block h-6 w-6" /> : <FaBars className="block h-6 w-6" />}
                        </button>
                    </div>
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">

                        <div className="hidden sm:block sm:ml-14">
                            <div className="flex space-x-4">
                                <a href="#" className="navbar-link navbar-item">WHY WORKFALL</a>
                                <a href="#" className="navbar-link navbar-item">JOIN US</a>
                                <a href="#" className="navbar-link navbar-item">PARTNERS</a>
                                <a href="#" className="navbar-link navbar-item">CLIENTS</a>
                                <div className="flex-shrink-0">
                                    <img className="h-8 w-auto my-2 mr-6" src={logo} alt="Your Company" />
                                </div>
                                <a href="#" className="navbar-link navbar-item ">BLOG</a>
                                <a href="#" className="navbar-link navbar-item">ARE YOU HIRING</a>
                                <a href="#" className="navbar-link navbar-item">SIGN UP</a>
                                <a href="#" className="navbar-link navbar-item">SIGN IN</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="sm:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="#" className="block navbar-link navbar-item">WHY WORKFALL</a>
                        <a href="#" className="block navbar-link navbar-item">JOIN US</a>
                        <a href="#" className="block navbar-link navbar-item">PARTNERS</a>
                        <a href="#" className="block navbar-link navbar-item">CLIENTS</a>
                        <a href="#" className="block navbar-link navbar-item">BLOG</a>
                        <a href="#" className="block navbar-link navbar-item">ARE YOU HIRING</a>
                        <a href="#" className="block navbar-link navbar-item">SIGN UP</a>
                        <a href="#" className="block navbar-link navbar-item">SIGN IN</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
