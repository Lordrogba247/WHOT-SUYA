import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logoImg from "../assets/logo.png";
import "./Navbar.css";

const Navbar = ({ cart = [] }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const searchRef = useRef(null);
    const navigate = useNavigate();

    const cartCount = cart.reduce((s, i) => s + i.qty, 0);

    // Close search on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleNavClick = () => setMenuOpen(false);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate("/menu", { state: { search: searchQuery.trim() } });
            setSearchQuery("");
            setSearchOpen(false);
            setMenuOpen(false);
        }
    };

    const handleSearchToggle = () => {
        setSearchOpen((prev) => !prev);
        setMenuOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="nav-logo">
                <Link to="/">
                    <img src={logoImg} alt="Whot Foods Logo" />
                </Link>
            </div>

            <ul className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
                <li><Link to="/menu" onClick={handleNavClick}>Menu</Link></li>
                <li>
                    <Link to="/cart" onClick={handleNavClick} className="nav-cart-link">
                        Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
                    </Link>
                </li>
                <li className="nav-search-mobile">
                    <form onSubmit={handleSearchSubmit} className="search-form-mobile">
                        <input
                            type="text"
                            placeholder="Search menu..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="search-input-mobile"
                        />
                        <button type="submit" className="search-submit-mobile">Go</button>
                    </form>
                </li>
            </ul>

            <div className="nav-right">
                <div className="search-wrap" ref={searchRef}>
                    {searchOpen && (
                        <form onSubmit={handleSearchSubmit} className="search-form">
                            <input
                                type="text"
                                placeholder="Search menu..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                                autoFocus
                            />
                        </form>
                    )}
                    <button className="btn-search" onClick={handleSearchToggle}>
                        <span className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.7em" viewBox="0 0 24 24">
                                <path d="M0 0h24v24H0z" fill="none" />
                                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" />
                            </svg>
                        </span>
                        <span className="btn-search-text">Search</span>
                    </button>
                </div>

                <button
                    className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
                    onClick={() => setMenuOpen((prev) => !prev)}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>

            {menuOpen && (
                <div className="nav-overlay" onClick={() => setMenuOpen(false)} />
            )}
        </nav>
    );
};

export default Navbar;