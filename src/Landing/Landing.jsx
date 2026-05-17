import React from "react";
import { useNavigate } from "react-router-dom";
import "./Landing.css";

import IMG1 from "../assets/pepper.png";
import IMG2 from "../assets/hero-img.png";
import IMG3 from "../assets/text-bottom.png";
import IMG4 from "../assets/pepper-two.png";
import textImg from "../assets/text.png";

export default function Landing() {
    const navigate = useNavigate();

    return (
        <div className="landing">

            {/* ── NAVBAR ── */}


            {/* ── HERO ── */}
            <section className="hero">
                <div className="hero-left">
                    <img
                        src={textImg}
                        alt="Your Favorite Meals, Delivered To Your Door"
                        className="hero-text-img"
                    />
                    <p className="hero-sub show-2">
                        Satisfy your cravings in minutes. From local delicacies
                        to international flavors. We've got you covered.
                    </p>
                    <button className="btn-order show-2" onClick={() => navigate("/menu")}>Order Now <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" />
                    </svg>
                    </button>
                </div>

                <div className="hero-right">
                    <img src={IMG2} alt="main food" className="hero-img hero-img--2" />
                    <img src={IMG1} alt="pepper" className="hero-img hero-img--1" />
                    <img src={IMG4} alt="decoration" className="hero-img hero-img--4" />
                    <img src={IMG3} alt="badge" className="hero-img hero-img--3" />
                </div>
                <p className="hero-sub show-1">
                    Satisfy your cravings in minutes. From local delicacies
                    to international flavors. We've got you covered.
                </p>
                <button className="btn-order show-3" onClick={() => navigate("/menu")}>Order Now <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" />
                </svg></button>

            </section>

        </div>
    );
}