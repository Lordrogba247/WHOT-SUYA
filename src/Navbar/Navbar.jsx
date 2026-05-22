import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import logoImg from "../assets/logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const scrollTo = (id) => {
        setMenuOpen(false);

        if (location.pathname === "/") {
            // Already on home — just scroll
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
            // On another page — go home first, then scroll after page loads
            navigate("/");
            setTimeout(() => {
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    };

    const handleLogo = () => {
        if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate("/");
            setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-logo" onClick={handleLogo} style={{ cursor: "pointer" }}>
                <img src={logoImg} alt="Whot Foods" />
            </div>

            <ul className={`nav-links ${menuOpen ? "nav-links--open" : ""}`}>
                <li><button onClick={() => scrollTo("about")}>About</button></li>
                <li><button onClick={() => scrollTo("serving")}>Serving</button></li>
                <li><button onClick={() => scrollTo("contact")}>Contact</button></li>
                <li className="nav-links-order">
                    {/* <button className="btn-order-now-mobile" onClick={() => scrollTo("order")}>
                        Order Now ↗
                    </button> */}
                </li>
            </ul>

            <div className="nav-right">
                <button className="btn-order-now1" onClick={() => scrollTo("order")}>
                    Order Now <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 15">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" />
                    </svg>
                </button>
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

            {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} />}
        </nav>
    );
};

export default Navbar;