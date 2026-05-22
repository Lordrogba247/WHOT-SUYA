import React from "react";
import "./About.css";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";

const About = () => {
    return (
        <section className="about" id="about">
            <h2 className="about-title">About the Product</h2>
            <p className="about-desc">
                Whot Foods Beef Suya is a 200g pack of premium, spice-marinated, flame-grilled beef delivering bold West
                African flavor with a nutritious balance. High in protein and rich in essential minerals, it provides sustained
                energy with carefully controlled fats and low carbs—offering a smoky, satisfying taste that supports both
                wellness and active living.
            </p>
            <div className="about-images">
                <img src={about1} alt="Beef Suya product" className="about-img about-img--1" />
                <img src={about2} alt="Beef Suya display" className="about-img about-img--2" />
                <img src={about3} alt="Beef Suya delivery" className="about-img about-img--3" />
            </div>
        </section>
    );
};

export default About;