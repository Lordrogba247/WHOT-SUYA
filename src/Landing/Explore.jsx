import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Explore.css";

import menuImg1 from "../assets/fish-and-chips.png";
import menuImg2 from "../assets/pepper-soup.png";
import menuImg3 from "../assets/burger.png";

const menuItems = [
    {
        id: 101,
        name: "Fried Yam & Tilapia",
        price: 30.00,
        img: menuImg1,
    },
    {
        id: 102,
        name: "Cowfoot Peppersoup",
        price: 25.00,
        img: menuImg2,
    },
    {
        id: 103,
        name: "Chicken Burger",
        price: 18.00,
        img: menuImg3,
    },
];

export default function Explore({ setCart }) {
    const [addedId, setAddedId] = useState(null);
    const navigate = useNavigate();

    const handleAddToCart = (item) => {
        setCart((prev) => {
            const existing = prev.find((c) => c.id === item.id);
            if (existing) {
                return prev.map((c) =>
                    c.id === item.id ? { ...c, qty: c.qty + 1 } : c
                );
            }
            return [...prev, { ...item, qty: 1 }];
        });
        setAddedId(item.id);
        setTimeout(() => setAddedId(null), 1000);
    };

    return (
        <section className="explore">
            <p className="explore-label">Explore our Menu</p>

            <div className="explore-grid">
                {menuItems.map((item) => (
                    <div className="explore-card" key={item.id}>
                        <div className="explore-img-wrap">
                            <img src={item.img} alt={item.name} className="explore-img" />
                        </div>
                        <h3 className="explore-name">{item.name}</h3>
                        <p className="explore-price">CAD${item.price.toFixed(2)}</p>
                        <button
                            className={`btn-add ${addedId === item.id ? "btn-add--added" : ""}`}
                            onClick={() => handleAddToCart(item)}
                        >
                            {addedId === item.id ? "✓ Added!" : "Add to Cart"}
                        </button>
                    </div>
                ))}
            </div>

            <button className="btn-orders" onClick={() => navigate("/menu")}>
                Order Now ↗
            </button>

            <a
                className="explore-more"
                onClick={() => navigate("/menu")}
                style={{ cursor: "pointer" }}
            >
                More from our Menu →
            </a>

        </section>
    );
}