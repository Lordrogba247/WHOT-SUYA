import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const DELIVERY_FEE = 20.99;

export default function Cart({ cart, setCart }) {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleQtyChange = (id, delta) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, qty: item.qty + delta } : item
                )
                .filter((item) => item.qty > 0)
        );
    };

    const handleRemove = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const handleFormChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const total = subtotal + DELIVERY_FEE;

    const handleCheckout = () => {
        // Backend will handle the rest — just log for now
        console.log("Order submitted:", { cart, form, total });
        alert("Order placed! The backend will process this.");
    };

    if (cart.length === 0) {
        return (
            <div className="cart-empty">
                <p className="cart-empty-icon"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 20 24">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path fill="currentColor" d="M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" />
                </svg></p>
                <h2>Your cart is empty</h2>
                <p>Add some delicious meals from our menu!</p>
                <button className="btn-go-menu" onClick={() => navigate("/menu")}>
                    Browse Menu
                </button>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="cart-container">

                {/* ── Header ── */}
                <div className="cart-header">
                    <h1 className="cart-title">CART</h1>
                    <p className="cart-subtitle">
                        Checkout your carted meals after filling your delivery address and contact details
                    </p>
                </div>

                {/* ── Cart Items ── */}
                <div className="cart-items">
                    {cart.map((item) => (
                        <div className="cart-item" key={item.id}>
                            <img src={item.img} alt={item.name} className="cart-item-img" />
                            <div className="cart-item-info">
                                <h3 className="cart-item-name">{item.name}</h3>
                                <p className="cart-item-price">CAD${item.price.toFixed(2)}</p>
                            </div>
                            <div className="cart-item-controls">
                                <button
                                    className="qty-btn"
                                    onClick={() => handleQtyChange(item.id, -1)}
                                >−</button>
                                <span className="qty-value">{item.qty}</span>
                                <button
                                    className="qty-btn"
                                    onClick={() => handleQtyChange(item.id, 1)}
                                >+</button>
                                <button
                                    className="remove-btn"
                                    onClick={() => handleRemove(item.id)}
                                    aria-label="Remove item"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                        <path d="M0 0h24v24H0z" fill="none" />
                                        <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7h16m-10 4v6m4-6v6M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12M9 7V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
                                    </svg>

                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <hr className="cart-divider" />

                {/* ── Delivery Form ── */}
                <div className="cart-form-section">
                    <h2 className="cart-form-title">Delivery Address & Details</h2>
                    <div className="cart-form-grid">
                        <div className="cart-form-group">
                            <label className="cart-label">Full Name</label>
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Type here..."
                                value={form.fullName}
                                onChange={handleFormChange}
                                className="cart-input"
                            />
                        </div>
                        <div className="cart-form-group">
                            <label className="cart-label">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Type here..."
                                value={form.email}
                                onChange={handleFormChange}
                                className="cart-input"
                            />
                        </div>
                        <div className="cart-form-group">
                            <label className="cart-label">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Type here..."
                                value={form.phone}
                                onChange={handleFormChange}
                                className="cart-input"
                            />
                        </div>
                        <div className="cart-form-group">
                            <label className="cart-label">Delivery Address</label>
                            <input
                                type="text"
                                name="address"
                                placeholder="Type here..."
                                value={form.address}
                                onChange={handleFormChange}
                                className="cart-input"
                            />
                        </div>
                    </div>
                </div>

                <hr className="cart-divider" />

                {/* ── Order Summary ── */}
                <div className="cart-summary">
                    <div className="cart-summary-row">
                        <span className="summary-label">Delivery Fee</span>
                        <span className="summary-value">CAD$ {DELIVERY_FEE.toFixed(2)}</span>
                    </div>
                    <div className="cart-summary-row total-row">
                        <span className="summary-label">Total Order</span>
                        <span className="summary-total">CAD$ {total.toFixed(2)}</span>
                    </div>
                    <button className="btn-checkout" onClick={handleCheckout}>
                        Checkout ↗
                    </button>
                </div>

            </div>
        </div>
    );
}