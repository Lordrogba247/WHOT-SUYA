import React from "react";
import "./Use.css";

const steps = [
    {
        num: "1",
        title: "Place your Order",
        desc: "Place your order by first adding to cart any item of your choice and determine the number of servings you'd love to have.",
    },
    {
        num: "2",
        title: "Make Payment",
        desc: "Fill in your delivery address and make payments for your order.",
    },
    {
        num: "3",
        title: "Receive your Order",
        desc: "Our delivery agents will be at your delivery address in minutes.",
    },
];

export default function Use() {
    return (
        <section className="use">
            <p className="use-label">How it Works</p>
            <div className="use-grid">
                {steps.map((step) => (
                    <div className="use-card" key={step.num}>
                        <div className="use-num">{step.num}</div>
                        <h3 className="use-title">{step.title}</h3>
                        <p className="use-desc">{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}