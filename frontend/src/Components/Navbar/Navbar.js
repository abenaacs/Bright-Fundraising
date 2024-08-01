import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    // State for mobile menu visibility and scroll position
    const [showMenu, setShowMenu] = useState(false);
    const [scrollUp, setScrollUp] = useState(false);

    // Effect to handle scroll events
    useEffect(() => {
        const handleScroll = () => {
            setScrollUp(window.pageYOffset > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Toggle mobile menu
    const toggleMenu = () => setShowMenu(!showMenu);

    // Dynamic classes based on scroll position
    const navClassName = `fixed z-30 w-full ${scrollUp ? 'navbar_bg' : 'bg-transparent'}`;
    const textColorClass = 'text-white';

    // Common styles
    const linkStyle = {
        fontSize: '14px',
        fontFamily: '"Unbounded", sans-serif'
    };

    // Reusable link component
    const NavLink = ({ to, children, className = '' }) => (
        <Link
            to={to}
            className={`${textColorClass} hover:text-gray-300 px-3 py-2 rounded-md ${className}`}
            style={linkStyle}
        >
            {children}
        </Link>
    );

    return (
        <nav className={navClassName}>
            <div className='px-6'>
                <div className="flex items-center justify-between h-16">
                    {/* Logo and brand name */}
                    <div className="flex items-center">
                        <NavLink to='/'>
                            <div className="kendil flex items-center justify-center">
                                <div id="main_heading">Ultimatum</div>
                            </div>
                        </NavLink>

                        {/* Desktop navigation links */}
                        <div className="hidden md:block ml-5">
                            <NavLink to='/campaigns'>Campaigns</NavLink>
                        </div>
                    </div>

                    <div className='flex'>
                        {/* Mobile menu button */}
                        <div className="pl-6 md:hidden">
                            <button onClick={toggleMenu} className={`${textColorClass} mobile_btns px-3 mr-2 py-2 rounded-md text-sm font-medium ml-2`}>
                                {showMenu ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        {/* Desktop login and signup buttons */}
                        <div className="hidden md:block">
                            <div className="ml-4 flex items-center md:ml-6">
                                <NavLink to="/login">Login</NavLink>
                                <Link
                                    className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-sm font-medium ml-2"
                                    to='/role'
                                    style={{
                                        ...linkStyle,
                                        backgroundImage: "radial-gradient(circle, #8061ff, #8669ff, #8c70ff, #9278ff, #987fff)"
                                    }}
                                >
                                    Sign Up for Free
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div className={`md:hidden navbar_bg ${showMenu ? 'block' : 'hidden'}`}>
                <div className="flex flex-col px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {[
                        { text: 'Campaigns', route: 'campaigns' },
                        { text: 'Login', route: 'login' },
                        { text: 'Sign up', route: 'role' }
                    ].map(({ text, route }) => (
                        <button className='mobile_btns' key={route} onClick={() => setShowMenu(false)}>
                            <NavLink to={`/${route}`}>
                                {text}
                            </NavLink>
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;