import React from "react";
import "./Landing.css";
import logoImg from "../assets/logo.png";
import boxImg from "../assets/box.png";
import suyaText from "../assets/suya.png";
import badgeCard from "../assets/text-bottom.png";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import pepperImg from "../assets/pepper.png";

const Landing = () => {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="landing">

            {/* ── MOBILE ONLY: Box on top ── */}
            <div className="landing-right landing-right--mobile">
                <div className="landing-box-wrap">
                    <img src={boxImg} alt="Beef Suya Box" className="landing-box" />
                    <img src={badgeCard} alt="Best African Taste" className="landing-badge-card" />
                </div>
            </div>

            {/* ── Left (always visible) ── */}
            <div className="landing-left">
                <img src={logoImg} alt="Whot Foods" className="landing-logo" />
                <h1 className="landing-title">BEEF</h1>
                <img src={suyaText} alt="Suya" className="landing-suya-img" />
                <p className="landing-desc">
                    Craving premium suya? Taste the bold flavour of WHOT Foods Beef Suya!
                    Just Thaw, Microwave and Enjoy!
                </p>
                <button className="btn-order-now" onClick={() => scrollTo("order")}>
                    Order Now <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="2em" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path fill="currentColor" d="M5 17.59L15.59 7H9V5h10v10h-2V8.41L6.41 19z" />
                    </svg>
                </button>

                {/* Mobile-only price row */}
                <div className="landing-bottom-row-mobile">
                    <div className="landing-price">
                        <span className="landing-price-num">15</span>
                        <span className="landing-price-cur">CAD$</span>
                    </div>
                    <div className="landing-badges">
                        <img src={logo1} alt="badge" className="landing-badge" />
                        <img src={logo2} alt="badge" className="landing-badge" />
                    </div>
                </div>
            </div>

            {/* ── DESKTOP ONLY: Box on right ── */}
            <div className="landing-right landing-right--desktop">
                <img src={pepperImg} alt="" className="landing-pepper landing-pepper--1" aria-hidden="true" />

                <div className="landing-box-wrap">
                    <img src={boxImg} alt="Beef Suya Box" className="landing-box" />
                    <img src={badgeCard} alt="Best African Taste" className="landing-badge-card" />

                    <div className="landing-bottom-row">
                        <div className="landing-price">
                            <span className="landing-price-num">15</span>
                            <span className="landing-price-cur">CAD$</span>
                        </div>
                        <div className="landing-badges">
                            <img src={logo1} alt="badge" className="landing-badge" />
                            <img src={logo2} alt="badge" className="landing-badge" />
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Landing;