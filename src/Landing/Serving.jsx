import React from "react";
import "./Serving.css";
import about2 from "../assets/about2.png";

const steps = [
    {
        num: "1",
        title: "Thaw",
        desc: "Unbox the beef suya gentle into a bowl or plate to thaw",
    },
    {
        num: "2",
        title: "Microwave",
        desc: "Microwave for at least 3mins to refresh the seasonings and sizzling taste",
    },
    {
        num: "3",
        title: "Serve & Enjoy",
        desc: "Serve in a bowl with any drink of your choice and enjoy!",
    },
];

const Serving = () => {
    return (
        <section
            className="serving"
            id="serving"
            style={{ backgroundImage: `url(${about2})` }}
        >
            <div className="serving-overlay" />
            <p className="serving-label">Serving</p>
            <div className="serving-steps">
                {steps.map((step) => (
                    <div className="serving-step" key={step.num}>
                        <div className="step-num">{step.num}</div>
                        <h3 className="step-title">{step.title}</h3>
                        <p className="step-desc">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Serving;