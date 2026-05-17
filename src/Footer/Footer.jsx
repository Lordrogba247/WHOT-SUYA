import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <p className="footer-copy">
                © 2026. WHOT FOODS (A Product of WHOT Restaurant & Lounge)
            </p>
            <div className="footer-links">
                <Link to="/policy">Privacy Policy</Link>
                <Link to="/terms">Term of use</Link>
            </div>
        </footer>
    );
}